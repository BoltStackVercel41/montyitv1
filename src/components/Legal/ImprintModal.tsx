import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImprintModal({ isOpen, onClose }: ImprintModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 border border-white/10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
              Impressum
            </h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h3>
                <p>Monty Schiemann<br />46535 Dinslaken</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Kontakt</h3>
                <p>
                  E-Mail: <a href="mailto:kontakt@monty-it.de" className="text-blue-400 hover:text-blue-300 transition-colors">kontakt@monty-it.de</a><br />
                  Telefon: <a href="tel:+4917634366048" className="text-blue-400 hover:text-blue-300 transition-colors">017634366048</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Umsatzsteuer-ID</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />DE329375276</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>Monty Schiemann<br />46535 Dinslaken</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}