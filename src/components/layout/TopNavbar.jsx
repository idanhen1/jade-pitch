
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Home, Users, EyeIcon, AlertTriangle, HardDrive, Settings, CheckSquare, Info, ExternalLink, Zap } from 'lucide-react'; // Added Zap for Solution
import { navItems as homePageNavItems } from '../../pages/HomePage';
import { createPageUrl } from '@/utils';

const pageSpecificNavs = {
  'Architecture': [{ id: 'architecture-link', label: 'Architecture', icon: HardDrive, isPageLink: true, pageName: 'Architecture' }],
  // Add other page-specific navs here if needed
};

export default function TopNavbar({ currentPageName }) {
  const [activeSection, setActiveSection] = useState(''); // For HomePage sections
  const [currentNavItemId, setCurrentNavItemId] = useState(''); // For general page links
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayNavItems, setDisplayNavItems] = useState([]);

  // Mapping nav item IDs to icons for HomePage
  const homePageIcons = {
    jade: Home,
    team: Users,
    vision: EyeIcon,
    challenges: AlertTriangle,
    platform: Zap, // Changed icon for "Solution" (formerly Platform)
    usecases: Settings,
    validation: CheckSquare
  };

  useEffect(() => {
    let newNavItems = [];
    if (currentPageName === 'HomePage') {
      // homePageNavItems already has the correct labels, including "Solution" for 'platform' id
      newNavItems = homePageNavItems.map(item => ({ ...item, icon: homePageIcons[item.id] || Info, type: 'section' }));
      if (homePageNavItems.length > 0) setActiveSection(homePageNavItems[0].id); // Default to first section
    }
    
    // Add a link to navigate to Architecture page if not on it
    if (currentPageName !== 'Architecture') {
        newNavItems.push({ id: 'architecture-page-link', label: 'Platform Diagram', icon: ExternalLink, isPageLink: true, pageName: 'Architecture', type: 'page' });
    } else {
         // If on Architecture page, maybe have a way to go back to Home
        newNavItems.unshift({ id: 'home-page-link', label: 'Home', icon: Home, isPageLink: true, pageName: 'HomePage', type: 'page' });
    }

    setDisplayNavItems(newNavItems);
    setCurrentNavItemId(currentPageName); // Highlight current page if it's a direct page link

  }, [currentPageName]);
  
  const handleNavClick = (item) => {
    if (item.type === 'section' && currentPageName === 'HomePage') {
      scrollToSection(item.sectionId);
    } else if (item.isPageLink && item.pageName) {
      window.location.href = createPageUrl(item.pageName);
    }
    setIsOpen(false); // Close mobile menu on click
  };

  const scrollToSection = (sectionId) => {
    console.log(`[TopNavbar] Attempting to scroll to: ${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`[TopNavbar] Section not found: ${sectionId}`);
    }
  };

  const handleLogoClick = () => { // Modified to accept item, though not strictly necessary if it always goes home or first section
    if (currentPageName === 'HomePage') {
      scrollToSection(homePageNavItems[0]?.sectionId || 'jade-section');
    } else {
      window.location.href = createPageUrl('HomePage');
    }
  };

  useEffect(() => {
    const mainElement = document.querySelector('main');
    
    // Handle scrolling for non-HomePage pages (listen to window scroll)
    if (currentPageName !== 'HomePage') {
      const handleWindowScroll = () => setIsScrolled(window.scrollY > 20); // isScrolled still updated
      window.addEventListener('scroll', handleWindowScroll);
      // Set initial state for non-HomePage pages
      setIsScrolled(window.scrollY > 20); 
      return () => window.removeEventListener('scroll', handleWindowScroll);
    }

    // If on HomePage, handle scrolling for the main element
    if (!mainElement) {
      console.warn("[TopNavbar] Main element not found for HomePage scroll tracking.");
      return;
    }

    const handleMainElementScroll = () => {
      setIsScrolled(mainElement.scrollTop > 20); // isScrolled still updated
      let currentVisibleSectionId = displayNavItems.find(item => item.type === 'section')?.id || '';
      
      if (mainElement.scrollTop < 50 && displayNavItems.find(item => item.type === 'section')) {
         currentVisibleSectionId = displayNavItems.find(item => item.type === 'section').id;
      } else {
        for (const item of displayNavItems) {
          if (item.type !== 'section') continue;
          const element = document.getElementById(item.sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const offset = 60; // Navbar height
            if (rect.top <= offset + (window.innerHeight / 3) && rect.bottom > offset + (window.innerHeight / 3)) {
              currentVisibleSectionId = item.id;
              break;
            }
          }
        }
      }
       if (mainElement.scrollHeight - mainElement.scrollTop <= mainElement.clientHeight + 65) {
            const sectionNavs = displayNavItems.filter(item => item.type === 'section');
            if (sectionNavs.length > 0) {
                 currentVisibleSectionId = sectionNavs[sectionNavs.length - 1].id;
            }
        }
      if (activeSection !== currentVisibleSectionId) {
        setActiveSection(currentVisibleSectionId);
      }
    };

    mainElement.addEventListener('scroll', handleMainElementScroll, { passive: true });
    // Initial check for HomePage after listeners are set up
    setTimeout(handleMainElementScroll, 100); 

    return () => {
      if (mainElement) { // Ensure mainElement exists before attempting to remove listener
        mainElement.removeEventListener('scroll', handleMainElementScroll);
      }
    };
  }, [currentPageName, displayNavItems, activeSection]); // isScrolled removed as direct dependency for style change

  const navLinkClasses = (item) => {
    const isActive = (item.type === 'section' && activeSection === item.id) || (item.isPageLink && currentNavItemId === item.pageName);
    return `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
      isActive 
        ? 'text-emerald-600 bg-emerald-100/70' 
        : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-100/70'
    }`;
  }

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] transition-all duration-300 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-md shadow-md`}
      // Removed conditional styling: ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}
      // Now it always has the "scrolled" appearance.
    >
      <div className="flex items-center justify-between h-full"> {/* This div is now effectively full width respecting nav's padding */}
        <div 
          onClick={handleLogoClick} 
          className="flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          title="Jade Security Home"
        >
          <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
          <span className="font-semibold text-slate-800 text-base sm:text-lg">Jade Security</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {displayNavItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={navLinkClasses(item)}
              title={item.label}
            >
              {item.icon && <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${ (item.type === 'section' && activeSection === item.id) || (item.isPageLink && currentNavItemId === item.pageName) ? 'text-emerald-500' : 'text-slate-400'}`} />}
              <span className="text-xs sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)} // isOpen state still controls mobile menu visibility
            className="p-2 rounded-md text-slate-600 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && ( // Mobile panel background is also opaque now because the parent nav is
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[60px] left-0 right-0 bg-white shadow-xl rounded-b-lg overflow-hidden"
            // Adjusted to be outside the main content div to ensure full width for mobile menu panel
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> {/* Padding for mobile menu items is fine inside here */}
              {displayNavItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`${navLinkClasses(item)} w-full justify-start text-sm sm:text-base`}
                  title={item.label}
                >
                  {item.icon && <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${ (item.type === 'section' && activeSection === item.id) || (item.isPageLink && currentNavItemId === item.pageName) ? 'text-emerald-500' : 'text-slate-400'}`} />}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
