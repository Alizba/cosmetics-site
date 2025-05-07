import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import CategorySection from './CategorySection'
import PromotionalBanner from './PromotionalBanner'
import FeaturedProducts from './FeaturedProducts'
import AboutUs from './AboutUs'
import ContactPage from './ContactPage'
import Footer from './Footer'

function Landing() {
  return (
    <div className="w-screen max-w-full">
      <Navbar />
      <div className="min-h-screen">
        <div id="home">
          <HeroSection />
        </div>
        <CategorySection />
        <PromotionalBanner />
        <AboutUs />
        <div id="products">
          <FeaturedProducts />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Landing