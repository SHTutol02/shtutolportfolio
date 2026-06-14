/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import individual project pages
import BrandIdentity from './pages/BrandIdentity';
import ERPDashboard from './pages/ERPDashboard';
import UIUXDesign from './pages/UIUXDesign';
import PhotoManipulation from './pages/PhotoManipulation';
import CorporatePresentation from './pages/CorporatePresentation';
import EventVideo from './pages/EventVideo';

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-sky-500/30">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/brand-identity" element={<BrandIdentity />} />
        <Route path="/project/erp-dashboard" element={<ERPDashboard />} />
        <Route path="/project/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/project/photo-manipulation" element={<PhotoManipulation />} />
        <Route path="/project/corporate-presentation" element={<CorporatePresentation />} />
        <Route path="/project/event-video" element={<EventVideo />} />
      </Routes>
    </div>
  );
}
