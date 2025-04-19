import { Heart, Search, ShoppingBag, UserPlus } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-screen max-w-full">
      <nav className="flex items-center justify-around px-6 py-4 bg-pink-50 shadow-sm sticky top-0 z-50 w-full left-0 right-0">
        {/* Left Section: Logo & Links */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-6">
            <h1 className="text-4xl font-extrabold text-rose-600 tracking-widest italic">Wera</h1>
          </div>
          
          {/* Divider */}
          <div className="h-8 w-px bg-rose-200 mx-4 hidden md:block"></div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-stone-700 hover:text-rose-500 transition duration-200 font-medium">Home</a>
            <a href="#" className="text-stone-700 hover:text-rose-500 transition duration-200 font-medium">Products</a>
            <a href="#" className="text-stone-700 hover:text-rose-500 transition duration-200 font-medium">Contacts</a>
          </div>
        </div>
        
        {/* Right Section: Search & Icons */}
        <div className="flex items-center">
          {/* Search Bar */}
          <div className="relative mr-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-stone-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-rose-100 text-rose-700 placeholder-rose-400 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300 w-64"
            />
          </div>
          
          {/* Icons */}
          <button className="bg-rose-500 p-3 m-1 rounded-full shadow-md hover:bg-rose-600 transition duration-200">
            <ShoppingBag size={20} className="text-white" />
          </button>
          <button className="bg-rose-500 p-3 m-1 rounded-full shadow-md hover:bg-rose-600 transition duration-200">
            <Heart size={20} className="text-white" />
          </button>
          <button className="bg-rose-500 p-3 m-1 rounded-full shadow-md hover:bg-rose-600 transition duration-200">
            <UserPlus size={20} className="text-white" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;