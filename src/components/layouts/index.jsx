import React, { useState, useEffect } from 'react'
import AppSidebar from './AppSidebar'

const MainLayout = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle body overflow for mobile overlay
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen, isMobile]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleBackdropClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-row relative">
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={handleBackdropClick}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${isMobile 
          ? 'fixed top-0 left-0 h-screen z-50 transform transition-transform duration-300 ease-in-out' 
          : 'fixed top-0 h-screen'
        }
        ${isMobile 
          ? isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          : isSidebarOpen ? 'block' : 'hidden'
        }
        w-[280px] max-w-[280px] overflow-x-hidden overflow-y-auto
        ${isMobile ? 'shadow-2xl' : ''}
      `}>
        <AppSidebar onToggle={handleSidebarToggle} isMobile={isMobile} />
      </div>

      {/* Main content */}
      <main className={`
        flex-1 h-full overflow-y-auto text-left transition-all duration-300
        ${!isMobile && isSidebarOpen ? "ml-[280px]" : "ml-0 pt-12"}
      `}>
        {/* Mobile Toggle Button */}
        {isMobile && (
          <button
            onClick={handleSidebarToggle}
            className="fixed top-4 left-4 z-30 p-2 bg-white rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        
        {children}
      </main>
    </div>
  )
}

export default MainLayout