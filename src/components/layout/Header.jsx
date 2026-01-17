import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { COMPANY_INFO, NAV_ITEMS } from '../../constants'
import { Button } from '../ui/Button'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-secondary-500 text-white py-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm flex-col md:flex-row gap-2">
          <div className="flex gap-6 items-center">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-primary-500">
              <Phone className="w-4 h-4" />
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-primary-500 hidden md:flex">
              <Mail className="w-4 h-4" />
              {COMPANY_INFO.email}
            </a>
          </div>
          <div className="text-primary-500 font-semibold">{COMPANY_INFO.tagline}</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary-500 text-white px-3 py-2 rounded-lg font-bold text-lg">
              HAFA
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary-500">HAFA INFRA</h1>
              <p className="text-xs text-primary-500">Construction Materials</p>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-secondary-500 hover:text-primary-500 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-block"
            >
              <Button variant="outline" size="sm">Call Now</Button>
            </a>
            <a
              href={`https://wa.me/91${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="sm">WhatsApp</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-accent mt-4 rounded-lg p-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-secondary-500 hover:text-primary-500 font-medium transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 flex gap-2">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full">Call</Button>
              </a>
              <a
                href={`https://wa.me/91${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="sm" className="w-full">WhatsApp</Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
