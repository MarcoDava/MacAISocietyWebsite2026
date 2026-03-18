import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/mcmasterAiLogo.svg';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/machacks', label: 'MacHacks' },
  { to: '/projects', label: 'Projects' },
  { to: '/partnerships', label: 'Partnerships' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isMacHacks = location.pathname === '/machacks';

  return (
    <header className={`w-full fixed top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
      isMacHacks ? 'border-[#35494C]/40' : 'border-[#F0F4F4]/20'
    } ${
      menuOpen 
        ? (isMacHacks ? 'bg-[#060606]' : 'bg-[#1800AD]') 
        : (isMacHacks ? 'bg-[#060606]/90' : 'bg-[#1800AD]/95')
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 focus-ring rounded h-full" aria-label="MacAI Society home">
            <img src={logo} alt="MacAI Society Logo" className="h-[80%] brightness-0 invert" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-base font-bold transition-colors ${
                  location.pathname === to
                    ? 'text-[#F0F4F4] bg-[#F0F4F4]/15'
                    : 'text-[#F0F4F4]/70 hover:text-[#F0F4F4] hover:bg-[#F0F4F4]/10'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/machacks"
              className={`${
                isMacHacks 
                  ? 'bg-[#4F7C80] hover:bg-[#35494C] text-white' 
                  : 'btn-cta'
              } text-sm py-2 px-4 rounded-lg font-bold transition-all hidden sm:inline-block`}
            >
              {isMacHacks ? 'Register Now' : 'View MacHacks'}
            </Link>
            <button
              type="button"
              className="md:hidden p-2 text-[#F0F4F4] rounded-lg hover:bg-[#F0F4F4]/10 focus-ring"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav
          className={`md:hidden border-t border-[#F0F4F4]/20 overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? 'h-screen opacity-100 py-4' : 'h-0 opacity-0 py-0'
          }`}
        >
          <ul className="space-y-1">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`block px-4 py-3 rounded-lg text-[#F0F4F4]/80 font-bold ${
                    location.pathname === to ? 'bg-[#F0F4F4]/15 text-[#F0F4F4]' : 'hover:bg-[#F0F4F4]/5'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/machacks"
                className={`block px-4 py-3 font-bold ${
                  isMacHacks ? 'text-[#4F7C80]' : 'text-[#E00064]'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {isMacHacks ? 'Register for MacHacks' : 'Register for MacHacks 2026'}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
