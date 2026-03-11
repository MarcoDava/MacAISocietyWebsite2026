import { Link } from 'react-router-dom';
import logo from '../assets/logosmall.svg';

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
];

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/machacks', label: 'MacHacks 2026' },
  { to: '/projects', label: 'Projects' },
  { to: '/partnerships', label: 'Partnerships' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const LEGAL = [
  { to: '/accessibility', label: 'Accessibility' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0066] border-t border-[#1CB1E3]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-start justify-start">
            <img src={logo} alt="MacAI Society Logo" className="h-[80px] mb-4" />
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[#F0F4F4] mb-4">
              McMaster AI Society
            </h3>
            <p className="text-[#A7C2C3] text-sm leading-relaxed max-w-xs">
              Building the future of AI at McMaster. Workshops, hackathons, and a community for the next generation of innovators.
            </p>
            <div className="flex gap-4 mt-4">
              {SOCIAL.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3DDFF5] hover:text-[#1CB1E3] transition-colors focus-ring rounded"
                  aria-label={label}
                >
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#F0F4F4] mb-4">Navigate</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-[#A7C2C3] hover:text-[#3DDFF5] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#F0F4F4] mb-4">Location</h4>
            <p className="text-[#A7C2C3] text-sm">
              McMaster University<br />
              1280 Main St W, Hamilton, ON
            </p>
            <a
              href="https://www.google.com/maps?q=McMaster+University+Hamilton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#3DDFF5] hover:text-[#1CB1E3] text-sm"
            >
              View on map →
            </a>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#F0F4F4] mb-4">Legal</h4>
            <ul className="space-y-2">
              {LEGAL.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-[#A7C2C3] hover:text-[#3DDFF5] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1CB1E3]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#A7C2C3] text-sm">
            © {new Date().getFullYear()} McMaster AI Society. All rights reserved.
          </p>
          <p className="text-[#A7C2C3] text-sm">
            Logo usage and brand guidelines: do not alter MacAI logo size, spacing, or colours.
          </p>
        </div>
      </div>
    </footer>
  );
}
