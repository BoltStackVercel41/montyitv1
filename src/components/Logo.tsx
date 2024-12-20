import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';

export function Logo() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-3 cursor-pointer"
      onClick={scrollToTop}
    >
      {/* Animiertes Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="relative w-10 h-10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl animate-gradient-x" 
          style={{ backgroundSize: '200% 200%' }}
        />
        <div className="absolute inset-[2px] bg-black rounded-lg flex items-center justify-center">
          <Monitor className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      {/* Logo Text */}
      <motion.span 
        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
        style={{ backgroundSize: '200% 200%' }}
      >
        Monty IT
      </motion.span>
    </motion.div>
  );
}