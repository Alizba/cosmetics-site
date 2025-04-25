import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import CategorySection from './Components/CategorySection'
import PromotionalBanner from './Components/PromotionalBanner'

function App() {
  return (
    <div className="w-screen max-w-full">
      <Navbar />
      <HeroSection/>
      <CategorySection />
      <PromotionalBanner/>
    </div>
  )
}

export default App