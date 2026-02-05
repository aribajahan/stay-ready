import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Shield, 
  DoorOpen, 
  Car, 
  User, 
  Briefcase, 
  FileText, 
  Wallet, 
  Phone,
  ArrowLeft,
  ChevronRight 
} from 'lucide-react';

const topics = [
  { key: 'universalRights', icon: Shield, path: '/rights/universal' },
  { key: 'iceAtDoor', icon: DoorOpen, path: '/rights/door' },
  { key: 'stoppedCar', icon: Car, path: '/rights/car' },
  { key: 'stoppedStreet', icon: User, path: '/rights/street' },
  { key: 'iceWorkplace', icon: Briefcase, path: '/rights/workplace' },
  { key: 'warrantsDifference', icon: FileText, path: '/rights/warrants' },
  { key: 'whatToCarry', icon: Wallet, path: '/rights/carry' },
  { key: 'hotlinesResources', icon: Phone, path: '/rights/hotlines' },
];

export default function ReviewRights() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b-4 border-foreground">
        <div className="container flex items-center justify-between p-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold hover:text-primary transition-colors"
          >
            <ArrowLeft size={24} />
            {t('home')}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container py-8 px-4 pb-24">
        <h1 className="font-display text-3xl font-bold mb-8 text-center">
          {t('reviewRights')}
        </h1>

        <div className="max-w-md mx-auto space-y-3">
          {topics.map((topic, index) => (
            <Link
              key={topic.key}
              to={topic.path}
              className="flex items-center gap-4 p-4 bg-card border-4 border-foreground transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 animate-slide-up"
              style={{ 
                boxShadow: '6px 6px 0px hsl(var(--pure-black))',
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="p-2 bg-primary text-primary-foreground">
                <topic.icon size={24} />
              </div>
              <span className="flex-1 font-bold text-lg">
                {t(topic.key as any)}
              </span>
              <ChevronRight size={24} className="text-muted-foreground" />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
