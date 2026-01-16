// section imports
import FeatureSection from "../sections/FeatureSection"
import HeroSection from "../sections/HeroSection"
import LogoCarousel from "../sections/LogoCarousel"
import PricingSection from "../sections/PricingSection"
import TestimonialSection from "../sections/TestimonialSection"

const HomePage = () => {
  return (
    <div className="bg-black mx-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Logo Carousel Section */}
        <LogoCarousel/>

        {/* Features Section */}
        <FeatureSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonial Section */}
        <TestimonialSection />

    </div>
  )
}

export default HomePage