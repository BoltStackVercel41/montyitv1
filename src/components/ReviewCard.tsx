import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ReviewType } from '../types/reviews';
import { TypingText } from './TypingText';

interface ReviewCardProps {
  review: ReviewType;
  index: number;
  inView: boolean;
}

export function ReviewCard({ review, index, inView }: ReviewCardProps) {
  const baseDelay = index * 1.5;
  // Berechne die Gesamtverzögerung für die Verifizierung
  // Basis-Verzögerung + Schreibverzögerung (25ms pro Zeichen) + kleine zusätzliche Verzögerung
  const verificationDelay = baseDelay + 0.3 + (review.text.length * 0.025) + 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: baseDelay }}
      className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm flex flex-col h-full"
    >
      {/* Header mit Autor und Bewertung */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={review.avatar} 
            alt={review.author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{review.author}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star 
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">{review.date}</span>
          </div>
        </div>
      </div>

      {/* Bewertungstext */}
      <div className="flex-grow">
        <TypingText 
          text={review.text}
          className="text-gray-300"
          delay={baseDelay + 0.3}
        />
      </div>

      {/* Verifizierungsanzeige - immer unten */}
      {review.verified && (
        <motion.a
          href="https://maps.app.goo.gl/VcGXKj4MHWqNdJw67"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: verificationDelay
          }}
          className="mt-6 flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors group"
        >
          <svg className="w-4 h-4 mr-1 text-blue-500 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
          Verifizierte Google-Bewertung
        </motion.a>
      )}
    </motion.div>
  );
}