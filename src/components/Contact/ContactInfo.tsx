import { motion } from 'framer-motion';
import { contactItems } from '../../data/contact';

interface ContactInfoProps {
  delay?: number;
}

export function ContactInfo({ delay = 0.2 }: ContactInfoProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-16 lg:gap-32 xl:gap-48">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + (index * 0.1) }}
          className="flex flex-col items-center text-center min-w-[200px]"
        >
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110">
              <item.icon className="w-8 h-8 text-white" />
            </div>
          </a>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <a 
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-gray-400 hover:text-white transition-colors whitespace-nowrap"
          >
            {item.value}
          </a>
        </motion.div>
      ))}
    </div>
  );
}