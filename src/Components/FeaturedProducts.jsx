import { useState } from 'react';

export default function FeaturedProducts() {
    const [activeCategory, setActiveCategory] = useState('For Sale');

    const categories = ['For Sale', 'For Her', 'Accessories'];

    const products = [
        {
            id: 1,
            name: 'Organic High Customer Turnover Powder',
            price: 29.9,
            image: '/api/placeholder/160/160'
        },
        {
            id: 2,
            name: 'Organic High Customer Turnover Powder',
            price: 33.9,
            image: '/api/placeholder/160/160'
        },
        {
            id: 3,
            name: 'Organic High Customer Turnover Powder',
            price: 39.9,
            image: '/api/placeholder/160/160'
        },
        {
            id: 4,
            name: 'Organic High Customer Turnover Powder',
            price: 39.9,
            image: '/api/placeholder/160/160'
        },
        {
            id: 5,
            name: 'Organic High Customer Turnover Powder',
            price: 22.9,
            image: '/api/placeholder/160/160'
        },
        {
            id: 6,
            name: 'Organic High Customer Turnover Powder',
            price: 22.9,
            image: '/api/placeholder/160/160'
        },
        {
            id: 7,
            name: 'Organic High Customer Turnover Powder',
            price: 28.9,
            image: '/api/placeholder/160/160'
        },
        {
            id: 8,
            name: 'Organic High Customer Turnover Powder',
            price: 29.9,
            image: '/api/placeholder/160/160'
        }
    ];

    // Custom color classes
    const colors = {
        primary: 'bg-[#B23A48]', // B23A48 - deeper red
        primaryHover: 'hover:bg-[#8C2F39]', // 8C2F39 - burgundy
        secondary: 'bg-[#FED0BB]', // FED0BB - light peach
        secondaryLight: 'bg-[#FCB9B2]', // FCB9B2 - salmon pink
        dark: 'text-[#461220]', // 461220 - dark burgundy
    };

    return (
        <div className="max-w-fit mx-auto px-4 py-8" style={{ backgroundColor: '#fff' }}>
            <div className="flex flex-col items-center mb-8">
                <h2 className="text-4xl mb-10 font-serif font-bold" style={{ color: '#461220' }}>Featured Products</h2>

                {/* Category tabs */}
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

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="group">
                        <div className="rounded-lg overflow-hidden mb-3" style={{ backgroundColor: '#F3e2d5' }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-medium mb-1" style={{ color: '#8C2F39' }}>{product.name}</h3>
                            <div className="flex justify-center">
                                <div className="px-4 py-1 mb-5 rounded-full" style={{ backgroundColor: '#FED0BB' }}>
                                    <p className="text-lg font-bold" style={{ color: '#461220' }}>
                                        ${product.price.toFixed(1)}
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
                        Shop More
                    </button>
                </div>
        </div>
    );
}