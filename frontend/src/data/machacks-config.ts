import sMapLogo from '../assets/SponsorImages/MacHacks/sMapLogo.webp';
import manulifeLogo from '../assets/SponsorImages/MacHacks/Manulife.png';
import johnhanLogo from '../assets/SponsorImages/MacHacks/JohnHancock.png';
import mlhLogo from '../assets/SponsorImages/MacHacks/mlh-logo-color.png';
import mcmasterEngLogo from '../assets/SponsorImages/MacHacks/McMaster_Faculty_of_Engineering_logo.png';
import wspLogo from '../assets/SponsorImages/MacHacks/WSP_logo.svg.png';
import aigeLogo from '../assets/SponsorImages/MacHacks/AIGE Colour Logo-Picsart-BackgroundRemover.avif';
import geotabLogo from '../assets/SponsorImages/MacHacks/Geotab White Logo.avif';

/**
 * MacHacks 2026 Configuration
 *
 * This file contains all configurable data for the MacHacks page.
 * Execs can update schedule, sponsors, and event details here.
 */

// ============================================
// Event Metadata
// ============================================
export const EVENT_INFO = {
  year: 2026,
  date: 'March 21, 2026',
  location: 'McMaster University',
  tagline: "McMaster AI Society's flagship hackathon",
  description: 'MacHacks 2026 is a one-day hackathon focused on AI and innovation. Work in teams, attend workshops led by partners and industry experts, and compete for prizes.',
  registrationUrl: 'https://forms.office.com/pages/responsepage.aspx?id=B2M3RCm0rUKMJSjNSW9HctZcAZxBhpdCi9Jv6HOWXYVURU1TRFBES0kxWENQMTVDNzY1SzdaSUFYWS4u&route=shorturl',
  registrationOpen: false,
  volunteerUrl: 'https://forms.office.com/pages/responsepage.aspx?id=B2M3RCm0rUKMJSjNSW9HctZcAZxBhpdCi9Jv6HOWXYVURU1TRFBES0kxWENQMTVDNzY1SzdaSUFYWS4u&route=shorturl',
};

// ============================================
// Schedule
// ============================================
export type ScheduleCategory = 'General' | 'Hacking' | 'Beginner' | 'Advanced';

export interface ScheduleItem {
  time: string;
  title: string;
  category: ScheduleCategory;
}

export const SCHEDULE: ScheduleItem[] = [
  { time: '9:00 AM', title: 'Doors & check-in', category: 'General' },
  { time: '10:00 AM', title: 'Opening keynote', category: 'General' },
  { time: '11:00 AM', title: 'Hacking begins', category: 'Hacking' },
  { time: '12:00 PM', title: 'Workshop: Intro to ML', category: 'Beginner' },
  { time: '2:00 PM', title: 'Workshop: APIs & tools', category: 'Beginner' },
  { time: '4:00 PM', title: 'Advanced track: NLP', category: 'Advanced' },
  { time: '8:00 PM', title: 'Mentorship office hours', category: 'General' },
  { time: 'Next day 10:00 AM', title: 'Submissions & demos', category: 'General' },
];

export const SCHEDULE_CATEGORIES: ('all' | ScheduleCategory)[] = ['all', 'General', 'Hacking', 'Beginner', 'Advanced'];

// ============================================
// Sponsors
// ============================================
export interface Sponsor {
  name: string;
  logoUrl?: string;
  website?: string;
}

export const SPONSORS: Sponsor[] = [
  { name: 'sMap', logoUrl: sMapLogo, website: 'https://pulselab.humanities.mcmaster.ca/' },
  { name: 'Manulife', logoUrl: manulifeLogo, website: 'https://www.manulife.ca/' },
  { name: 'John Hancock', logoUrl: johnhanLogo, website: 'https://www.johnhancock.com/' },
  { name: 'MLH', logoUrl: mlhLogo, website: 'https://mlh.io/' },
  { name: 'McMaster Engineering', logoUrl: mcmasterEngLogo, website: 'https://engineering.mcmaster.ca/' },
  { name: 'WSP', logoUrl: wspLogo, website: 'https://www.wsp.com/' },
  { name: 'AIGE', logoUrl: aigeLogo, website: '#' },
  { name: 'Geotab', logoUrl: geotabLogo, website: '#' },
];

