import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

// Import the same product images used in FeaturedProducts
// Note: In a real implementation, you would likely fetch this data from an API
import serum1 from '../../assets/images/serum1.png';
import serum2 from '../../assets/images/serum3.png';
import makeUp1 from '../../assets/images/makeUp1.png';
import makeUp2 from '../../assets/images/makeUp2.png';
import makeUp3 from '../../assets/images/makeUp3.png';
import makeUp4 from '../../assets/images/makeUp4.png';
import cream1 from '../../assets/images/cream1.png';
import faceCream from '../../assets/images/faceCream1.png';

export default function ProductImage() {
  // Extract both parameters from the URL
  const { categorySlug, productId } = useParams();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  
  // Product database with detailed information
  const productsDatabase = [
    {
      id: 1,
      name: 'Hair Oil',
      price: 299,
      image: serum1,
      category: 'hair-serums',
      description: 'A nourishing hair oil that helps strengthen and restore shine to damaged hair. Made with premium natural ingredients.',
      details: [
        'Reduces frizz and adds shine',
        'Contains argan oil and vitamin E',
        'Suitable for all hair types',
        'Paraben-free formula'
      ],
      stock: 15,
      rating: 4.6
    },
    {
      id: 2,
      name: 'Compact Powder',
      price: 339,
      image: makeUp1,
      category: 'makeup-brushes',
      description: 'A silky smooth compact powder that gives you a flawless finish. Perfect for touch-ups throughout the day.',
      details: [
        'Long-lasting matte finish',
        'Oil control formula',
        'Comes with mirror and applicator',
        'Available in multiple shades'
      ],
      stock: 8,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Eye Shades',
      price: 399,
      image: makeUp2,
      category: 'makeup-brushes',
      description: 'A palette of beautiful eye shadows with both matte and shimmer finishes for versatile eye looks.',
      details: [
        '12 complementary shades',
        'Highly pigmented colors',
        'Long-lasting formula',
        'Cruelty-free'
      ],
      stock: 10,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Loose cosmetic Powder',
      price: 399,
      image: makeUp3,
      category: 'makeup-brushes',
      description: 'A finely-milled loose powder that sets makeup and creates a smooth, airbrushed effect.',
      details: [
        'Translucent finish',
        'Prevents makeup creasing',
        'Lightweight formula',
        'Includes powder puff'
      ],
      stock: 12,
      rating: 4.5
    },
    {
      id: 5,
      name: 'Lip Sticks',
      price: 229,
      image: makeUp4,
      category: 'lipstick',
      description: 'A creamy, richly pigmented lipstick that provides vibrant color and comfortable wear.',
      details: [
        'Moisturizing formula with shea butter',
        'Long-lasting color payoff',
        'Variety of finishes available',
        'Fragrance-free'
      ],
      stock: 20,
      rating: 4.9
    },
    {
      id: 6,
      name: 'Whitening Cream',
      price: 229,
      image: cream1,
      category: 'masks-and-creams',
      description: 'A gentle brightening cream that helps even skin tone and reduce the appearance of dark spots.',
      details: [
        'Contains niacinamide and vitamin C',
        'Suitable for sensitive skin',
        'Dermatologist tested',
        'No hydroquinone'
      ],
      stock: 7,
      rating: 4.3
    },
    {
      id: 7,
      name: 'Hand Cream',
      price: 289,
      image: faceCream,
      category: 'face-creams',
      description: 'A luxurious hand cream that nourishes and moisturizes dry hands, leaving them soft and smooth.',
      details: [
        'Fast-absorbing formula',
        'Contains shea butter and glycerin',
        'Non-greasy finish',
        'Light floral scent'
      ],
      stock: 25,
      rating: 4.4
    },
    {
      id: 8,
      name: 'Acne Serum',
      price: 299,
      image: serum2,
      category: 'hair-serums',
      description: 'A targeted treatment serum that helps clear acne and prevent future breakouts without drying the skin.',
      details: [
        'Contains salicylic acid and tea tree oil',
        'Oil-free formula',
        'Reduces redness and inflammation',
        'Suitable for daily use'
      ],
      stock: 5,
      rating: 4.7
    }
  ];
  
  // Try to get product from location state first (from CategoryPage)
  // Fall back to the productsDatabase if no state is available
  let product;
  
  if (location.state && location.state.product) {
    // Use the product from location state
    const stateProduct = location.state.product;
    
    // Create a complete product object by extending the state product data
    // with default values for missing properties
    product = {
      id: stateProduct.id,
      name: stateProduct.name,
      price: parseFloat(stateProduct.price.replace('$', '')),
      image: stateProduct.image,
      category: categorySlug,
      description: stateProduct.description || 'Product description not available.',
      details: [
        'High quality product',
        'Premium ingredients',
        'Suitable for regular use',
        'Cruelty-free'
      ],
      stock: 10,
      rating: 4.5
    };
  } else {
    // Fall back to searching the database by ID
    product = productsDatabase.find(p => p.id === parseInt(productId)) || {
      id: 0,
      name: 'Product Not Found',
      price: 0,
      image: null,
      description: 'The product you are looking for does not exist.',
      details: [],
      stock: 0,
      rating: 0
    };
  }

  // Related products (here we're just getting 4 random products that aren't the current one)
  const relatedProducts = productsDatabase
    .filter(p => p.id !== parseInt(productId))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  // Handle quantity changes
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    
    return stars;
  };

  return (
    <div>
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-3 px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm">
            <ol className="list-none p-0 flex">
              <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li className="flex items-center">
                <Link to={`/category/${categorySlug}`} className="text-gray-500 hover:text-gray-700">
                  {categorySlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li className="text-gray-700 font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Product Details Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-96 object-contain"
              />
            </div>
            
            {/* Product Information */}
            <div>
              <h1 className="text-3xl font-serif font-bold mb-2" style={{ color: '#461220' }}>{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">({product.rating} rating)</span>
              </div>
              
              <div className="mb-6">
                <span className="text-2xl font-bold" style={{ color: '#B23A48' }}>
                  {typeof product.price === 'string' ? product.price : `Rs ${product.price.toFixed(1)}`}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#461220' }}>Key Features:</h3>
                <ul className="list-disc pl-5">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-gray-700 mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#461220' }}>Availability:</h3>
                <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </p>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="mr-4 font-medium" style={{ color: '#461220' }}>Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={decrementQuantity} 
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-l border-r border-gray-300">{quantity}</span>
                  <button 
                    onClick={incrementQuantity} 
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  className="px-6 py-3 rounded-lg text-white font-medium transition-colors"
                  style={{ backgroundColor: '#B23A48' }}
                  disabled={product.stock === 0}
                >
                  Add to Cart
                </button>
                <button 
                  className="px-6 py-3 rounded-lg text-white font-medium transition-colors"
                  style={{ backgroundColor: '#8C2F39' }}
                >
                  Buy Now
                </button>
                <button 
                  className="px-4 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-8" style={{ color: '#461220' }}>You Might Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Link 
                to={`/product/${relatedProduct.category}/${relatedProduct.id}`} 
                key={relatedProduct.id}
                className="group"
                state={{ product: {
                  id: relatedProduct.id,
                  name: relatedProduct.name,
                  price: `Rs ${relatedProduct.price.toFixed(1)}`,
                  image: relatedProduct.image,
                  description: relatedProduct.description
                } }}
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 overflow-hidden bg-white p-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1" style={{ color: '#8C2F39' }}>{relatedProduct.name}</h3>
                    <p className="font-bold" style={{ color: '#461220' }}>Rs {relatedProduct.price.toFixed(1)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}