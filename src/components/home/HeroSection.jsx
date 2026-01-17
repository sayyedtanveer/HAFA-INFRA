import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { COMPANY_INFO } from '../../constants'
import { Phone, MessageSquare, ChevronRight } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 text-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-block mb-4">
            <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Premium Construction Materials
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Quality Materials for Your Construction Dreams
          </h1>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed font-medium">
            HAFA INFRA supplies premium steel, RMC, sand, and blocks for all your construction needs in Mumbai. Trusted by builders, contractors, and homeowners.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <a href={`tel:${COMPANY_INFO.phone}`} className="inline-block">
              <Button size="lg" className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a
              href={`https://wa.me/91${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" size="lg" className="w-full md:w-auto flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-500 bg-white hover:bg-primary-500 hover:text-white font-semibold">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          <p className="text-gray-200 font-medium">📞 {COMPANY_INFO.phone} | 📧 {COMPANY_INFO.email}</p>
        </div>

        {/* Right Visual */}
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🏗️</div>
            <h2 className="text-3xl font-bold text-white mb-4">15+ Years</h2>
            <p className="text-primary-100 mb-6">Experience in Supplying Quality Construction Materials</p>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-white">Premium Quality Materials</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-white">Fast Delivery Across Mumbai</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-white">Competitive Pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-white">24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
