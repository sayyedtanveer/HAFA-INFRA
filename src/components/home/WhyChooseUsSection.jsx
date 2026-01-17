import { WHY_CHOOSE_US } from '../../constants'
import { Check } from 'lucide-react'

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose HAFA INFRA?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering excellence in every transaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <Check className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
