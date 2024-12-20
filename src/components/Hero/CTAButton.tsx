import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTAButton() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <motion.button
        onClick={scrollToContact}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-[2px] rounded-full"
      >
        <div className="bg-black rounded-full px-8 py-4 transition group-hover:bg-transparent">
          <span className="flex items-center space-x-2 text-white">
            <span>Kontaktieren Sie uns</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}