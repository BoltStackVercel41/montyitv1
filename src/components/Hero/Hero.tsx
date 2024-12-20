import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';
import { ScrollIndicator } from './ScrollIndicator';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/80" />
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80')] bg-cover bg-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="block mb-4">Ihr Partner für</span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative block mb-4 pb-4"
            >
              {/* Statischer Basis-Text */}
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 leading-[1.2] animate-gradient-x">
                IT-Lösungen
              </span>
              
              {/* Animierter Glow-Effekt */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.span>
            <span className="block">in Ihrer Nähe</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mt-8"
          >
            Von Windows-Installation bis Webdesign - ich biete professionelle IT-Dienstleistungen 
            für Privat- und Geschäftskunden.
          </motion.p>

          <CTAButton />
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
}