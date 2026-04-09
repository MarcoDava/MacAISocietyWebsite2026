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
export type SponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  logoUrl?: string;
  website?: string;
}

export const SPONSORS: Sponsor[] = [
  // Platinum sponsors - largest display
  { name: 'TechCorp AI', tier: 'Platinum', logoUrl: '', website: 'https://example.com' },

  // Gold sponsors - medium display
  { name: 'DataFlow Inc', tier: 'Gold', logoUrl: '', website: 'https://example.com' },
  { name: 'CloudMind', tier: 'Gold', logoUrl: '', website: 'https://example.com' },

  // Silver sponsors - smaller display
  { name: 'Neural Labs', tier: 'Silver', logoUrl: '', website: 'https://example.com' },
  { name: 'AI Ventures', tier: 'Silver', logoUrl: '', website: 'https://example.com' },
  { name: 'CodeBase', tier: 'Silver', logoUrl: '', website: 'https://example.com' },

  // Bronze sponsors - smallest display
  { name: 'StartupX', tier: 'Bronze', logoUrl: '', website: 'https://example.com' },
  { name: 'DevTools Co', tier: 'Bronze', logoUrl: '', website: 'https://example.com' },
];

// ============================================
// Past MacHacks
// ============================================
export interface PastMacHacks {
  year: number;
  attendees: string;
  projects: string;
  link: string;
  thumbnail: string;
}

export const PAST_YEARS: PastMacHacks[] = [
  {
    year: 2023,
    attendees: '200+',
    projects: '45',
    link: 'https://devpost.com',
    thumbnail: 'https://picsum.photos/seed/machacks2023/600/400'
  },
  {
    year: 2022,
    attendees: '150+',
    projects: '35',
    link: 'https://devpost.com',
    thumbnail: 'https://picsum.photos/seed/machacks2022/600/400'
  },
  {
    year: 2021,
    attendees: '100+',
    projects: '25',
    link: 'https://devpost.com',
    thumbnail: 'https://picsum.photos/seed/machacks2021/600/400'
  },
];

// Generate parallax products from past years
export const PARALLAX_PRODUCTS = Array.from({ length: 15 }, (_, i) => {
  const item = PAST_YEARS[i % PAST_YEARS.length];
  return {
    title: `MacHacks ${item.year}`,
    link: item.link,
    thumbnail: item.thumbnail,
  };
});

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
