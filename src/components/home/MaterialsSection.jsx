import { Link } from 'react-router-dom'
import { Card, CardContent } from '../ui/Card'
import { MATERIALS } from '../../constants'
import { ArrowRight } from 'lucide-react'

export const MaterialsSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wide range of construction materials to meet all your building needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MATERIALS.map((material) => (
            <Card key={material.id} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{material.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{material.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{material.description}</p>
                <Link
                  to={`/products?category=${material.id}`}
                  className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
