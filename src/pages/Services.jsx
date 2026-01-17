import { Card, CardContent } from '../components/ui/Card'
import { SERVICES } from '../constants'

export const Services = () => {
  return (
    <div className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your construction material needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-secondary mb-3">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-bold text-secondary mb-2 text-lg">Flexible Payment Terms</h3>
              <p className="text-gray-600 text-sm">
                Easy payment options and credit facilities available for regular and bulk orders.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="font-bold text-secondary mb-2 text-lg">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Every material is inspected and certified to meet industry standards and regulations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-secondary mb-2 text-lg">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Our dedicated team is available round the clock to assist with your orders and queries.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Our Services */}
        <Card className="mt-12 bg-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-secondary mb-6">Why Choose Our Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary-600 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✓</span> Reliable & Consistent
                </h4>
                <p className="text-gray-600 text-sm">We deliver consistent quality and service every single time.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✓</span> Cost Effective
                </h4>
                <p className="text-gray-600 text-sm">Competitive pricing without compromising on quality.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✓</span> Timely Delivery
                </h4>
                <p className="text-gray-600 text-sm">Fast and reliable delivery across Mumbai region.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✓</span> Expert Team
                </h4>
                <p className="text-gray-600 text-sm">Experienced professionals to assist with your requirements.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
