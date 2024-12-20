import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';
import { services } from '../data/services';
import { ServiceDetails } from '../types/services';

interface ServicesProps {
  id: string;
}

export default function Services({ id }: ServicesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  return (
    <>
      <section ref={ref} id={id} className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meine Leistungen</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professionelle IT-Dienstleistungen für alle Ihre technischen Anforderungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                service={service}
                index={index}
                inView={inView}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </>
  );
}