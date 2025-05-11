import { User, ShoppingCart, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SimplifiedUserNav() {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="w-screen max-w-full">
      <nav 
        className={`flex items-center justify-around px-6 sticky top-0 z-50 w-full left-0 right-0 shadow-md transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`} 
        style={{ backgroundColor: scrolled ? 'rgba(245, 245, 245, 0.95)' : '#F5F5F5' }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-4xl font-extrabold tracking-widest italic" style={{ color: '#461220' }}>Wera</h1>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          {/* Cart Icon */}
          <Link to="/cart">
            <button className="p-3 rounded-full shadow-md transition duration-200 hover:shadow-lg" style={{ backgroundColor: '#B23A48' }}>
              <ShoppingCart size={20} className="text-white" />
              <span className="sr-only">Shopping Cart</span>
            </button>
          </Link>
          
          {/* Profile Icon */}
          <Link to="/profile">
            <button className="p-3 rounded-full shadow-md transition duration-200 hover:shadow-lg" style={{ backgroundColor: '#B23A48' }}>
              <User size={20} className="text-white" />
              <span className="sr-only">Profile</span>
            </button>
          </Link>
          
          {/* Logout Button */}
          <button 
            className="p-3 rounded-full shadow-md transition duration-200 hover:shadow-lg" 
            style={{ backgroundColor: '#B23A48' }}
            onClick={() => {
              // Add your logout logic here
              console.log("Logout clicked");
            }}
          >
            <LogOut size={20} className="text-white" />
            <span className="sr-only">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default SimplifiedUserNav;