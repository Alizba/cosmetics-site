import React, { useState } from 'react';
import { ChevronLeft, Minus, Plus, Share2 } from 'lucide-react';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('tan');

  const colors = [
    { id: 'tan', name: 'Tan', class: 'bg-amber-400' },
    { id: 'black', name: 'Black', class: 'bg-black' },
    { id: 'brown', name: 'Brown', class: 'bg-amber-800' },
  ];

  const incrementQuantit = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-8">
   
      <div className="absolute top-4 left-4">
        <button className="flex items-center text-gray-600">
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="text-lg font-bold uppercase">Obaku</div>
        <div className="text-xs text-center">DENMARK</div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
          <img 
            src="/api/placeholder/400/400" 
            alt="Magnus Gothard Leather Strap Watch" 
            className="max-w-full h-auto"
          />
        </div>
        
        <div className="flex gap-4 mt-4 justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 rounded-full overflow-hidden">
            <img src="/api/placeholder/32/32" alt="Watch thumbnail" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 border-2 border-gray-300 rounded-full overflow-hidden">
            <img src="/api/placeholder/32/32" alt="Strap thumbnail" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 border-2 border-gray-300 rounded-full overflow-hidden">
            <img src="/api/placeholder/32/32" alt="Close-up thumbnail" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">Magnus Gothard Leather Strap</h1>
        <div className="text-2xl font-semibold mb-6">Rs 189</div>
        
        <p className="text-gray-600 mb-6">
          A fine watch adorned with a smooth ivory dial and a tan leather strap. The watch features premium materials and precision movement.
          <span className="text-blue-500 ml-1">Learn More →</span>
        </p>
        
        <div className="mb-6">
          <div className="text-sm font-medium mb-2">SELECT COLOR</div>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.id}
                className={`w-8 h-8 rounded-full ${color.class} ${selectedColor === color.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedColor(color.id)}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-sm font-medium mb-2">QUANTITY</div>
          <div className="flex items-center border border-gray-300 rounded w-32">
            <button onClick={decrementQuantity} className="px-3 py-2 text-gray-600">
              <Minus size={16} />
            </button>
            <div className="flex-1 text-center">{quantity}</div>
            <button onClick={incrementQuantity} className="px-3 py-2 text-gray-600">
              <Plus size={16} />
            </button>
          </div>
        </div>
        
        <button className="w-full bg-blue-400 text-white py-3 rounded hover:bg-blue-500 transition mb-4">
          ADD TO CART
        </button>
        
        <div className="flex justify-between text-sm text-gray-500">
          <button className="flex items-center gap-1">
            <Share2 size={16} />
            SHARE THIS MODEL
          </button>
          <div>SKU: WB123456</div>
        </div>
      </div>
    </div>
  );
}