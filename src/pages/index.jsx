import Layout from "./Layout.jsx";

import Home from "./Home";

import Title from "./Title";

import Team from "./Team";

import Vision from "./Vision";

import Pain from "./Pain";

import RecentExamples from "./RecentExamples";

import MeetJade from "./MeetJade";

import PAMEvolution from "./PAMEvolution";

import JadePlatform from "./JadePlatform";

import WhyNow from "./WhyNow";

import UseCases from "./UseCases";

import Validation from "./Validation";

import ThankYou from "./ThankYou";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Title: Title,
    
    Team: Team,
    
    Vision: Vision,
    
    Pain: Pain,
    
    RecentExamples: RecentExamples,
    
    MeetJade: MeetJade,
    
    PAMEvolution: PAMEvolution,
    
    JadePlatform: JadePlatform,
    
    WhyNow: WhyNow,
    
    UseCases: UseCases,
    
    Validation: Validation,
    
    ThankYou: ThankYou,
    
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
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Title" element={<Title />} />
                
                <Route path="/Team" element={<Team />} />
                
                <Route path="/Vision" element={<Vision />} />
                
                <Route path="/Pain" element={<Pain />} />
                
                <Route path="/RecentExamples" element={<RecentExamples />} />
                
                <Route path="/MeetJade" element={<MeetJade />} />
                
                <Route path="/PAMEvolution" element={<PAMEvolution />} />
                
                <Route path="/JadePlatform" element={<JadePlatform />} />
                
                <Route path="/WhyNow" element={<WhyNow />} />
                
                <Route path="/UseCases" element={<UseCases />} />
                
                <Route path="/Validation" element={<Validation />} />
                
                <Route path="/ThankYou" element={<ThankYou />} />
                
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