import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Home, Users, EyeIcon, AlertTriangle, HardDrive, Settings, CheckSquare, Info } from 'lucide-react'; // Added more icons
import { navItems as homePageNavItems } from '../../pages/HomePage';
import { createPageUrl } from '@/utils';

// Mapping nav item IDs to icons for HomePage
const homePageIcons = {
  jade: Home,
  team: Users,
  vision: EyeIcon,
  challenges: AlertTriangle,
  platform: HardDrive,
  usecases: Settings, // Remapped for variety
  validation: CheckSquare
};


export default function LeftSidebar({ currentPageName }) {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentNavItems, setCurrentNavItems] = useState([]);

  useEffect(() => {
    if (currentPageName === 'HomePage') {
      setCurrentNavItems(homePageNavItems.map(item => ({...item, icon: homePageIcons[item.id] || Info })));
      setActiveSection('jade'); // Default for HomePage
    } else {
      // Define nav items for other pages or a default set if needed
      // For now, keeping it simple:
      const otherPageNavs = [
        { id: 'home', label: 'Home', sectionId: 'HomePage', isPageLink: true, icon: Home },
        // Add other global page links here if desired
      ];
      if (currentPageName === 'Architecture') {
         otherPageNavs.push({ id: 'architecture', label: 'Architecture', sectionId: 'Architecture', isPageLink: true, icon: HardDrive, isActive: true });
      }
      setCurrentNavItems(otherPageNavs);
      setActiveSection(currentPageName); // Highlight the current page itself
    }
  }, [currentPageName]);

  const handleNavClick = (item) => {
    if (item.isPageLink) {
      window.location.href = createPageUrl(item.sectionId);
    } else if (currentPageName === 'HomePage') {
      scrollToSection(item.sectionId);
    } else {
      // If on a different page and item is a section link, navigate to HomePage then scroll
      window.location.href = createPageUrl(`HomePage#${item.sectionId}`);
    }
    if (window.innerWidth < 768) { // Close mobile menu on click
        setIsMobileMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    console.log(`[LeftSidebar] Attempting to scroll to: ${sectionId} on page ${currentPageName}`);
    if (document.readyState !== 'complete') {
      setTimeout(() => scrollToSection(sectionId), 200);
      return;
    }
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.error(`[LeftSidebar] Section not found: ${sectionId}`);
      }
    }, 100);
  };
  
  const handleLogoClick = () => {
    window.location.href = createPageUrl('HomePage');
  };

  useEffect(() => {
    if (currentPageName !== 'HomePage') {
      setActiveSection(currentPageName); // For non-HomePage, active section is the page name
      return;
    }

    const mainElement = document.querySelector('main');
    if (mainElement) {
      const handleScroll = () => {
        let currentVisibleSectionId = 'jade';
        if (mainElement.scrollTop < 50) {
          currentVisibleSectionId = 'jade';
        } else {
          for (const item of homePageNavItems) {
            const element = document.getElementById(item.sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= (window.innerHeight / 3) && rect.bottom > (window.innerHeight / 3)) {
                currentVisibleSectionId = item.id;
                break;
              }
            }
          }
        }
        if (mainElement.scrollHeight - mainElement.scrollTop <= mainElement.clientHeight + 10) {
            if (homePageNavItems.length > 0) {
                 currentVisibleSectionId = homePageNavItems[homePageNavItems.length - 1].id;
            }
        }
        if (activeSection !== currentVisibleSectionId) {
          setActiveSection(currentVisibleSectionId);
        }
      };
      mainElement.addEventListener('scroll', handleScroll, { passive: true });
      const timer = setTimeout(handleScroll, 100); // Initial check
      return () => {
        mainElement.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
  }, [currentPageName, activeSection]);

  const navLinkClasses = (item) => {
    const isActive = item.isPageLink ? item.isActive : activeSection === item.id;
    return `flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer group ${
      isActive
        ? 'bg-emerald-100 text-emerald-700 shadow-sm'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`;
  };

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg text-slate-600 hover:text-emerald-600"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <motion.aside 
        className={`fixed md:static top-0 left-0 z-40 flex flex-col w-64 h-screen bg-white shadow-xl p-5 transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        variants={sidebarVariants}
        initial={false}
        animate={isMobileMenuOpen || window.innerWidth >= 768 ? "open" : "closed"}
      >
        <div 
          onClick={handleLogoClick} 
          className="flex items-center gap-2.5 mb-8 cursor-pointer p-2 rounded-lg hover:bg-slate-100 transition-colors"
          title="Go to Jade Home"
        >
          <Shield className="w-8 h-8 text-emerald-600" />
          <span className="font-semibold text-slate-800 text-xl">Jade Security</span>
        </div>

        <nav className="flex-grow space-y-2">
          {currentNavItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={navLinkClasses(item)}
              title={item.label}
            >
              {item.icon && <item.icon className={`w-5 h-5 group-hover:scale-110 transition-transform ${activeSection === item.id || (item.isPageLink && item.isActive) ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-500'}`} />}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-400 text-center">&copy; 2024 Jade Security</p>
        </div>
      </motion.aside>
    </>
  );
}