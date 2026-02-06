# Security Review: my-rights-card

**Repository:** https://github.com/aribajahan/my-rights-card
**Review Date:** 2026-02-05
**Reviewer:** Automated security review via Claude Code
**App Type:** Frontend-only React SPA (no backend, no auth, no database)

---

## Executive Summary

This is a well-structured, frontend-only React application that helps people understand their legal rights. Because it has **no backend, no authentication, no database, and no API integrations**, its attack surface is relatively small. The sensitive data it handles (immigration status, document numbers, emergency contacts) stays entirely in-memory during the session and is never transmitted or persisted — which is actually a strong privacy-by-design choice.

That said, there are findings worth addressing, ranging from a high-severity dependency vulnerability to configuration improvements.

---

## Findings

### HIGH SEVERITY

#### H1: React Router XSS via Open Redirect (CVE — Dependency Vulnerability)

**What:** `react-router-dom@6.30.1` has a known vulnerability (GHSA-2w69-qvjg-hvjx) that allows XSS through open redirects. This affects `@remix-run/router`, `react-router`, and `react-router-dom`.

**Why it matters:** An attacker could craft a malicious URL that, when clicked, redirects users to a phishing site or executes JavaScript. For an app serving a vulnerable population (immigrants), this is especially concerning — imagine a fake "Know Your Rights" link that redirects to a credential-harvesting page.

**How it works:** React Router versions ≤6.30.2 don't properly sanitize redirect targets, allowing `javascript:` URLs or redirects to external domains through specially crafted route parameters.

**Fix:**
```bash
npm audit fix
```
This will update to `react-router-dom@6.30.2+` which patches the vulnerability.

**Learning context:** This is a "supply chain" vulnerability — your code is fine, but the library you depend on has a bug. This is why regular `npm audit` runs matter. GitHub's Dependabot can automate this.

---

#### H2: Vulnerable Development Dependencies (esbuild, glob, js-yaml, lodash)

**What:** `npm audit` found 8 total vulnerabilities:
- **esbuild ≤0.24.2** (moderate): Dev server allows any website to send requests and read responses
- **vite ≤6.1.6** (moderate): Depends on vulnerable esbuild
- **glob 10.2.0-10.4.5** (high): Command injection via `-c/--cmd` flag
- **js-yaml 4.0.0-4.1.0** (moderate): Prototype pollution in merge (`<<`)
- **lodash 4.0.0-4.17.21** (moderate): Prototype pollution in `_.unset` and `_.omit`

**Why it matters:** The esbuild/vite issue only affects the dev server (not production users). The glob command injection requires the `glob` CLI binary to be invoked with attacker-controlled arguments, which doesn't happen in this app. The lodash and js-yaml prototype pollution issues are mostly theoretical but should still be patched.

**Fix:**
```bash
npm audit fix
```

**Learning context:** Not every vulnerability is equally exploitable. Severity ratings are worst-case. Always read the advisory to understand if your specific usage is affected. Dev-only dependencies are lower risk since they never reach end users, but you should still patch them because developers are also attack targets.

---

### MEDIUM SEVERITY

#### M1: TypeScript Strict Mode Disabled

**What:** In `tsconfig.app.json`, several safety options are turned off:
```json
"strict": false,
"noImplicitAny": false,
"strictNullChecks": false,
"noFallthroughCasesInSwitch": false
```

**Why it matters:** TypeScript's strict mode catches entire classes of bugs at compile time. Without `strictNullChecks`, you can access properties on `null`/`undefined` without the compiler warning you. Without `noImplicitAny`, function parameters default to `any`, which disables type checking for those values. While not a direct security vulnerability, type safety prevents the kinds of bugs that *become* security vulnerabilities.

**Example:** In `DocumentForm.tsx:56` and `StatusSelector.tsx:52`, the code uses `as any` type assertions — with strict mode, the compiler would force proper typing.

**Fix:** Gradually enable strict options:
1. Start with `"strictNullChecks": true` (catches the most bugs)
2. Then `"noImplicitAny": true`
3. Work up to `"strict": true`