// ============================================
// Past MacHacks – Hero parallax projects
// ============================================
export const PARALLAX_PRODUCTS = [
  {
    title: 'Friday',
    link: 'https://devpost.com/software/friday-utoy85',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/806/444/datas/medium.png',
  },
  {
    title: 'HealthCheck',
    link: 'https://devpost.com/software/healthcheck',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/803/557/datas/medium.jpg',
  },
  {
    title: 'AI Voice Diary',
    link: 'https://devpost.com/software/ai-voice-diary',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/803/559/datas/medium.png',
  },
  {
    title: 'Statistically-Informed Training for Predicting European Puts',
    link: 'https://devpost.com/software/statistically-informed-training-for-predicting-european-puts',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/805/960/datas/medium.jpg',
  },
  {
    title: 'Using Context-Aware CNN to Model Congestion in Urban Areas',
    link: 'https://devpost.com/software/using-context-aware-cnn-to-model-congestion-in-urban-areas',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/806/168/datas/medium.jpg',
  },
  {
    title: 'Denatured',
    link: 'https://devpost.com/software/denatured',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/803/815/datas/medium.jpg',
  },
  {
    title: 'Save A Friend',
    link: 'https://devpost.com/software/save-a-friend',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/369/004/datas/medium.png',
  },
  {
    title: 'foundAIr',
    link: 'https://devpost.com/software/foundair',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/370/156/datas/medium.png',
  },
  {
    title: 'HealAI',
    link: 'https://devpost.com/software/healai',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/371/103/datas/medium.jpeg',
  },
  {
    title: 'SnapCycle',
    link: 'https://devpost.com/software/snapcycle-hyx3qv',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/370/848/datas/medium.png',
  },
  {
    title: 'FloraFauna',
    link: 'https://devpost.com/software/florafauna-7f9se1',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/372/468/datas/medium.png',
  },
  {
    title: 'Eco-Locate',
    link: "https://devpost.com/software/eco-locate?_gl=1*mplici*_gcl_au*NTU2Mjc2MTA5LjE3NjgwMDAwMjM.*_ga*MTQxMjc5NzA2LjE3NDEyODY3Nzg.*_ga_0YHJK3Y10M*czE3NzM2ODIzMTIkbzM2JGcxJHQxNzczNjgyNDQ0JGo1NSRsMCRoMA..",
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/372/332/datas/medium.png'
  },
  {
    title: 'Mama',
    link: 'https://devpost.com/software/mama?_gl=1*9lef4j*_gcl_au*NTU2Mjc2MTA5LjE3NjgwMDAwMjM.*_ga*MTQxMjc5NzA2LjE3NDEyODY3Nzg.*_ga_0YHJK3Y10M*czE3NzM2ODIzMTIkbzM2JGcxJHQxNzczNjgyNjEwJGozJGwwJGgw',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/802/792/datas/gallery.jpg'
  },
  {
    title: 'Hot Cocoa',
    link: 'https://devpost.com/software/hot-cocoa-projections?_gl=1*17pf7sa*_gcl_au*NTU2Mjc2MTA5LjE3NjgwMDAwMjM.*_ga*MTQxMjc5NzA2LjE3NDEyODY3Nzg.*_ga_0YHJK3Y10M*czE3NzM2ODIzMTIkbzM2JGcxJHQxNzczNjgzNjM4JGo1MyRsMCRoMA..',
    thumbnail: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/806/281/datas/medium.png',
  }
];

// ============================================
// FAQ
// ============================================
export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: FAQItem[] = [
  { q: 'Who can participate?', a: 'Any current university or high school student. Some tracks may have prerequisites.' },
  { q: 'Is it free?', a: 'Yes. MacHacks is free to attend. Food and swag are provided.' },
  { q: 'Team size?', a: 'Teams of 2-4. You can also sign up solo and we\'ll help you find a team.' },
  { q: 'What should I bring?', a: 'Laptop, charger, and enthusiasm. We\'ll share a full list closer to the event.' },
];

// ============================================
// Theme Colors (for reference in components)
// ============================================
export const MACHACKS_THEME = {
  bgDark: '#060606',
  bgCharcoal: '#221A1D',
  bgPlum: '#552A3C',
  accentTeal: '#35494C',
  accentCyan: '#4F7C80',
  accentMagenta: '#8B3D5A',
  textPrimary: '#FFFFFF',
  textMuted: '#E1E0E0',
};
