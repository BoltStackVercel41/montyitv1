import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { LegalLinks } from './components/Legal/LegalLinks';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black"
      >
        <Navbar />
        <Hero />
        <Services id="leistungen" />
        <Experience id="erfahrung" />
        <Contact id="kontakt" />
        <LegalLinks />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;