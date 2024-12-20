import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ReviewType } from '../../types/reviews';
import { TypingText } from '../TypingText';
import { MapIcon } from './MapIcon';

interface ReviewCardProps {
  review: ReviewType;
  index: number;
  inView: boolean;
}

export function ReviewCard({ review, index, inView }: ReviewCardProps) {
  const baseDelay = index * 1.5;
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

      {/* Verifizierungsanzeige */}
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
          <MapIcon />
          <span className="ml-2">Verifizierte Google Maps Bewertung</span>
        </motion.a>
      )}
    </motion.div>
  );
}