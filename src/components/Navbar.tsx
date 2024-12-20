import { motion } from 'framer-motion';
import { Menu, X, Monitor } from 'lucide-react';
import { useState } from 'react';
import { navigationItems } from '../data/navigation';
import { Logo } from './Logo';
import { NavigationItem } from './NavigationItem';
import { MobileMenu } from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <NavigationItem 
                key={item.name}
                item={item}
                index={index}
              />
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen} 
        items={navigationItems}
        onItemClick={() => setIsOpen(false)}
      />
    </motion.nav>
  );
}