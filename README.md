# Stay Ready

A web app that helps you prepare before an encounter with ICE or law enforcement, and know what your rights are during one.

You fill in a short form and it generates a rights card you can save to your phone: your emergency contacts, the documents you want someone to be able to find, and a plain-language summary of what you are and aren't required to do. The card is meant to be screenshotted and kept offline, because the moment you need it is usually the moment you can't look something up.

## What's in it

- **Prepare a card** — emergency contacts, document checklist, immigration status selector, generated as an image you can save.
- **Know your rights** — what you can say, what you don't have to answer, what a warrant has to have on it.
- **Hotlines** — rapid response and legal support numbers.
- **Community help** — where to find local support.

Available in English, Spanish, Chinese, Korean, Hindi, and Bengali.

## Privacy

Nothing you enter is stored or transmitted. There is no backend, no database, and no analytics on the form. The card is generated in your browser and exists only on your device once you save it.

## Running it locally

```bash
npm install
npm run dev
```

Built with React, TypeScript, Vite, and Tailwind. Initial scaffolding was generated with Lovable, which is why the early commits are authored by its bot.

## Status

Working prototype. Not legal advice — it summarizes rights that are publicly documented, and it can't account for your specific situation. Talk to a lawyer if you have one.