**Learning context:** Lovable-generated apps often have strict mode off because it's easier for AI to generate code that compiles. This is a trade-off: faster generation but weaker safety net. For a production app, strict mode is worth the investment.

---

#### M2: Missing Content Security Policy (CSP) Headers

**What:** The `index.html` has no Content Security Policy meta tag. There's no `<meta http-equiv="Content-Security-Policy" ...>` tag.

**Why it matters:** CSP tells the browser which sources of content (scripts, styles, images, etc.) are trusted. Without CSP, if an attacker finds any way to inject HTML into the page, they can load scripts from anywhere. CSP is a defense-in-depth measure — it won't prevent an attack by itself, but it limits the blast radius.

**Recommended CSP for this app:**
```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'">
```

The `img-src data: blob:` is needed because the card generation feature creates data URLs and blob URLs for the downloadable image.

**Learning context:** CSP is one of the most effective browser security features. The `'unsafe-inline'` for styles is needed because Tailwind/styled-components inject inline styles, but for scripts, keeping it to `'self'` is important. In production, CSP headers should ideally come from the server, not just a meta tag.

---

#### M3: No `.env` in `.gitignore`

**What:** The `.gitignore` file doesn't include `.env`, `.env.local`, `.env.production`, or similar patterns.

**Why it matters:** If anyone adds a `.env` file in the future (common when adding Supabase, analytics, etc.), it could accidentally be committed with secrets. This is a preventive measure.

**Fix:** Add to `.gitignore`:
```
# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env*.local
```

**Learning context:** `.gitignore` is your first line of defense against accidentally committing secrets. It's much easier to prevent a secret from being committed than to remove it from git history after the fact (which requires `git filter-branch` or BFG Repo-Cleaner and is never fully reliable if the repo has been cloned).

---

### LOW SEVERITY

#### L1: Console.error Statements in Production Code

**What:** Three `console.error` calls exist in production code:
- `PrepareCard.tsx:74` — logs card save failures
- `PrepareCard.tsx:103` — logs share failures
- `NotFound.tsx:8` — logs 404 navigation attempts including the URL path

**Why it matters:** While `console.error` doesn't expose data to remote attackers, it does make information available in the browser's DevTools console. The 404 handler logs `location.pathname`, which is fine now but could be a concern if the app ever includes sensitive data in URLs. More importantly, leaving console statements in production is a code quality issue.

**Fix:** Either:
1. Use a proper error reporting service (like Sentry) that only sends errors to your backend
2. Strip console statements in production builds by adding a Vite plugin:
```ts
// vite.config.ts
build: {
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
}
```

---

#### L2: `lovable-tagger` Dev Plugin — Properly Guarded but Worth Noting

**What:** The Vite config includes `lovable-tagger`, a Lovable-specific plugin:
```ts
plugins: [react(), mode === "development" && componentTagger()].filter(Boolean)
```

**Why it matters:** This plugin is only active in development mode, which is correct. It adds data attributes to components for Lovable's visual editor. The guard (`mode === "development"`) means it won't affect production builds. However, `build:dev` in `package.json` runs `vite build --mode development`, which WOULD include the tagger in that build output.

**Fix:** Consider whether `build:dev` is needed. If it is, be aware that builds using it will include the component tagger's data attributes, which leak internal component structure.

---

#### L3: Large Unused Dependency Surface

**What:** The app includes many shadcn/ui components that aren't used in the actual pages: `accordion`, `alert-dialog`, `aspect-ratio`, `avatar`, `calendar`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `drawer`, `hover-card`, `input-otp`, `menubar`, `pagination`, `resizable`, `skeleton`, `slider`, `table`, `tabs`, and more.

Similarly, `recharts`, `react-day-picker`, `embla-carousel-react`, `react-resizable-panels`, `cmdk`, and `next-themes` are in `dependencies` but don't appear to be used in any page or component.

**Why it matters:** Each unused dependency is code that gets bundled (increasing load time) and expands the attack surface. More packages = more potential vulnerabilities to monitor. The current bundle is 394KB gzipped to ~117KB, which could be significantly smaller.

**Fix:** Audit and remove unused dependencies:
```bash
# Check for unused packages
npx depcheck
```

