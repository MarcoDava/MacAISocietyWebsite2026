import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/machacks', label: 'MacHacks 2026' },
  { to: '/projects', label: 'Projects' },
  { to: '/partnerships', label: 'Partnerships' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#1800AD]/95 backdrop-blur-sm border-b border-[#1CB1E3]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 focus-ring rounded" aria-label="MacAI Society home">
            <span className="font-heading font-bold text-xl text-[#F0F4F4]">MacAI</span>
            <span className="text-[#3DDFF5] text-sm hidden sm:inline">Society</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? 'text-[#3DDFF5] bg-[#1CB1E3]/10'
                    : 'text-[#A7C2C3] hover:text-[#F0F4F4] hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/machacks"
              className="btn-cta text-sm py-2 px-4 hidden sm:inline-block"
            >
              Register for MacHacks
            </Link>
            <button
              type="button"
              className="md:hidden p-2 text-[#F0F4F4] rounded-lg hover:bg-white/10 focus-ring"
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

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-[#1CB1E3]/20">
            <ul className="space-y-1">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block px-4 py-3 rounded-lg text-[#F0F4F4] ${
                      location.pathname === to ? 'bg-[#1CB1E3]/20' : 'hover:bg-white/5'
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
                  className="block px-4 py-3 text-[#E00064] font-bold"
                  onClick={() => setMenuOpen(false)}
                >
                  Register for MacHacks 2026
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
