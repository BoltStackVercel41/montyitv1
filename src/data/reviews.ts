import { ReviewType } from '../types/reviews';

// Funktion zur Berechnung der relativen Zeit
function getRelativeTimeString(date: Date): string {
  const now = new Date();
  const diffInMonths = (now.getFullYear() - date.getFullYear()) * 12 + 
    (now.getMonth() - date.getMonth());
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInYears > 0) {
    return `vor ${diffInYears} ${diffInYears === 1 ? 'Jahr' : 'Jahren'}`;
  } else if (diffInMonths > 0) {
    return `vor ${diffInMonths} ${diffInMonths === 1 ? 'Monat' : 'Monaten'}`;
  }
  return 'kürzlich';
}

// Erstelle die Datum-Objekte für die Bewertungen
const frederikDate = new Date('2020-06-08');
const nikitaDate = new Date('2020-05-29');
const brigitteDate = new Date('2020-06-02');

export const reviews: ReviewType[] = [
  {
    author: "Frederik Oostendorp",
    rating: 5,
    date: getRelativeTimeString(frederikDate),
    text: "Habe meinen Rechner zur Neuinstallation und Aufbereitung gebracht und super schnell mit einigen Hinweisen zu Verbessungsmöglichkeiten bekommen. Habe auf nachfrage zu den Hinweisen auch eine sehr kompetente Beratung erhalten. Preis war auch mehr als in Ordnung!",
    avatar: "https://img.icons8.com/?size=100&id=y9LJ0mNaH6XG&format=png&color=000000",
    verified: true
  },
  {
    author: "Nikita",
    rating: 5,
    date: getRelativeTimeString(nikitaDate),
    text: "Wollte von Windows 7 auf 10 umsteigen und zusätzlich eine SSD eingebaut haben, was auch super schnell ging. Er hat mir zusätzlich noch ein paar nützliche Tipps gegeben. Gerne wieder (:",
    avatar: "https://img.icons8.com/?size=100&id=y9LJ0mNaH6XG&format=png&color=000000",
    verified: true
  },
  {
    author: "Brigitte Varola",
    rating: 5,
    date: getRelativeTimeString(brigitteDate),
    text: "Habe eine Kaufberatung für ein neues Smartphone gebraucht und wurde sehr schnell und kompetent beraten. Sehr sympathischer Kerl, kann ich nur empfehlen.",
    avatar: "https://img.icons8.com/?size=100&id=y9LJ0mNaH6XG&format=png&color=000000",
    verified: true
  }
];