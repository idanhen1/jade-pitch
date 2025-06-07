
import React from 'react';
import TopNavbar from './components/layout/TopNavbar'; 

export default function Layout({ children, currentPageName }) {
  return (
    <div className="h-screen flex flex-col bg-slate-100 font-inter antialiased">
      <TopNavbar currentPageName={currentPageName} />
      <main 
        id="main-content" 
        className="flex-1 overflow-y-auto" // This is the main scroller
        style={{ 
          scrollPaddingTop: '60px', 
          height: 'calc(100vh - 60px)', 
          scrollSnapType: currentPageName === 'HomePage' ? 'y mandatory' : 'none'
        }}
      >
        {children}
      </main>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          height: 100%; 
          width: 100%;
          overflow: hidden; /* Prevent body scroll, main handles it */
        }

        .scroll-section {
          height: calc(100vh - 60px); 
          min-height: calc(100vh - 60px);
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-left: 20px; 
          padding-right: 20px;
          padding-bottom: 20px;
          padding-top: 20px; 
          overflow: hidden; 
        }

        /* Scrollbar Styles */
        #main-content::-webkit-scrollbar {
          width: 8px;
        }
        
        #main-content::-webkit-scrollbar-track {
          background: transparent; /* Track is transparent by default */
        }
        
        #main-content::-webkit-scrollbar-thumb {
          background: transparent; /* Scrollbar thumb is transparent by default */
          border-radius: 4px;
        }

        /* Show scrollbar track and thumb when hovering over the main content area */
        #main-content:hover::-webkit-scrollbar-track {
          background: #e2e8f0; /* Visible track color on hover */
        }
        #main-content:hover::-webkit-scrollbar-thumb {
          background: #94a3b8; /* Visible thumb color on hover */
        }
        
        /* Optional: Darken thumb when hovering directly over the thumb itself */
        #main-content::-webkit-scrollbar-thumb:hover {
          background: #64748b; 
        }
      `}</style>
    </div>
  );
}
