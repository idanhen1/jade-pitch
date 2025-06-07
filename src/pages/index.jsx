import Layout from "./Layout.jsx";

import Architecture from "./Architecture";

import Team from "./Team";

import Vision from "./Vision";

import Challenges from "./Challenges";

import UseCases from "./UseCases";

import Validation from "./Validation";

import Welcome from "./Welcome";

import HomePage from "./HomePage";

import Jade from "./Jade";

import Solution from "./Solution";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Architecture: Architecture,
    
    Team: Team,
    
    Vision: Vision,
    
    Challenges: Challenges,
    
    UseCases: UseCases,
    
    Validation: Validation,
    
    Welcome: Welcome,
    
    HomePage: HomePage,
    
    Jade: Jade,
    
    Solution: Solution,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Architecture />} />
                
                
                <Route path="/Architecture" element={<Architecture />} />
                
                <Route path="/Team" element={<Team />} />
                
                <Route path="/Vision" element={<Vision />} />
                
                <Route path="/Challenges" element={<Challenges />} />
                
                <Route path="/UseCases" element={<UseCases />} />
                
                <Route path="/Validation" element={<Validation />} />
                
                <Route path="/Welcome" element={<Welcome />} />
                
                <Route path="/HomePage" element={<HomePage />} />
                
                <Route path="/Jade" element={<Jade />} />
                
                <Route path="/Solution" element={<Solution />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}