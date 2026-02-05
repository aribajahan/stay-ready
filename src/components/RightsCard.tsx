import { forwardRef } from 'react';
import { ImmigrationStatus, EmergencyContact, statusGuidance } from '@/types/card';

interface RightsCardProps {
  status: ImmigrationStatus;
  contacts: EmergencyContact[];
}

export const RightsCard = forwardRef<HTMLDivElement, RightsCardProps>(
  ({ status, contacts }, ref) => {
    const showGuidance = status && status !== 'preferNot' && statusGuidance[status];

    return (
      <div
        ref={ref}
        className="bg-pure-white text-pure-black p-8 font-display"
        style={{
          width: '540px',
          minHeight: '960px',
          aspectRatio: '9/16',
        }}
      >
        {/* Header */}
        <div className="mb-8">
          <div 
            className="inline-block px-4 py-2 mb-4"
            style={{ backgroundColor: '#FF0066' }}
          >
            <span className="text-pure-white text-sm font-bold tracking-widest uppercase">
              Constitutional Rights
            </span>
          </div>
          <h1 
            className="text-5xl font-bold leading-none tracking-tight"
            style={{ color: '#000000' }}
          >
            KNOW YOUR
            <br />
            RIGHTS
          </h1>
        </div>

        {/* Divider */}
        <div 
          className="h-2 w-24 mb-8"
          style={{ backgroundColor: '#0033FF' }}
        />

        {/* Rights */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <div 
              className="w-3 h-3 mt-2 flex-shrink-0"
              style={{ backgroundColor: '#FF0066' }}
            />
            <p className="text-xl font-bold leading-tight">
              You have the right to remain silent.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div 
              className="w-3 h-3 mt-2 flex-shrink-0"
              style={{ backgroundColor: '#FF0066' }}
            />
            <p className="text-xl font-bold leading-tight">
              You do not have to open your door without a warrant signed by a judge.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div 
              className="w-3 h-3 mt-2 flex-shrink-0"
              style={{ backgroundColor: '#FF0066' }}
            />
            <p className="text-xl font-bold leading-tight">
              You do not have to consent to a search.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div 
              className="w-3 h-3 mt-2 flex-shrink-0"
              style={{ backgroundColor: '#FF0066' }}
            />
            <p className="text-xl font-bold leading-tight">
              You have the right to a lawyer.
            </p>
          </div>
        </div>

        {/* Calm reminder */}
        <div 
          className="p-4 mb-6"
          style={{ backgroundColor: '#0033FF' }}
        >
          <p className="text-pure-white text-lg font-bold text-center">
            Stay calm. Do not run. Do not lie.
          </p>
        </div>

        {/* Status-specific guidance */}
        {showGuidance && (
          <div className="mb-6 p-4 border-2 border-pure-black">
            <p className="text-base font-medium">
              {statusGuidance[status]}
            </p>
          </div>
        )}

        {/* Emergency contacts */}
        {contacts.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: '#666' }}>
              Emergency Contacts
            </p>
            <div className="space-y-1">
              {contacts.map((contact) => (
                <p key={contact.id} className="text-base font-medium">
                  {contact.name}: {contact.phone}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Hotline */}
        <div 
          className="p-4 mb-6"
          style={{ backgroundColor: '#FF0066' }}
        >
          <p className="text-pure-white text-center">
            <span className="text-sm font-bold uppercase tracking-wide">Hotline</span>
            <br />
            <span className="text-xl font-bold">United We Dream: 1-844-363-1423</span>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-center" style={{ color: '#666' }}>
          This card asserts your constitutional rights. It is not legal advice.
        </p>
      </div>
    );
  }
);

RightsCard.displayName = 'RightsCard';
