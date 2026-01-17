import { HeroSection } from '../components/home/HeroSection'
import { MaterialsSection } from '../components/home/MaterialsSection'
import { ServicesSection } from '../components/home/CTASection'
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection'
import { FinalCTASection } from '../components/home/FinalCTASection'

export const Home = () => {
  return (
    <>
      <HeroSection />
      <MaterialsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <FinalCTASection />
    </>
  )
}
