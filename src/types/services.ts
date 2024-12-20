import { LucideIcon } from 'lucide-react';

export interface ServiceDetails {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  features: string[];
  pricing?: string;
}