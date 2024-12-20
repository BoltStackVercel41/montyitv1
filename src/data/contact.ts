import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactItem } from '../types/contact';

export const contactItems: ContactItem[] = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+49 176 34366048',
    href: 'tel:+4917634366048'
  },
  {
    icon: Mail,
    title: 'E-Mail',
    value: 'kontakt@monty-it.de',
    href: 'mailto:kontakt@monty-it.de'
  },
  {
    icon: MapPin,
    title: 'Standort',
    value: 'Dinslaken, Deutschland',
    href: 'https://maps.app.goo.gl/VcGXKj4MHWqNdJw67',
    external: true
  }
];