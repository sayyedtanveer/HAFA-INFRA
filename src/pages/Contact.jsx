import { Card, CardContent } from '../components/ui/Card'
import { Input, Textarea } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { COMPANY_INFO } from '../constants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any queries or to place your order
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="w-8 h-8 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-secondary mb-2">Phone</h3>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Available on call and WhatsApp</p>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="w-8 h-8 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-secondary mb-2">Email</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="w-8 h-8 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-secondary mb-2">Address</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {COMPANY_INFO.address.line1}<br />
                    {COMPANY_INFO.address.line2}<br />
                    {COMPANY_INFO.address.line3}<br />
                    {COMPANY_INFO.address.line4}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-secondary mb-2">Working Hours</h3>
                  <p className="text-sm text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-sm text-gray-700">Sunday & Holidays: Closed</p>
                  <p className="text-sm text-primary-600 font-semibold mt-2">24/7 Emergency Support Available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-primary-50 p-8 rounded-lg border-2 border-primary-200">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Need Something Quickly?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href={`tel:${COMPANY_INFO.phone}`} className="block">
              <Button size="lg" className="w-full flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a
              href={`https://wa.me/91${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button size="lg" variant="outline" className="w-full flex items-center justify-center gap-2 border-primary-500 text-primary-600">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="block">
              <Button size="lg" variant="ghost" className="w-full flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Import MessageSquare icon
import { MessageSquare } from 'lucide-react'
