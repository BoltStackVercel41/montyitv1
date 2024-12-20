import { LucideIcon } from 'lucide-react';

export interface StatDetails {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  detailedDescription: string;
  gradient: string;
  highlights: string[];
  achievement?: string;
}

export interface TestimonialType {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}