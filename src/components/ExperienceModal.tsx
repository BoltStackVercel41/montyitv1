import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { StatDetails } from '../types/experience';

interface ExperienceModalProps {
  stat: StatDetails | null;
  onClose: () => void;
}

export function ExperienceModal({ stat, onClose }: ExperienceModalProps) {
  if (!stat) return null;

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
          className="relative w-full max-w-2xl bg-black/90 rounded-2xl p-8 border border-white/10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${stat.gradient} p-4`}>
            <stat.icon className="w-full h-full text-white" />
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">
            {stat.label}
            <span className="ml-2 text-2xl text-gray-400">
              ({stat.value}{stat.suffix})
            </span>
          </h3>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">{stat.detailedDescription}</p>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Highlights:</h4>
              <ul className="list-disc list-inside space-y-2">
                {stat.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>

            {stat.achievement && (
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/20">
                <h4 className="text-xl font-semibold text-white mb-2">Besondere Leistung:</h4>
                <p>{stat.achievement}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}