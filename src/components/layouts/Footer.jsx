import { COMPANY } from '../../utils/constants';

/**
 * Footer Component - Company information and links
 */
const Footer = () => {
  return (
    <footer className="bg-dark-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{COMPANY.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{COMPANY.tagline}</p>
            <p className="text-xs text-gray-500">
              {COMPANY.owner}, {COMPANY.ownerTitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-gold-950 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gold-950 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gold-950 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gold-950 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gold-950 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/products" className="hover:text-gold-950 transition-colors">
                  Steel
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gold-950 transition-colors">
                  RMC
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gold-950 transition-colors">
                  Sand
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gold-950 transition-colors">
                  Blocks
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-gold-950 transition-colors flex items-center gap-2"
                >
                  📞 {COMPANY.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-gold-950 transition-colors flex items-center gap-2 break-all"
                >
                  ✉️ {COMPANY.email}
                </a>
              </p>
              <p className="text-xs">
                📍 {COMPANY.address.line1}
                <br />
                {COMPANY.address.line2}
                <br />
                {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.postal}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold-950 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold-950 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
