import React from 'react';
import { Menu } from 'lucide-react';
import CatagorySidebar from './CatagorySidebar';

function UserLanding() {
  const { 
    MobileSidebar, 
    DesktopSidebar, 
    isMobileView, 
    setIsMobileSidebarOpen 
  } = CatagorySidebar();

  const openMobileSidebar = () => {
    setIsMobileSidebarOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav 
        className="flex items-center justify-around px-6 sticky top-0 z-50 w-full shadow-md transition-all duration-300 py-4" 
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <div className="flex items-center">
          {isMobileView && (
            <button 
              onClick={openMobileSidebar}
              className="p-2.5 mr-4 rounded-full hover:bg-gray-200 lg:hidden" 
              style={{ backgroundColor: '#B23A48' }}
            >
              <Menu size={20} className="text-white" />
              <span className="sr-only">Menu</span>
            </button>
          )}
          
          <a href="/" className="text-4xl font-extrabold tracking-widest italic" style={{ color: '#461220' }}>
            Wera
          </a>
        </div>

        {/* Right side with icons */}
        <div className="flex items-center space-x-3">
          <a href="/cart">
            <button className="p-3 rounded-full shadow-md transition duration-200 hover:shadow-lg" style={{ backgroundColor: '#B23A48' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="sr-only">Shopping Cart</span>
            </button>
          </a>
          
          <a href="/profile">
            <button className="p-3 rounded-full shadow-md transition duration-200 hover:shadow-lg" style={{ backgroundColor: '#B23A48' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="sr-only">Profile</span>
            </button>
          </a>
          
          <button 
            className="p-3 rounded-full shadow-md transition duration-200 hover:shadow-lg" 
            style={{ backgroundColor: '#B23A48' }}
            onClick={() => console.log("Logout clicked")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span className="sr-only">Logout</span>
          </button>
        </div>
      </nav>

      <div className="flex flex-grow">
        <DesktopSidebar />
        <MobileSidebar />
        
        {/* Main content */}
        <main className="flex-grow p-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4" style={{ color: '#461220' }}>Welcome to Wera</h1>
            <p className="text-gray-700">
              Discover our latest collections and exclusive deals.
            </p>
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserLanding;