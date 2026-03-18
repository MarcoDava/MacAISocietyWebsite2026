import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logosmall.svg';

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
];

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
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
  const location = useLocation();
  const isMacHacks = location.pathname === '/machacks';

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isMacHacks ? 'bg-[#060606] border-[#35494C]/40' : 'bg-[#0f0066] border-[#1CB1E3]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-start justify-start">
            <img src={logo} alt="MacAI Society Logo" className="h-[80px] mb-4" />
            <h3 className={`font-[family-name:var(--font-heading)] font-bold text-lg mb-4 ${
              isMacHacks ? 'text-white' : 'text-[#F0F4F4]'
            }`}>
              McMaster AI Society
            </h3>
            <p className={`text-sm leading-relaxed max-w-xs ${
              isMacHacks ? 'text-[#E1E0E0]' : 'text-[#A7C2C3]'
            }`}>
              Building the future of AI at McMaster. Workshops, hackathons, and a community for the next generation of innovators.
            </p>
            <div className="flex gap-4 mt-4">
              {SOCIAL.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors focus-ring rounded ${
                    isMacHacks ? 'text-[#4F7C80] hover:text-[#35494C]' : 'text-[#3DDFF5] hover:text-[#1CB1E3]'
                  }`}
                  aria-label={label}
                >
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-[family-name:var(--font-heading)] font-bold mb-4 ${
              isMacHacks ? 'text-white' : 'text-[#F0F4F4]'
            }`}>Navigate</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={`text-sm transition-colors ${
                    isMacHacks ? 'text-[#E1E0E0] hover:text-[#4F7C80]' : 'text-[#A7C2C3] hover:text-[#3DDFF5]'
                  }`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-[family-name:var(--font-heading)] font-bold mb-4 ${
              isMacHacks ? 'text-white' : 'text-[#F0F4F4]'
            }`}>Location</h4>
            <p className={`text-sm ${
              isMacHacks ? 'text-[#E1E0E0]' : 'text-[#A7C2C3]'
            }`}>
              McMaster University<br />
              1280 Main St W, Hamilton, ON
            </p>
            <a
              href="https://www.google.com/maps?q=McMaster+University+Hamilton"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-2 text-sm ${
                isMacHacks ? 'text-[#4F7C80] hover:text-[#35494C]' : 'text-[#3DDFF5] hover:text-[#1CB1E3]'
              }`}
            >
              View on map →
            </a>
          </div>

          <div>
            <h4 className={`font-[family-name:var(--font-heading)] font-bold mb-4 ${
              isMacHacks ? 'text-white' : 'text-[#F0F4F4]'
            }`}>Legal</h4>
            <ul className="space-y-2">
              {LEGAL.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={`text-sm transition-colors ${
                    isMacHacks ? 'text-[#E1E0E0] hover:text-[#4F7C80]' : 'text-[#A7C2C3] hover:text-[#3DDFF5]'
                  }`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${
          isMacHacks ? 'border-[#35494C]/40' : 'border-[#1CB1E3]/20'
        }`}>
          <p className={`text-sm ${
            isMacHacks ? 'text-[#E1E0E0]' : 'text-[#A7C2C3]'
          }`}>
            © {new Date().getFullYear()} McMaster AI Society. All rights reserved.
          </p>
          <p className={`text-sm ${
            isMacHacks ? 'text-[#E1E0E0]' : 'text-[#A7C2C3]'
          }`}>
            Logo usage and brand guidelines: do not alter MacAI logo size, spacing, or colours.
          </p>
        </div>
      </div>
    </footer>
  );
}
