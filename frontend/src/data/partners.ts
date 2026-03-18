// partners.ts
import geotabLogo from '../assets/SponsorImages/MacAISociety/GeotabBlue.png';
import wspLogo from '../assets/SponsorImages/MacAISociety/WSP_logo.svg.png';
import sMapLogo from '../assets/SponsorImages/MacAISociety/sMapLogo.webp';
import aigeLogo from '../assets/SponsorImages/MacAISociety/AIGE Colour Logo-Picsart-BackgroundRemover.avif';
import manulifeLogo from '../assets/SponsorImages/MacAISociety/Manulife.png';
import hamiltonLogo from '../assets/SponsorImages/MacAISociety/CityOfHamilton.png';
import mlhLogo from '../assets/SponsorImages/MacAISociety/mlh-logo-color.png';

// Past Partners
import rbcLogo from '../assets/SponsorImages/PastMacAISociety/RBC.png';
import dkgLogo from '../assets/SponsorImages/PastMacAISociety/DeepKnowledgeGroup.jpg';
import cgiLogo from '../assets/SponsorImages/PastMacAISociety/CGI.png';
import intactLogo from '../assets/SponsorImages/PastMacAISociety/IntactInsurance.png';
import huaweiLogo from '../assets/SponsorImages/PastMacAISociety/Huawei.png';
import fdmLogo from '../assets/SponsorImages/PastMacAISociety/FDM.jpg';
import bellLogo from '../assets/SponsorImages/PastMacAISociety/Bell.png';
import msuLogo from '../assets/SponsorImages/PastMacAISociety/McMasterStudentAssociation.png';
import ibmLogo from '../assets/SponsorImages/PastMacAISociety/IBM.png';
import riskfuelLogo from '../assets/SponsorImages/PastMacAISociety/Riskfuel.png';
import ospeLogo from '../assets/SponsorImages/PastMacAISociety/Ontario Society Of Professional Engineers.jpg';
import microsoftLogo from '../assets/SponsorImages/PastMacAISociety/Microsoft.png';
import inlandLogo from '../assets/SponsorImages/PastMacAISociety/InlandAI.jpg';

export type PartnerTier = 'featured' | 'standard' | 'community' | string;

export interface Partner {
  name: string;
  alt?: string;
  tier?: PartnerTier;
  contribution?: string;
  year?: number;
  logoUrl?: string;
  website?: string;
  isCurrent?: boolean;
}

export const CURRENT_PARTNERS: Partner[] = [
  // Featured – top row
  {
    name: 'Geotab',
    alt: 'Geotab',
    tier: 'featured',
    contribution: '$2,500',
    logoUrl: geotabLogo,
    website: 'https://www.geotab.com',
    isCurrent: true,
  },
  // Standard – middle grid
  {
    name: 'WSP',
    alt: 'WSP',
    tier: 'standard',
    contribution: '$1,500',
    logoUrl: wspLogo,
    website: 'https://www.wsp.com/',
    isCurrent: true,
  },
  {
    name: 'sMAP',
    alt: 'sMAP',
    tier: 'standard',
    contribution: '$1,000',
    logoUrl: sMapLogo,
    website: 'https://pulselab.humanities.mcmaster.ca/',
    isCurrent: true,
  },
  {
    name: 'AIGE',
    alt: 'AIGE',
    tier: 'standard',
    contribution: '$1,000',
    logoUrl: aigeLogo,
    website: '#',
    isCurrent: true,
  },
  {
    name: 'Manulife',
    alt: 'Manulife',
    tier: 'standard',
    contribution: '$1,000',
    logoUrl: manulifeLogo,
    website: 'https://www.manulife.ca/',
    isCurrent: true,
  },
  {
    name: 'City of Hamilton',
    alt: 'City of Hamilton',
    tier: 'standard',
    contribution: '$500',
    logoUrl: hamiltonLogo,
    website: 'https://www.hamilton.ca/',
    isCurrent: true,
  },
  // Community – bottom row
  {
    name: 'MLH',
    alt: 'MLH',
    tier: 'standard',
    contribution: '$290',
    logoUrl: mlhLogo,
    website: 'https://mlh.io/',
    isCurrent: true,
  },
];

export const PAST_PARTNERS: Partner[] = [
  { name: 'RBC (Royal Bank of Canada)', alt: 'RBC', year: 2024, tier: 'standard', isCurrent: false, logoUrl: rbcLogo, website: '#' },
  { name: 'Deep Knowledge Group', alt: 'Deep Knowledge Group', year: 2024, tier: 'standard', isCurrent: false, logoUrl: dkgLogo, website: '#' },
  { name: 'CGI', alt: 'CGI', year: 2024, tier: 'standard', isCurrent: false, logoUrl: cgiLogo, website: '#' },
  { name: 'Intact Insurance', alt: 'Intact Insurance', year: 2024, tier: 'standard', isCurrent: false, logoUrl: intactLogo, website: '#' },
  { name: 'Huawei', alt: 'Huawei', year: 2024, tier: 'standard', isCurrent: false, logoUrl: huaweiLogo, website: '#' },
  { name: 'FDM Group', alt: 'FDM Group', year: 2024, tier: 'standard', isCurrent: false, logoUrl: fdmLogo, website: '#' },
  { name: 'Bell', alt: 'Bell', year: 2023, tier: 'standard', isCurrent: false, logoUrl: bellLogo, website: '#' },
  { name: 'McMaster Students Union (MSU)', alt: 'McMaster Students Union', year: 2023, tier: 'standard', isCurrent: false, logoUrl: msuLogo, website: '#' },
  { name: 'Inland AI', alt: 'Inland AI', year: 2023, tier: 'standard', isCurrent: false, logoUrl: inlandLogo, website: '#' },
  { name: 'IBM', alt: 'IBM', year: 2023, tier: 'standard', isCurrent: false, logoUrl: ibmLogo, website: '#' },
  { name: 'Riskfuel', alt: 'Riskfuel', year: 2023, tier: 'standard', isCurrent: false, logoUrl: riskfuelLogo, website: '#' },
  { name: 'OSPE', alt: 'OSPE', year: 2023, tier: 'standard', isCurrent: false, logoUrl: ospeLogo, website: '#' },
  { name: 'Microsoft', alt: 'Microsoft', year: 2022, tier: 'standard', isCurrent: false, logoUrl: microsoftLogo, website: '#' },
];
