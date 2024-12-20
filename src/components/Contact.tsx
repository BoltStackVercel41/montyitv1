import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactInfo } from './Contact/ContactInfo';

interface ContactProps {
  id: string;
}

export default function Contact({ id }: ContactProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id={id} className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lassen Sie uns über Ihre IT-Anforderungen sprechen
          </p>
        </motion.div>

        <ContactInfo />
      </div>
    </section>
  );
}