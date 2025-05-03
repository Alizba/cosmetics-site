import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import image from '../../assets/images/serum2.png'

const categoryData = {
  'hair-serums': {
    title: 'Hair Serums',
    description: 'Discover our premium collection of hair serums designed to nourish, repair, and transform your hair.',
    bannerImage: 'https://images.pexels.com/photos/7797733/pexels-photo-7797733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 1, name: 'Nourishing Hair Serum', price: '$24.99', image: 'https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 2, name: 'Repair & Restore Serum', price: '$29.99', image: 'https://images.pexels.com/photos/3737578/pexels-photo-3737578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 3, name: 'Shine Enhancer Serum', price: '$19.99', image: 'https://images.pexels.com/photos/2754595/pexels-photo-2754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
   
    ]
  },
  'makeup-brushes': {
    title: 'Makeup Brushes',
    description: 'Professional quality makeup brushes for flawless application.',
    bannerImage: 'https://images.pexels.com/photos/1472098/pexels-photo-1472098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 1, name: 'Foundation Brush Set', price: '$34.99', image: 'https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 2, name: 'Eye Makeup Brush Kit', price: '$29.99', image: 'https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 3, name: 'Premium Brush Collection', price: '$49.99', image: 'https://images.pexels.com/photos/2688992/pexels-photo-2688992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ]
  },
  'perfumes': {
    title: 'Perfumes',
    description: 'Luxury fragrances for every occasion.',
    bannerImage: 'https://images.pexels.com/photos/4108279/pexels-photo-4108279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 1, name: 'Elegance Eau de Parfum', price: '$79.99', image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 2, name: 'Fresh Citrus Cologne', price: '$59.99', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 3, name: 'Floral Essence', price: '$69.99', image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ]
  },
  'masks-and-creams': {
    title: 'Masks & Creams',
    description: 'Rejuvenating face masks and treatment creams for radiant skin.',
    bannerImage: 'https://images.pexels.com/photos/6978022/pexels-photo-6978022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 1, name: 'Hydrating Sheet Mask', price: '$5.99', image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 2, name: 'Clay Purifying Mask', price: '$12.99', image: 'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 3, name: 'Overnight Treatment Cream', price: '$24.99', image: {image} },
    ]
  },
  'lipstick': {
    title: 'Lipstick',
    description: 'Bold and beautiful lipsticks for every occasion.',
    bannerImage: 'https://images.pexels.com/photos/12606876/pexels-photo-12606876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 1, name: 'Matte Finish Lipstick', price: '$14.99', image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 2, name: 'Creamy Satin Lipstick', price: '$16.99', image: 'https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 3, name: 'Long-lasting Liquid Lip', price: '$19.99', image: 'https://images.pexels.com/photos/1676132/pexels-photo-1676132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ]
  },
  'face-creams': {
    title: 'Face Creams',
    description: 'Luxurious face creams for all skin types.',
    bannerImage: 'https://images.pexels.com/photos/17456617/pexels-photo-17456617/free-photo-of-box-of-ointment-and-shadow-of-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 1, name: 'Daily Moisturizer', price: '$22.99', image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 2, name: 'Night Repair Cream', price: '$29.99', image: 'https://images.pexels.com/photos/5069438/pexels-photo-5069438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 3, name: 'Anti-Aging Formula', price: '$39.99', image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ]
  }
};

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  
  const category = categoryData[categorySlug] || {
    title: 'Category Not Found',
    description: 'The category you are looking for does not exist.',
    bannerImage: '',
    products: []
  };

  // Function to handle product click and navigate to product image page
  const handleProductClick = (product) => {
    // Navigate to the product image page with necessary parameters
    navigate(`/product/${categorySlug}/${product.id}`, { 
      state: { 
        product: product,
        category: category.title
      } 
    });
  };

  return (
    <div>
      <Navbar />
      
      <div className="relative">
        <div className="h-64 w-full overflow-hidden">
          <img 
            src={category.bannerImage} 
            alt={category.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center p-5">
              <h1 className="text-4xl font-serif font-bold text-white mb-2">{category.title}</h1>
              <p className="text-lg text-white">{category.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#461220' }}>
            Our {category.title} Collection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-medium" style={{ color: '#461220' }}>{product.name}</h3>
                  <p className="text-lg font-bold mt-2" style={{ color: '#B23A48' }}>{product.price}</p>
                  <button 
                    className="w-full mt-4 py-2 px-4 rounded-full text-white font-medium transition-colors duration-300"
                    style={{ backgroundColor: '#B23A48' }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the parent div's onClick
                      // Add to cart functionality here
                      alert(`${product.name} added to cart!`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}