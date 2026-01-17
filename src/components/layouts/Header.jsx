import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION, COMPANY, COLORS } from '../../utils/constants';

/**
 * Header Component - Navigation and branding
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-dark-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold-950 rounded-lg flex items-center justify-center font-bold text-white">
            ℌ
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-white">{COMPANY.name}</h1>
            <p className="text-xs text-gold-950">{COMPANY.tagline}</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? 'text-gold-950 border-b-2 border-gold-950'
                  : 'text-gray-300 hover:text-gold-950'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phone}`}
            className="bg-gold-950 text-white px-4 py-2 rounded-lg font-medium hover:bg-gold-900 transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-full h-0.5 bg-white block"></span>
          <span className="w-full h-0.5 bg-white block"></span>
          <span className="w-full h-0.5 bg-white block"></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-700">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-gold-950'
                    : 'text-gray-300 hover:text-gold-950'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-gold-950 text-white px-4 py-2 rounded-lg font-medium hover:bg-gold-900 text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
