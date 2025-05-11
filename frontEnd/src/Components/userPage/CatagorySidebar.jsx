import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ShoppingBag, Shirt, Watch, Gem, Smartphone, Home, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

function CategorySidebar() {
  const categories = [
    {
      name: 'Clothing',
      icon: <Shirt size={18} />,
      path: '/category/clothing',
      subCategories: ['Men', 'Women', 'Kids', 'Accessories']
    },
    {
      name: 'Electronics',
      icon: <Smartphone size={18} />,
      path: '/category/electronics',
      subCategories: ['Phones', 'Laptops', 'Tablets', 'Accessories']
    },
    {
      name: 'Jewelry',
      icon: <Gem size={18} />,
      path: '/category/jewelry',
      subCategories: ['Necklaces', 'Rings', 'Earrings', 'Bracelets']
    },
    {
      name: 'Watches',
      icon: <Watch size={18} />,
      path: '/category/watches',
      subCategories: ['Luxury', 'Casual', 'Sports', 'Smart Watches']
    },
    {
      name: 'Home & Living',
      icon: <Home size={18} />,
      path: '/category/home-living',
      subCategories: ['Decor', 'Kitchen', 'Bedding', 'Bath']
    },
    {
      name: 'Gifts',
      icon: <Gift size={18} />,
      path: '/category/gifts',
      subCategories: ['For Him', 'For Her', 'Special Occasions', 'Corporate']
    },
  ];

  const [expandedCategories, setExpandedCategories] = useState({});
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 1024); 
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleCategory = (categoryName) => {
    setExpandedCategories({
      ...expandedCategories,
      [categoryName]: !expandedCategories[categoryName]
    });
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const MobileSidebar = () => (
    <>
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeMobileSidebar}
        ></div>
      )}
      
      <div 
        className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-40 lg:hidden ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '280px' }}
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ backgroundColor: '#F5F5F5' }}>
          <h2 className="text-xl font-bold flex items-center" style={{ color: '#461220' }}>
            <ShoppingBag size={22} className="mr-2" style={{ color: '#B23A48' }} />
            Categories
          </h2>
          <button 
            onClick={closeMobileSidebar}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#B23A48' }}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto" style={{ height: 'calc(100% - 65px)' }}>
          <CategoryList />
        </div>
      </div>
    </>
  );

  const DesktopSidebar = () => (
    <div className="hidden lg:block w-64 bg-white shadow-lg sticky top-20">

      <div className="flex items-center p-4 border-b" style={{ backgroundColor: '#F5F5F5' }}>
        <h2 className="text-xl font-bold flex items-center" style={{ color: '#461220' }}>
          <ShoppingBag size={22} className="mr-2" style={{ color: '#B23A48' }} />
          Categories
        </h2>
      </div>

      <div className="overflow-y-auto max-h-screen">
        <CategoryList />
      </div>
    </div>
  );

  const CategoryList = () => (
    <ul className="py-2">
      {categories.map((category, index) => (
        <li key={index} className="border-b border-gray-100">
          <div 
            className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50"
            onClick={() => toggleCategory(category.name)}
          >
            <Link 
              to={category.path}
              className="flex items-center flex-grow"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="mr-3" style={{ color: '#B23A48' }}>{category.icon}</span>
              <span className="font-medium" style={{ color: '#461220' }}>{category.name}</span>
            </Link>
            <button className="p-1" onClick={(e) => {
              e.stopPropagation();
              toggleCategory(category.name);
            }}>
              {expandedCategories[category.name] ? (
                <ChevronDown size={18} style={{ color: '#8C2F39' }} />
              ) : (
                <ChevronRight size={18} style={{ color: '#8C2F39' }} />
              )}
            </button>
          </div>

          {expandedCategories[category.name] && (
            <ul className="pl-10 bg-gray-50">
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <Link 
                    to={`${category.path}/${subCategory.toLowerCase().replace(' ', '-')}`}
                    className="block py-2 px-2 hover:bg-gray-100 text-sm"
                    style={{ color: '#8C2F39' }}
                  >
                    {subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return {
    MobileSidebar,
    DesktopSidebar,
    isMobileView,
    setIsMobileSidebarOpen
  };
}

export default CategorySidebar;