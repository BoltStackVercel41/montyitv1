import { motion } from 'framer-motion';
import { NavigationItemType } from '../types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavigationItemType[];
  onItemClick: () => void;
}

export function MobileMenu({ isOpen, items, onItemClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
    >
      <div className="px-4 py-6 space-y-4">
        {items.map((item) => (
          <a
            key={item.name}
            href={`#${item.href}`}
            onClick={onItemClick}
            className="block text-white/80 hover:text-white transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
}