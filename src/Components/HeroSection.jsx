import React from 'react';
import { ChevronRight } from 'lucide-react';
import image from '../assets/images/heroImage.webp'

export default function EnhancedAloeVeraHero() {
  return (
    <div className="relative w-full min-h-lvh bg-gradient-to-br from-pink-50 to-amber-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20">
        <div className="w-32 h-32 bg-white rounded-full opacity-30"></div>
      </div>
      <div className="absolute bottom-20 left-20">
        <div className="w-24 h-24 bg-green-100 rounded-full opacity-40"></div>
      </div>
      
      {/* White lily decorations */}
      <div className="absolute top-24 right-40">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-32 right-72">
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/3">
        <div className="w-24 h-24 bg-green-200 rounded-sm rotate-45"></div>
      </div>

      {/* Floating aloe leaves */}
      <div className="absolute top-1/4 left-10">
        <div className="w-20 h-40 bg-green-200 opacity-40 rounded-full transform rotate-12"></div>
      </div>
      <div className="absolute bottom-20 right-10">
        <div className="w-20 h-40 bg-green-200 opacity-40 rounded-full transform -rotate-12"></div>
      </div>

      {/* Main content container */}
      <div className="flex flex-col md:flex-row h-dvh max-w-7xl mx-auto">
        {/* Left side content - no separate background */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
          <p className="text-rose-600 font-medium tracking-wider uppercase mb-3">Sale Up To 40% Off</p>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-800 mb-6 leading-tight">
             Natural Cosmetics
          </h1>
          <p className="text-stone-600 mb-8 max-w-lg">
            Discover the power of nature with our premium skincare line. Enriched with pure aloe vera extract for hydrated, radiant skin.
          </p>
          <button className="bg-rose-600 text-white rounded-full py-3 px-8 flex items-center justify-center hover:bg-rose-700 transition duration-300 shadow-md group w-50">
            <span className="font-medium">Shop Now</span>
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Right side image - no separate background */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <div className="h-4/5 relative">
            {/* Model image container */}
            <img 
              src={image} 
              alt="Woman in towel applying face cream" 
              className="object-contain h-full"
            />
            
            {/* Product badge */}
            <div className="absolute -bottom-6 -right-6">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-rose-300 rounded-full flex items-center justify-center text-white font-bold">
                    40%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-rose-300 rounded-full"></div>
      </div>
    </div>
  );
}