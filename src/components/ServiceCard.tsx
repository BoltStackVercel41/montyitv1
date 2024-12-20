import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ServiceDetails } from '../types/services';

interface ServiceCardProps {
  service: ServiceDetails;
  index: number;
  inView: boolean;
  onClick: () => void;
}

export function ServiceCard({ service, index, inView, onClick }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 
        transition-all duration-300 cursor-pointer"
    >
      <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} p-4 
        transform group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {service.description}
      </p>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 
        group-hover:opacity-10 transition-opacity duration-300`} />
    </motion.div>
  );
}