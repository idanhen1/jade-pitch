

import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  { name: "Title", title: "" },
  { name: "Team", title: "The Team" },
  { name: "Pain", title: "Human Errors Cost Millions" },
  { name: "RecentExamples", title: "Recent Examples" },
  { name: "MeetJade", title: "Meet Jade" },
  { name: "PAMEvolution", title: "PAM Evolution" },
  { name: "JadePlatform", title: "The Jade Platform" },
  { name: "UseCases", title: "Use Cases" },
  { name: "Validation", title: "Validation" },
  { name: "WhyNow", title: "Why Now" },
  { name: "Vision", title: "The Vision" },
  { name: "ThankYou", title: "Thank You" }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = currentPageName === 'Home';

  const currentSlideIndex = slides.findIndex(slide => 
    location.pathname === createPageUrl(slide.name)
  );

  const currentSlide = slides[currentSlideIndex];
  const prevSlide = slides[currentSlideIndex - 1];
  const nextSlide = slides[currentSlideIndex + 1];

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only handle keyboard navigation if we're on a slide page (not home)
      if (isHomePage || currentSlideIndex === -1) return;

      if (event.key === 'ArrowRight' && nextSlide) {
        navigate(createPageUrl(nextSlide.name));
      } else if (event.key === 'ArrowLeft' && prevSlide) {
        navigate(createPageUrl(prevSlide.name));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isHomePage, currentSlideIndex, nextSlide, prevSlide, navigate]);

  if (isHomePage) {
    return <>{children}</>;
  }
  
  return (
    <div className="h-screen w-screen flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900">Jade Security</h1>
              <p className="text-xs text-gray-500">{currentSlide ? currentSlide.title : 'Pitch Deck'}</p>
            </div>
          </div>
          
          {currentSlide && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {currentSlideIndex + 1} / {slides.length}
              </span>
              <div className="flex gap-2">
                {prevSlide && (
                  <Link to={createPageUrl(prevSlide.name)}>
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>
                  </Link>
                )}
                {nextSlide && (
                  <Link to={createPageUrl(nextSlide.name)}>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}

