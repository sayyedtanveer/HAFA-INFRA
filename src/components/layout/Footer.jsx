import { Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY_INFO } from '../../constants'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-4">HAFA INFRA</h3>
            <p className="text-gray-300 mb-4">{COMPANY_INFO.tagline}</p>
            <p className="text-sm text-gray-400">
              Your trusted partner for construction materials in Mumbai
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-300 hover:text-primary-500 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-primary-500 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold mb-4">Address</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
              <div className="text-sm text-gray-300">
                <p>{COMPANY_INFO.address.line1}</p>
                <p>{COMPANY_INFO.address.line2}</p>
                <p>{COMPANY_INFO.address.line3}</p>
                <p>{COMPANY_INFO.address.line4}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} HAFA INFRA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="/" className="hover:text-primary-500 transition-colors">Terms & Conditions</a>
            <a href="/" className="hover:text-primary-500 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
