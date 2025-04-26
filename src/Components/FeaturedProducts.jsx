import { useState } from 'react';
import serum1 from '../assets/images/serum1.png';
import serum2 from '../assets/images/serum3.png';
import makeUp1 from '../assets/images/makeUp1.png';
import makeUp2 from '../assets/images/makeUp2.png';
import makeUp3 from '../assets/images/makeUp3.png';
import makeUp4 from '../assets/images/makeUp4.png';
import cream1 from '../assets/images/cream1.png';
import faceCream from '../assets/images/faceCream1.png';

export default function FeaturedProducts() {
    const [activeCategory, setActiveCategory] = useState('For Sale');

    const categories = ['For Sale', 'For Her', 'Accessories'];

    const products = [
        {
            id: 1,
            name: 'Hair Oil',
            price: 299,
            image: serum1
        },
        {
            id: 2,
            name: 'Compact Powder',
            price: 339,
            image: makeUp1
        },
        {
            id: 3,
            name: 'Eye Shades',
            price: 399,
            image: makeUp2
        },
        {
            id: 4,
            name: 'Loose cosmetic Powder',
            price: 399,
            image: makeUp3
        },
        {
            id: 5,
            name: 'Lip Sticks',
            price: 229,
            image: makeUp4
        },
        {
            id: 6,
            name: 'Whitening Cream',
            price: 229,
            image: cream1
        },
        {
            id: 7,
            name: 'Hand Cream',
            price: 289,
            image: faceCream
        },
        {
            id: 8,
            name: 'Acne Serum',
            price: 299,
            image: serum2
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
        <div className="max-w-fit mx-auto px-4 py-8" style={{ backgroundColor: '#fff' }}>
            <div className="flex flex-col items-center mb-8">
                <h2 className="text-4xl mb-10 font-serif font-bold" style={{ color: '#461220' }}>Featured Products</h2>

                <div className="flex space-x-1 p-1 rounded-lg" style={{ backgroundColor: '#FED0BB' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            style={{
                                backgroundColor: activeCategory === category ? '#B23A48' : 'transparent',
                                color: activeCategory === category ? 'white' : '#461220'
                            }}
                            className={`px-4 py-2 text-sm rounded-md transition-colors ${!activeCategory === category && 'hover:bg-[#FCB9B2]'
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {products.map((product) => (
                    <div key={product.id} className="group">
                        <div className="rounded-lg overflow-hidden mb-3" style={{ backgroundColor: '#F3e2d5' }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-contain transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-medium mb-1" style={{ color: '#8C2F39' }}>{product.name}</h3>
                            <div className="flex justify-center">
                                <div className="px-4 py-1 mb-5 rounded-full" style={{ backgroundColor: '#FED0BB' }}>
                                    <p className="text-lg font-bold" style={{ color: '#461220' }}>
                                        Rs {product.price.toFixed(1)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className="flex justify-center w-full">
                    <button
                        className="text-md md:text-lg my-10 font-serif font-bold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                        style={{
                            backgroundColor: '#B23A48',
                            color: 'white',
                            borderBottom: '3px solid #8C2F39',
                            display: 'flex',
                            justifyContent: 'center'

                        }}
                    >
                        Load More
                    </button>
                </div>
        </div>
    );
}