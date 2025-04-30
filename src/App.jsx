import React from 'react'
import './App.css'
import Navbar from './Components/landingPage/Navbar'
import HeroSection from './Components/landingPage/HeroSection'
import CategorySection from './Components/landingPage/CategorySection'
import PromotionalBanner from './Components/landingPage/PromotionalBanner'
import FeaturedProducts from './Components/landingPage/FeaturedProducts'
import AboutUs from './Components/landingPage/AboutUs'
import Footer from './Components/landingPage/Footer'
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