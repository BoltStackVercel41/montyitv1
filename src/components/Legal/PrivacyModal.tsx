import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
          className="relative w-full max-w-2xl bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 border border-white/10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
              Datenschutzerklärung
            </h2>

            <div className="space-y-6 text-gray-300">
              <section>
                <h3 className="text-xl font-semibold text-white mb-2">1. Verantwortliche Stelle</h3>
                <p>
                  Monty Schiemann<br />
                  46535 Dinslaken<br />
                  E-Mail: kontakt@monty-it.de<br />
                  Tel: 017634366048
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-2">2. Datenerfassung auf unserer Website</h3>
                <h4 className="text-lg font-semibold text-white/90 mb-2">2.1 Server-Log-Dateien</h4>
                <p>
                  Der Provider unserer Website (Vercel) erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt:
                </p>
                <ul className="list-disc list-inside mt-2 mb-4">
                  <li>Browsertyp und -version</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-2">3. Kontaktformular</h3>
                <p>
                  Wenn Sie uns über unser Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht) bei uns gespeichert, um Ihre Anfrage zu bearbeiten. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
                </p>
                <p className="mt-2">
                  Für den E-Mail-Versand nutzen wir den Dienst Resend. Ihre Daten werden dabei auf Servern in der EU verarbeitet und unterliegen den strengen Datenschutzrichtlinien der DSGVO.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-2">4. Hosting und Content Delivery Networks (CDN)</h3>
                <p>
                  Diese Website wird auf Vercel gehostet. Die Server von Vercel können sich in verschiedenen Ländern befinden, jedoch werden Ihre Daten gemäß der DSGVO verarbeitet. Weitere Informationen finden Sie in der{' '}
                  <a 
                    href="https://vercel.com/legal/privacy-policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Datenschutzerklärung von Vercel
                  </a>.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-2">5. Externe Dienste</h3>
                <h4 className="text-lg font-semibold text-white/90 mb-2">5.1 Google Maps</h4>
                <p>
                  Wir verlinken zu Google Maps für die Anzeige unseres Standorts. Beim Klick auf den Link werden Sie zu Google Maps weitergeleitet, wobei Ihre IP-Adresse an Google übermittelt wird. Weitere Informationen finden Sie in der{' '}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Datenschutzerklärung von Google
                  </a>.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-2">6. Ihre Rechte</h3>
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Auskunft über Ihre gespeicherten Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten</li>
                  <li>Einschränkung der Datenverarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                  <li>Widerspruch gegen die Datenverarbeitung</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-2">7. Kontakt</h3>
                <p>
                  Bei Fragen zum Datenschutz können Sie uns jederzeit unter{' '}
                  <a 
                    href="mailto:kontakt@monty-it.de"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    kontakt@monty-it.de
                  </a>
                  {' '}kontaktieren.
                </p>
              </section>

              <div className="mt-6 p-4 rounded-lg bg-blue-900/20 border border-blue-500/20">
                <p className="text-sm">
                  Stand: März 2024. Wir behalten uns vor, diese Datenschutzerklärung anzupassen, 
                  um sie stets den aktuellen rechtlichen Anforderungen anzupassen.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}