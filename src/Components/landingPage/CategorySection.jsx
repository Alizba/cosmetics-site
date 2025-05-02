import React from 'react';
import { Link } from 'react-router-dom';

export default function CategorySection() {
  const features = [
    {
      icon: "https://images.pexels.com/photos/7797733/pexels-photo-7797733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Hair Serums",
      alt: "Hair serum bottle",
      bgColor: "#FCB9B2",
      slug: "hair-serums"
    },
    {
      icon: "https://images.pexels.com/photos/1472098/pexels-photo-1472098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Makeup Brushes",
      alt: "Makeup brush",
      bgColor: "#FED0BB",
      slug: "makeup-brushes"
    },
    {
      icon: "https://images.pexels.com/photos/4108279/pexels-photo-4108279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Perfumes",
      alt: "Perfume bottle",
      bgColor: "#FCB9B2",
      slug: "perfumes"
    },
    {
      icon: "https://images.pexels.com/photos/6978022/pexels-photo-6978022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Masks & Creams",
      alt: "Face cream jar",
      bgColor: "#FED0BB",
      slug: "masks-and-creams"
    },
    {
      icon: "https://images.pexels.com/photos/12606876/pexels-photo-12606876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lipstick",
      alt: "Lipstick",
      bgColor: "#FCB9B2",
      slug: "lipstick"
    },
    {
      icon: "https://images.pexels.com/photos/17456617/pexels-photo-17456617/free-photo-of-box-of-ointment-and-shadow-of-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Face Creams",
      alt: "Face cream product",
      bgColor: "#FED0BB",
      slug: "face-creams"
    }
  ];

  return (
    <section className="py-16 px-6" style={{ background: 'white' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="absolute left-1/3 bottom-91">
            <div className="w-24 h-24 rounded-sm rotate-45" style={{ backgroundColor: '#8C2F39', opacity: 0.3 }}></div>
          </div>
          <h2 className="text-4xl font-serif font-bold" style={{ color: '#461220' }}>Shop By Category</h2>
          <p className="text-lg mt-3" style={{ color: '#8C2F39' }}>Discover our premium beauty collections</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <Link 
              to={`/category/${feature.slug}`} 
              key={index} 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className="rounded-full p-3 mb-5 w-40 h-40 flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: feature.bgColor }}
              >
                <div
                  className="rounded-full w-36 h-36 overflow-hidden group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: '#fff', boxShadow: '0 4px 10px rgba(140, 47, 57, 0.15)' }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div
                className="relative py-2 px-5 rounded-full text-center transform transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: '#B23A48' }}
              >
                <p className="text-white font-medium">{feature.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}