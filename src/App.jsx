import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import CategorySection from './Components/CategorySection'
import PromotionalBanner from './Components/PromotionalBanner'
import FeaturedProducts from './Components/FeaturedProducts'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'

function App() {
  return (
    <div className="w-screen max-w-full">
      <Navbar />
      <HeroSection/>
      <CategorySection />
      <PromotionalBanner/>
      <AboutUs/>
      <FeaturedProducts/>
      <Footer/>
      <SignIn/>
      <SignUp/>
          </div>
  )
}

export default App