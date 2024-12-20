import { motion } from 'framer-motion';
import { useState } from 'react';
import { ImprintModal } from './ImprintModal';
import { PrivacyModal } from './PrivacyModal';

export function LegalLinks() {
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <div className="py-8 bg-black">
        <div className="flex justify-center space-x-4 text-sm">
          <button
            onClick={() => setIsImprintOpen(true)}
            className="text-white/60 hover:text-white transition-colors"
          >
            Impressum
          </button>
          <span className="text-white/60">•</span>
          <button
            onClick={() => setIsPrivacyOpen(true)}
            className="text-white/60 hover:text-white transition-colors"
          >
            Datenschutz
          </button>
        </div>
      </div>

      <ImprintModal 
        isOpen={isImprintOpen}
        onClose={() => setIsImprintOpen(false)}
      />
      <PrivacyModal 
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </>
  );
}