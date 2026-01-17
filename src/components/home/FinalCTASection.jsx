import { Button } from '../ui/Button'
import { COMPANY_INFO } from '../../constants'
import { Phone, MessageSquare } from 'lucide-react'

export const FinalCTASection = () => {
  return (
    <section className="bg-gradient-to-r from-secondary via-gray-900 to-secondary text-white py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Contact us today for the best quality construction materials at competitive prices
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href={`tel:${COMPANY_INFO.phone}`} className="inline-block">
            <Button variant="outline" size="lg" className="w-full md:w-auto border-white text-white hover:bg-white hover:text-secondary flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              {COMPANY_INFO.phone}
            </Button>
          </a>
          <a
            href={`https://wa.me/91${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="w-full md:w-auto flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>

        <p className="text-gray-400 mt-8">
          📧 Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-500 hover:text-primary-400">{COMPANY_INFO.email}</a>
        </p>
      </div>
    </section>
  )
}
