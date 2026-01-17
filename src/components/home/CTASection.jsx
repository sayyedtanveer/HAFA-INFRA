import { SERVICES } from '../../constants'
import { Card, CardContent } from '../ui/Card'

export const ServicesSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your construction material needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
