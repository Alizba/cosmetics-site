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
      <HeroSection/>
      <CategorySection />
      <PromotionalBanner/>
      <AboutUs/>
      <FeaturedProducts/>
      <ContactPage/>
      <Footer/>
          </div>
  )
}

export default Landing