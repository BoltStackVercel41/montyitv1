import { Award, Users, CheckCircle, Star } from 'lucide-react';
import { StatDetails } from '../types/experience';

export const stats: StatDetails[] = [
  {
    icon: Award,
    value: 8,
    suffix: '+',
    label: 'Jahre Erfahrung',
    description: 'Professionelle IT-Dienstleistungen',
    detailedDescription: 'Seit über 8 Jahren biete ich erstklassige IT-Dienstleistungen für Privat- und Geschäftskunden. Meine Expertise wächst stetig mit den Anforderungen meiner Kunden.',
    gradient: 'from-blue-600 to-cyan-600',
    highlights: [
      'Kontinuierliche Weiterbildung und Zertifizierungen',
      'Expertise in modernsten Technologien',
      'Umfangreiche Projekterfahrung',
      'Effiziente Problemlösungskompetenz',
      'Flexible Anpassung an Kundenanforderungen'
    ]
  },
  {
    icon: Users,
    value: 250,
    suffix: '+',
    label: 'Zufriedene Kunden',
    description: 'Privatpersonen und Unternehmen',
    detailedDescription: 'Über 250 zufriedene Kunden vertrauen auf meine IT-Expertise. Von Privatpersonen bis hin zu mittelständischen Unternehmen - ich biete maßgeschneiderte Lösungen.',
    gradient: 'from-cyan-600 to-blue-500',
    highlights: [
      'Persönliche Betreuung',
      'Schnelle Reaktionszeiten',
      'Individuelle Lösungskonzepte',
      'Transparente Kommunikation',
      'Langjährige Kundenbeziehungen'
    ]
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: '+',
    label: 'Erfolgreiche Projekte',
    description: 'Von PC-Setup bis Webdesign',
    detailedDescription: 'Mehr als 100 erfolgreich abgeschlossene Projekte sprechen für meine Kompetenz. Jedes Projekt wird mit höchster Sorgfalt und Professionalität durchgeführt.',
    gradient: 'from-blue-500 to-cyan-500',
    highlights: [
      'Breites Spektrum an IT-Dienstleistungen',
      'Termingerechte Projektabwicklung',
      'Transparente Kommunikation',
      'Qualitätssicherung',
      'Nachhaltige Lösungen'
    ]
  },
  {
    icon: Star,
    value: 4.9,
    label: 'Durchschnittliche Bewertung',
    description: 'Basierend auf Kundenfeedback',
    detailedDescription: 'Meine durchschnittliche Bewertung von 4.9 von 5 Sternen basiert auf echtem Kundenfeedback und spiegelt meinen hohen Qualitätsanspruch wider.',
    gradient: 'from-cyan-500 to-blue-400',
    highlights: [
      'Transparentes Feedback-System',
      'Kontinuierliche Qualitätsverbesserung',
      'Persönlicher Service',
      'Kompetente Beratung',
      'Zuverlässige Umsetzung'
    ]
  }
];