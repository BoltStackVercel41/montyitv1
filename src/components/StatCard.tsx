import { motion } from 'framer-motion';
import { StatDetails } from '../types/experience';
import { AnimatedNumber } from './AnimatedNumber';

interface StatCardProps {
  stat: StatDetails;
  index: number;
  inView: boolean;
  onClick: () => void;
}

export function StatCard({ stat, index, inView, onClick }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 
        transition-all duration-300 cursor-pointer"
    >
      <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${stat.gradient} p-4 
        transform group-hover:scale-110 transition-transform duration-300`}>
        <stat.icon className="w-full h-full text-white" />
      </div>
      <div className="text-4xl font-bold mb-2 flex items-baseline">
        {typeof stat.value === 'number' && stat.value % 1 === 0 ? (
          <AnimatedNumber 
            value={stat.value} 
            duration={2} 
            delay={index * 0.2} 
          />
        ) : (
          <span>{stat.value}</span>
        )}
        {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
      </div>
      <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {stat.description}
      </p>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 
        group-hover:opacity-10 transition-opacity duration-300`} />
    </motion.div>
  );
}