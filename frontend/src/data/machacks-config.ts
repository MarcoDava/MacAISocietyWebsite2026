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
export type ScheduleCategory = 'General' | 'Hacking' | 'Workshop' | 'Food' | 'Closing';

export interface ScheduleItem {
  time: string;
  title: string;
  category: ScheduleCategory;
  location: string;
}

export const SCHEDULE: ScheduleItem[] = [
  { time: '9:00–10:30 AM', title: 'Registration & Team Formation', category: 'General', location: 'First Floor Lobby + PGCCLL 127' },
  { time: '10:30–11:00 AM', title: 'Opening Ceremony', category: 'General', location: 'PGCCLL 127' },
  { time: '11:00 AM–12:00 PM', title: 'Hacking Begins', category: 'Hacking', location: 'PGCCLL 127 or B131 (Quiet Hacking Space)' },
  { time: '12:00–1:00 PM', title: 'Lunch', category: 'Food', location: 'PGCCLL B138' },
  { time: '1:00–2:00 PM', title: 'WORKSHOP: "Build a Fleet Management App in 60 Minutes: AI-Assisted Development with Geotab."', category: 'Workshop', location: 'PGCCLL 124' },
  { time: '1:00–3:30 PM', title: 'Hacking Continues', category: 'Hacking', location: 'PGCCLL 127 or B131 (Quiet Hacking Space)' },
  { time: '2:30–3:00 PM', title: 'WORKSHOP: "The Power of Artificial Intelligence in Academic Systems with MacAI"', category: 'Workshop', location: 'PGCCLL 124' },
  { time: '3:00–3:30 PM', title: 'Hacking Continues', category: 'Hacking', location: 'PGCCLL 127 or B131 (Quiet Hacking Space)' },
  { time: '3:30–4:00 PM', title: 'Trivia', category: 'General', location: 'PGCCLL 127' },
  { time: '4:00–5:00 PM', title: 'Dinner', category: 'Food', location: 'PGCCLL B138' },
  { time: '4:00–6:00 PM', title: 'Hacking Continues', category: 'Hacking', location: 'PGCCLL 127 or B131 (Quiet Hacking Space)' },
  { time: '6:00 PM', title: 'Project Submissions Due', category: 'General', location: 'Online' },
  { time: '6:30–7:30 PM', title: 'Project Demo + Judging', category: 'General', location: 'To be revealed!' },
  { time: '7:30–8:00 PM', title: 'Closing Ceremony', category: 'Closing', location: 'PGCCLL 127' },
  { time: '8:00–8:30 PM', title: 'Awards & Prizes', category: 'Closing', location: 'PGCCLL 127' },
  { time: '9:00 PM', title: 'Doors Close!', category: 'General', location: 'N/A' },
];

export const SCHEDULE_CATEGORIES: ('all' | ScheduleCategory)[] = ['all', 'General', 'Hacking', 'Workshop', 'Food', 'Closing'];

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
  { q: 'When is MacHacks 2026?', a: 'Saturday, March 21st 2026 from 9am-9pm.' },
  { q: 'Where is MacHacks 2026?', a: 'Peter George Centre for Living and Learning (PGCLL) on the McMaster Campus.' },
  { q: 'Am I eligible to participate in MacHacks?', a: 'Anyone from any post secondary school can attend MacHacks 2026, regardless of year or program.' },
  { q: 'How much does it cost to participate in MacHacks?', a: 'MacHacks is free for participants!' },
  { q: 'Why haven\'t I heard of MacHacks? Is it new?', a: 'MacHacks was run in 2021, 2022 and 2023 and is back for 2026 after a brief hiatus! Check out the past events section for more info.' },
  { q: 'I\'ve never been to a hackathon before, can I still participate?', a: 'Yes! MacHacks is a beginner friendly hackathon and we highly encourage giving it a shot. There will be sessions and mentors throughout the event to help you. We can\'t wait to see you there :)' },
  { q: 'How big should my team be?', a: 'Teams can have 1-4 people but we highly encourage working with at least one other person. It\'s okay if you don\'t have a team going into the event, there will be opportunities for team forming on the day of the hackathon.' },
  { q: 'What do I need to bring?', a: 'You\'ll need a laptop and charger. An idea and team are not necessary, although feel free to come in with a pre-assembled team! We will have team building sessions to help you meet new people with who you can make an amazing hack.' },
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