---

#### L4: `dangerouslySetInnerHTML` in shadcn/ui Chart Component

**What:** `src/components/ui/chart.tsx:70` uses `dangerouslySetInnerHTML` to inject CSS styles.

**Why it matters:** `dangerouslySetInnerHTML` bypasses React's XSS protection. In this case, the values come from a static config object (`ChartConfig`), not from user input, so the risk is minimal. However, if the chart component were ever used with user-supplied config data, this could become an XSS vector.

**Current risk:** Very Low — the chart component doesn't appear to be used in this app at all, and even if it were, the data flows from static config, not user input.

**Learning context:** `dangerouslySetInnerHTML` is React's explicit "I know what I'm doing" escape hatch. Anytime you see it, the question to ask is: "Can an attacker influence what goes into this?" If the answer is yes, you have an XSS vulnerability. If it's all static/developer-controlled data, it's safe.

---

## What's Done Well

1. **No backend = no backend vulnerabilities.** This is actually a significant security advantage. There's no database to SQL-inject, no API to abuse, no server to compromise.

2. **Data stays in memory.** User data (immigration status, document numbers, emergency contacts) is only held in React state during the session. It's never saved to `localStorage`, `sessionStorage`, or sent to any server. When the user closes the tab, the data is gone. This is excellent privacy-by-design for sensitive personal information.

3. **No hardcoded secrets.** The codebase has zero API keys, tokens, or credentials. No Supabase integration means no `service_role` key to leak.

4. **React's built-in XSS protection.** All user-facing form data (names, phone numbers, document numbers) is rendered through React's JSX, which auto-escapes output. No raw HTML rendering of user input anywhere in the app logic.

5. **Input validation.** The `EmergencyContactForm` validates phone numbers (10-15 digits) and trims whitespace. While not comprehensive, it's a good start.

6. **No source maps in production.** The production build doesn't emit `.map` files, so the source code isn't exposed.

7. **Proper `href` usage.** The only external link uses `tel:` protocol for the hotline number. No user-controlled `href` attributes.

---

## Recommended Next Steps

### Immediate (do now)
1. Run `npm audit fix` to patch dependency vulnerabilities
2. Add `.env` patterns to `.gitignore`

### Short-term (next sprint)
3. Add a Content Security Policy meta tag to `index.html`
4. Remove unused dependencies and UI components to reduce bundle size and attack surface
5. Remove or gate `console.error` statements for production

### Medium-term (as the app grows)
6. Enable TypeScript strict mode incrementally
7. Set up GitHub Dependabot for automated dependency updates
8. Add a pre-commit hook (using `husky` + `lint-staged`) to run linting before commits
9. If adding any backend/API integration, conduct a thorough review of data handling

### If adding Supabase or any backend
10. Use Row Level Security (RLS) — not just API-level auth
11. Never expose `service_role` keys in client code
12. Add rate limiting to any API endpoints
13. Encrypt sensitive data at rest (document numbers, etc.)

---

## Methodology

| Step | Tool/Technique | Result |
|------|---------------|--------|
| Dependency scan | `npm audit` | 8 vulnerabilities (4 moderate, 4 high) |
| Secrets scan | Grep for API keys, tokens, JWTs, env vars | Clean — no secrets found |
| XSS review | Manual code review + grep for `dangerouslySetInnerHTML`, `innerHTML`, `eval` | 1 instance in unused chart component (low risk) |
| Routing review | Manual review of `App.tsx`, all pages, `NavLink` | No open redirects in app code; dependency-level vulnerability in react-router |
| Data storage review | Grep for `localStorage`, `sessionStorage`, `fetch`, `console.log` | No persistent storage; 3 console.error statements |
| Build config review | Review of `vite.config.ts`, `tsconfig.json`, `index.html` | No source maps in prod; strict mode off; no CSP |
| Static analysis | `eslint-plugin-security` | 12 warnings (all false-positive object injection on typed lookups) |

---

*This review covers the codebase as of commit on 2026-02-05. Security is not a one-time activity — re-review when adding features, dependencies, or backend integrations.*
