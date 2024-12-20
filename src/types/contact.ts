import { LucideIcon } from 'lucide-react';

export interface ContactItem {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  external?: boolean;
}