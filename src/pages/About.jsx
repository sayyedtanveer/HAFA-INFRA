import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { COMPANY_INFO, WHY_CHOOSE_US } from '../constants'
import { MapPin, Phone, Mail, User } from 'lucide-react'

export const About = () => {
  return (
    <div className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">About HAFA INFRA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for premium construction materials in Mumbai
          </p>
        </div>

        {/* Company Overview */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Who We Are</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              HAFA INFRA is a leading construction material supplier and trading company based in Mumbai. With over 15 years of experience, we have established ourselves as a reliable source for premium quality construction materials.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We specialize in supplying Steel, Ready Mix Concrete (RMC), Sand, and Concrete Blocks to contractors, builders, and homeowners across Mumbai and surrounding areas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our commitment to quality, timely delivery, and competitive pricing has made us the preferred choice for thousands of construction projects.
            </p>
          </CardContent>
        </Card>

        {/* Owner Information */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <User className="w-6 h-6" />
              Proprietor
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-secondary mb-2">{COMPANY_INFO.owner}</p>
            <p className="text-gray-600">{COMPANY_INFO.ownerTitle}</p>
            <p className="text-gray-600 mt-4">
              With extensive experience in the construction materials industry, {COMPANY_INFO.owner} leads HAFA INFRA with a vision to provide the best quality materials at the most competitive prices.
            </p>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary mb-3 text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Contact Information</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Phone</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary-600 hover:text-primary-700">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Email</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-600 hover:text-primary-700">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h4 className="font-semibold text-secondary mb-2">Address</h4>
                <p className="text-gray-700">
                  {COMPANY_INFO.address.line1}<br />
                  {COMPANY_INFO.address.line2}<br />
                  {COMPANY_INFO.address.line3}<br />
                  {COMPANY_INFO.address.line4}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
