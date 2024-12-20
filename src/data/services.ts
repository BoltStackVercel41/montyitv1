import { Monitor, Smartphone, Globe, Home, ShoppingBag, Phone } from 'lucide-react';
import { ServiceDetails } from '../types/services';

export const services: ServiceDetails[] = [
  {
    icon: Monitor,
    title: 'Windows Installation',
    description: 'Professionelle Installation und Konfiguration von Windows-Systemen.',
    gradient: 'from-blue-600 to-cyan-600',
    features: [
      'Windows Installation und Aktivierung',
      'Treiber-Installation und Updates',
      'Einrichtung von Sicherheitssoftware',
      'Datenübertragung vom alten System',
      'Grundlegende Software-Installation',
      'Persönliche Systemanpassung'
    ]
  },
  {
    icon: Smartphone,
    title: 'IT Support',
    description: 'Kompetente Hilfe bei technischen Problemen mit PCs, Smartphones und Tablets.',
    gradient: 'from-cyan-600 to-blue-500',
    features: [
      'Fehlerbehebung bei Hard- und Software',
      'Virus- und Malware-Entfernung',
      'Systemoptimierung',
      'Datenrettung',
      'Email-Einrichtung',
      'App-Installation und Updates'
    ]
  },
  {
    icon: Home,
    title: 'Smart Home',
    description: 'Einrichtung und Vernetzung Ihres intelligenten Zuhauses für mehr Komfort.',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Smart Home Beratung und Planung',
      'Installation von Smart Devices',
      'Einrichtung von Sprachassistenten',
      'Automatisierung und Szenen',
      'WLAN-Optimierung',
      'Sicherheitskonfiguration'
    ]
  },
  {
    icon: Globe,
    title: 'Webdesign',
    description: 'Moderne und KI-unterstützte Webentwicklung für Ihren digitalen Erfolg.',
    gradient: 'from-cyan-500 to-blue-400',
    features: [
      'Landing Pages',
      'Unternehmenswebseiten',
      'Web Applikationen',
      'Kostenlose Demo-Versionen',
      'KI-optimierte Entwicklung',
      'Responsive Design für alle Geräte'
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Kaufberatung',
    description: 'Individuelle Beratung beim Kauf von IT-Geräten und Zubehör.',
    gradient: 'from-blue-400 to-cyan-400',
    features: [
      'Bedarfsanalyse',
      'Marktrecherche',
      'Preisvergleich',
      'Kompatibilitätsprüfung',
      'Leistungsempfehlungen',
      'Zubehörberatung'
    ]
  },
  {
    icon: Phone,
    title: 'Remote Support',
    description: 'Schnelle Hilfe per Fernwartung bei dringenden Problemen.',
    gradient: 'from-cyan-400 to-blue-300',
    features: [
      'Sofortige Problemanalyse',
      'Fernzugriff auf Ihr System',
      'Software-Updates',
      'Konfigurationsanpassungen',
      'Performanceoptimierung',
      'Schulung und Anleitung'
    ]
  }
];