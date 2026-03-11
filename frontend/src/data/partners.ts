export type PartnerTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | string;

export interface Partner {
  name: string;
  tier?: PartnerTier;
  year?: number;
  logoUrl?: string;
  website?: string;
  isCurrent?: boolean;
}

const PLACEHOLDER_LOGO =
  'https://dev.fairparkfc.com.au/wp-content/uploads/2024/04/sponsor-placeholder.jpg';

export const CURRENT_PARTNERS: Partner[] = [
  {
    name: 'Partner 1',
    tier: 'Platinum',
    logoUrl: PLACEHOLDER_LOGO,
    website: 'https://www.google.com',
    isCurrent: true,
  },
  {
    name: 'Partner 4',
    tier: 'Gold',
    logoUrl: PLACEHOLDER_LOGO,
    website: 'https://www.google.com',
    isCurrent: true,
  },
  {
    name: 'Partner 5',
    tier: 'Silver',
    logoUrl: PLACEHOLDER_LOGO,
    website: 'https://www.google.com',
    isCurrent: true,
  },
  {
    name: 'Partner 6',
    tier: 'Silver',
    logoUrl: PLACEHOLDER_LOGO,
    website: 'https://www.google.com',
    isCurrent: true,
  },
  {
    name: 'Partner 7',
    tier: 'Bronze',
    logoUrl: PLACEHOLDER_LOGO,
    website: 'https://www.google.com',
    isCurrent: true,
  },
];

export const PAST_PARTNERS: Partner[] = [
  { name: 'Past Sponsor 1', year: 2024, tier: 'Gold', isCurrent: false },
  { name: 'Past Sponsor 2', year: 2024, tier: 'Silver', isCurrent: false },
  { name: 'Past Sponsor 3', year: 2023, tier: 'Bronze', isCurrent: false },
];

