import React from 'react';

import perfumeImage1 from '../assets/images/perfume1.png';
import perfumeImage2 from '../assets/images/perfume2.png';
import perfumeImage3 from '../assets/images/perfume3.png';
import skinCareSet from '../assets/images/skincare-set.png';

export default function PromotionalBanner() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="relative overflow-hidden rounded-lg" style={{ backgroundColor: '#FED0BB' }}>
          <div className="p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">You May Also Like</h2>
            <p className="text-sm text-gray-700 mb-4">
              Natural and organic is the future of skincare and life as we know it.
            </p>

            <div className="relative flex justify-center items-end flex-1">

              <div className="absolute left-4 bottom-6 w-28 z-10">
                <img
                  src={perfumeImage1}
                  alt="Orange Perfume"
                  className="object-cover h-96"
                />
              </div>

              <div className="z-20">
                <img
                  src={perfumeImage3}
                  alt="Purple Perfume"
                  className="object-cover h-80"
                />
              </div>

              <div className="absolute right-3 bottom-8 w-28 z-10">
                <img
                  src={perfumeImage2}
                  alt="Pink Perfume"
                  className="object-cover h-60"
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-black text-white px-6 py-2 text-sm font-medium">Shop Now</button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gray-200">
          <div className="p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Customer Favorite Beauty Essentials</h2>
            <p className="text-sm text-gray-700 mb-4">
              Natural and organic is the future of skincare and life as we know it.
            </p>

            <div className="flex-1 flex justify-center items-center">
              <img
                src={skinCareSet}
                alt="Skincare Collection"
                className="object-cover h-96"
              />
            </div>

            <div className="mt-6">
              <button className="bg-black text-white px-6 py-2 text-sm font-medium">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}