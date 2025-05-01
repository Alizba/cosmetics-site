import { Heart, Search, ShoppingBag, UserPlus, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-screen max-w-full">
      <nav className="flex items-center justify-around px-6 py-4 sticky top-0 z-50 w-full left-0 right-0 shadow-md" style={{ backgroundColor: '#F5F5F5' }}>

        <div className="flex items-center">

          <div className="mr-6">
            <Link to="/">
              <h1 className="text-4xl font-extrabold tracking-widest italic" style={{ color: '#461220' }}>Wera</h1>
            </Link>
          </div>

          <div className="h-8 w-px mx-4 hidden md:block" style={{ backgroundColor: '#8C2F39' }}></div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium transition duration-200 hover:text-white" style={{ color: '#461220' }}>Home</Link>
            <Link to="/products" className="font-medium transition duration-200 hover:text-white" style={{ color: '#461220' }}>Products</Link>
            <Link to="/contacts" className="font-medium transition duration-200 hover:text-white" style={{ color: '#461220' }}>Contacts</Link>
          </div>
        </div>

        <div className="flex items-center">

          <div className="relative mr-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} style={{ color: '#8C2F39' }} />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full text-sm shadow-md focus:outline-none focus:ring-2 w-64"
              style={{
                backgroundColor: '#FED0BB',
                color: '#461220',
                borderColor: '#B23A48',
                '::placeholder': { color: '#8C2F39' }
              }}
            />
          </div>

          <Link to="/cart">
            <button className="p-3 m-1 rounded-full shadow-md transition duration-200 hover:shadow-lg" style={{ backgroundColor: '#B23A48' }}>
              <ShoppingBag size={20} className="text-white" />
            </button>
          </Link>
          
          <Link to="/wishlist">
            <button className="p-3 m-1 rounded-full shadow-md transition duration-200 hover:shadow-lg" style={{ backgroundColor: '#B23A48' }}>
              <Heart size={20} className="text-white" />
            </button>
          </Link>
          
          <Link to="/signin">
            <button className="p-3 m-1 rounded-full shadow-md transition duration-200 hover:shadow-lg" style={{ backgroundColor: '#B23A48' }}>
              <User size={20} className="text-white" />
              <span className="sr-only">Sign In</span>
            </button>
          </Link>
          
          <Link to="/signup">
            <button className="p-3 m-1 rounded-full shadow-md transition duration-200 hover:shadow-lg" style={{ backgroundColor: '#B23A48' }}>
              <UserPlus size={20} className="text-white" />
              <span className="sr-only">Sign Up</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;