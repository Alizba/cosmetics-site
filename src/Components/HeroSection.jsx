import React from 'react';
import { ChevronRight, Leaf, Sparkles, Droplet } from 'lucide-react';

import heroImage from '../assets/images/heroImage.webp';
import heroImg3 from '../assets/images/heroImg3.png';

export default function HeroSection() {
  return (
    <div
      className="relative w-full overflow-hidden py-12"
      style={{ background: 'linear-gradient(to bottom right, #FED0BB, #FCB9B2)' }}
    >
      <div className="absolute top-20 right-20">
        <div className="w-32 h-32 rounded-full opacity-30" style={{ backgroundColor: '#8C2F39' }}></div>
      </div>
      <div className="absolute bottom-20 left-20">
        <div className="w-24 h-24 rounded-full opacity-40" style={{ backgroundColor: '#B23A48' }}></div>
      </div>
      <div className="absolute top-24 right-40">
        <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCB9B2' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FED0BB' }}>
            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#B23A48' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-32 right-72">
        <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCB9B2' }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FED0BB' }}>
            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#B23A48' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-6 left-1/3">
        <div className="w-24 h-24 rounded-sm rotate-45" style={{ backgroundColor: '#8C2F39', opacity: 0.3 }}></div>
      </div>
      <div className="absolute top-1/4 left-10">
        <div className="w-20 h-40 opacity-40 rounded-full transform rotate-12" style={{ backgroundColor: '#461220' }}></div>
      </div>
      <div className="absolute bottom-20 right-10">
        <div className="w-20 h-40 opacity-40 rounded-full transform -rotate-12" style={{ backgroundColor: '#461220' }}></div>
      </div>


      <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center">
   
        <div className="w-full md:w-1/2 p-8 md:p-16 z-10">
          <p className="font-medium tracking-wider uppercase mb-3" style={{ color: '#461220' }}>Sale Up To 40% Off</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight" style={{ color: '#461220' }}>
            Natural Cosmetics
          </h1>
          <p className="mb-8 max-w-lg" style={{ color: '#8C2F39' }}>
            Discover the power of nature with our premium skincare line. Enriched with pure aloe vera extract for hydrated, radiant skin.
          </p>
          <button
            className="rounded-full py-3 px-8 flex items-center justify-center transition duration-300 shadow-md group w-50 hover:shadow-lg"
            style={{ backgroundColor: '#B23A48', color: 'white' }}
          >
            <span className="font-medium">Shop Now</span>
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

 
          <div className="mt-10 space-y-4 text-sm text-[#461220]">
            <div className="flex items-center gap-3">
              <Leaf size={20} /> 100% Organic Ingredients
            </div>
            <div className="flex items-center gap-3">
              <Droplet size={20} /> Dermatologist Tested
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={20} /> Visible Results in 7 Days
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative h-[600px]">
          <div className="absolute z-20 left-30 top-10">
            <img 
              src={heroImg3} 
              alt="Oil Dropper Bottle" 
              className="object-contain right-2"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 z-30">
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FCB9B2' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B23A48' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#461220' }}>
                  40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10">
            <img 
              src={heroImage} 
              alt="Green Leaf" 
              className="object-contain"
            />
          </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 rounded-full" style={{ backgroundColor: '#8C2F39' }}></div>
      </div>
    </div>
  );
}