import { motion } from 'framer-motion';
import { NavigationItemType } from '../types/navigation';

interface NavigationItemProps {
  item: NavigationItemType;
  index: number;
}

export function NavigationItem({ item, index }: NavigationItemProps) {
  return (
    <motion.a
      href={`#${item.href}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }}
      className="relative px-6 py-3 group"
    >
      {/* Container für Hintergrundeffekt */}
      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Text */}
      <span className="relative text-white text-lg font-medium group-hover:text-blue-400 transition-colors">
        {item.name}
      </span>
      
      {/* Unterstrich */}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ 
          scaleX: 1, 
          opacity: 1,
          transition: { 
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        style={{ originX: 0 }}
      />

      {/* Glow Effekt */}
      <motion.span
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/5 to-cyan-400/5 blur-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1.1,
          transition: { 
            duration: 0.3,
            ease: "easeOut"
          }
        }}
      />
    </motion.a>
  );
}