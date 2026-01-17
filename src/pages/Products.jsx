import { Card, CardContent } from '../components/ui/Card'
import { MATERIALS } from '../constants'

export const Products = () => {
  return (
    <div className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium construction materials for every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MATERIALS.map((material) => (
            <Card key={material.id} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">{material.icon}</div>
                <h2 className="text-3xl font-bold text-secondary mb-4">{material.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {material.description}
                </p>
                
                {material.id === 'steel' && (
                  <div className="space-y-3 text-sm text-gray-700">
                    <h4 className="font-semibold text-secondary">Available Types:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>TMT Bars</li>
                      <li>Structural Steel</li>
                      <li>Mild Steel Sections</li>
                      <li>Wire Mesh</li>
                    </ul>
                  </div>
                )}

                {material.id === 'rmc' && (
                  <div className="space-y-3 text-sm text-gray-700">
                    <h4 className="font-semibold text-secondary">Specifications:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Grade: M15 to M60</li>
                      <li>Fresh & Durable</li>
                      <li>On-site Delivery</li>
                      <li>Quality Certified</li>
                    </ul>
                  </div>
                )}

                {material.id === 'sand' && (
                  <div className="space-y-3 text-sm text-gray-700">
                    <h4 className="font-semibold text-secondary">Types:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>River Sand</li>
                      <li>M-Sand (Manufactured Sand)</li>
                      <li>Fine Sand</li>
                      <li>Coarse Sand</li>
                    </ul>
                  </div>
                )}

                {material.id === 'blocks' && (
                  <div className="space-y-3 text-sm text-gray-700">
                    <h4 className="font-semibold text-secondary">Types:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Concrete Blocks</li>
                      <li>Cement Blocks</li>
                      <li>Fly Ash Blocks</li>
                      <li>Solid & Hollow Blocks</li>
                    </ul>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-primary-600 font-semibold mb-3">For pricing and availability, please contact us:</p>
                  <a href="tel:+918108563656" className="inline-block bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors font-semibold">
                    Get Quote
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance */}
        <Card className="mt-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">Quality Assurance</h3>
            <p className="text-gray-700 mb-4">
              All our products undergo rigorous quality checks and testing to ensure they meet industry standards. We are committed to delivering only the finest materials that will last the test of time.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ ISO Certified Suppliers</li>
              <li>✓ Regular Quality Testing</li>
              <li>✓ Industry Standard Compliance</li>
              <li>✓ Customer Satisfaction Guarantee</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
