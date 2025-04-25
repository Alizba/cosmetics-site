import React from 'react';

// You would replace these with your actual image imports
import perfumeImage1 from '../assets/images/perfume1.png';
// import perfumeImage2 from '../assets/images/perfume2.png';
// import perfumeImage3 from '../assets/images/perfume3.png';
import skinCareSet from '../assets/images/skincare-set.png';

export default function PromotionalBanner() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Banner - You May Also Like */}
        <div className="relative overflow-hidden rounded-lg" style={{ backgroundColor: '#FED0BB' }}>
          <div className="p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">You May Also Like</h2>
            <p className="text-sm text-gray-700 mb-4">
              Natural and organic is the future of skincare and life as we know it.
            </p>
            
            {/* Product Images Group */}
            <div className="relative flex justify-center items-end flex-1">
              {/* Orange Perfume */}
              <div className="absolute left-4 bottom-6 w-28 z-10">
                <img 
                  src={perfumeImage1} 
                  alt="Orange Perfume" 
                  className="object-contain h-40"
                />
              </div>
              
              {/* Purple Tall Perfume (Center, Larger) */}
              <div className="z-20">
                <img 
                  src={perfumeImage1} 
                  alt="Purple Perfume" 
                  className="object-contain h-52"
                />
              </div>
              
              {/* Light Pink Perfume */}
              <div className="absolute right-4 bottom-6 w-28 z-10">
                <img 
                  src={perfumeImage1} 
                  alt="Pink Perfume" 
                  className="object-contain h-40"
                />
              </div>
              
              {/* Flower Petals */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-pink-300 mx-1"></div>
                  <div className="w-3 h-3 rounded-full bg-pink-400 mx-1"></div>
                  <div className="w-5 h-5 rounded-full bg-pink-200 mx-1"></div>
                  <div className="w-3 h-3 rounded-full bg-pink-300 mx-1"></div>
                </div>
              </div>
            </div>
            
            {/* Shop Now Button */}
            <div className="mt-6">
              <button className="bg-black text-white px-6 py-2 text-sm font-medium">Shop Now</button>
            </div>
          </div>
        </div>
        
        {/* Right Banner - Customer Favorite Beauty Essentials */}
        <div className="relative overflow-hidden rounded-lg bg-gray-50">
          <div className="p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Customer Favorite Beauty Essentials</h2>
            <p className="text-sm text-gray-700 mb-4">
              Natural and organic is the future of skincare and life as we know it.
            </p>
            
            {/* Product Image - Skincare Set */}
            <div className="flex-1 flex justify-center items-center">
              <img 
                src={skinCareSet} 
                alt="Skincare Collection" 
                className="object-contain max-h-64"
              />
            </div>
            
            {/* Shop Now Button */}
            <div className="mt-6">
              <button className="bg-black text-white px-6 py-2 text-sm font-medium">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}