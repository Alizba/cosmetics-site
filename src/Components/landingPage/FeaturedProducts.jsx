import { useState } from 'react';
import { Link } from 'react-router-dom';
import serum1 from '../../assets/images/serum1.png';
import serum2 from '../../assets/images/serum3.png';
import makeUp1 from '../../assets/images/makeUp1.png';
import makeUp2 from '../../assets/images/makeUp2.png';
import makeUp3 from '../../assets/images/makeUp3.png';
import makeUp4 from '../../assets/images/makeUp4.png';
import cream1 from '../../assets/images/cream1.png';
import faceCream from '../../assets/images/faceCream1.png';

export default function FeaturedProducts() {
    const [activeCategory, setActiveCategory] = useState('For Sale');

    const categories = ['For Sale', 'For Her', 'Accessories'];

    const products = [
        {
            id: 1,
            name: 'Hair Oil',
            price: 299,
            image: serum1,
            category: 'hair-serums'
        },
        {
            id: 2,
            name: 'Compact Powder',
            price: 339,
            image: makeUp1,
            category: 'makeup-brushes'
        },
        {
            id: 3,
            name: 'Eye Shades',
            price: 399,
            image: makeUp2,
            category: 'makeup-brushes'
        },
        {
            id: 4,
            name: 'Loose cosmetic Powder',
            price: 399,
            image: makeUp3,
            category: 'makeup-brushes'
        },
        {
            id: 5,
            name: 'Lip Sticks',
            price: 229,
            image: makeUp4,
            category: 'lipstick'
        },
        {
            id: 6,
            name: 'Whitening Cream',
            price: 229,
            image: cream1,
            category: 'masks-and-creams'
        },
        {
            id: 7,
            name: 'Hand Cream',
            price: 289,
            image: faceCream,
            category: 'face-creams'
        },
        {
            id: 8,
            name: 'Acne Serum',
            price: 299,
            image: serum2,
            category: 'hair-serums'
        }
    ];

    const colors = {
        primary: 'bg-[#B23A48]', 
        primaryHover: 'hover:bg-[#8C2F39]', 
        secondary: 'bg-[#FED0BB]', 
        secondaryLight: 'bg-[#FCB9B2]', 
        dark: 'text-[#461220]',
    };

    return (
        <section className="py-16 px-6" style={{ backgroundColor: '#fff' }}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="absolute left-2/3 bottom-91">
                        <div className="w-24 h-24 rounded-sm rotate-45" style={{ backgroundColor: '#8C2F39', opacity: 0.3 }}></div>
                    </div>
                    <h2 className="text-4xl font-serif font-bold" style={{ color: '#461220' }}>Featured Products</h2>
                    
                    <div className="flex justify-center mt-8">
                        <div className="flex space-x-1 p-1 rounded-lg" style={{ backgroundColor: '#FED0BB' }}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    style={{
                                        backgroundColor: activeCategory === category ? '#B23A48' : 'transparent',
                                        color: activeCategory === category ? 'white' : '#461220'
                                    }}
                                    className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeCategory !== category && 'hover:bg-[#FCB9B2]'}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Link 
                            to={`/product/${product.id}`} 
                            key={product.id} 
                            className="group"
                        >
                            {/* Card with gray background as requested */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="h-64 overflow-hidden" style={{ backgroundColor: '#F3F4F6' }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 text-center">
                                    <h3 className="text-xl font-medium mb-2" style={{ color: '#8C2F39' }}>{product.name}</h3>
                                    <div className="flex justify-center mt-3">
                                        <div 
                                            className="px-5 py-2 rounded-full inline-block" 
                                            style={{ backgroundColor: '#B23A48' }}
                                        >
                                            <p className="text-white font-medium">
                                                Rs {product.price.toFixed(1)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                
                <div className="flex justify-center mt-12">
                    <button
                        className="text-md md:text-lg font-serif font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                        style={{
                            backgroundColor: '#B23A48',
                            color: 'white',
                            borderBottom: '3px solid #8C2F39',
                        }}
                    >
                        Load More
                    </button>
                </div>
            </div>
        </section>
    );
}