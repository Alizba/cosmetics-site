import { useState } from 'react';

export default function CategorySection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const features = [
    {
      icon: "/api/placeholder/180/180",
      title: "Hair Serums",
      alt: "Hair serum bottle"
    },
    {
      icon: "/api/placeholder/180/180",
      title: "Makeup Brushes",
      alt: "Makeup brush"
    },
    {
      icon: "/api/placeholder/180/180",
      title: "Perfumes",
      alt: "Perfume bottle"
    },
    {
      icon: "/api/placeholder/180/180",
      title: "Masks and Creams",
      alt: "Face cream jar"
    },
    {
      icon: "/api/placeholder/180/180",
      title: "Makeup / Lipstick",
      alt: "Lipstick"
    },
    {
      icon: "/api/placeholder/180/180",
      title: "Face Creams",
      alt: "Face cream product"
    }
  ];

  

  return (
    <div className="py-8 px-4 relative max-w-6xl mx-auto">
      <div className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory md:overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 16.66}%)` }}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="min-w-[33.33%] md:min-w-[16.66%] px-2 flex flex-col items-center"
            >
              <div className="bg-gray-100 rounded-full p-6 mb-4 w-24 h-24 flex items-center justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.alt}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-sm text-center font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile navigation dots */}
      <div className="flex justify-center mt-6 space-x-1 md:hidden">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 w-2 rounded-full ${index === activeSlide ? 'bg-red-500' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
     
    </div>
  );
}