/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ProblemSection from "./components/ProblemSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TechLabShowcase from "./components/TechLabShowcase";
import SeoAeoSection from "./components/SeoAeoSection";
import HowItWorks from "./components/HowItWorks";
import WhyIds from "./components/WhyIds";
import UaeSpotlight from "./components/UaeSpotlight";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-ids-black overflow-x-hidden antialiased">
      {/* Absolute Ambient elements on overall body layer aligned with standard brand palette */}
      <div className="absolute top-0 inset-x-0 h-[1000px] bg-gradient-to-b from-ids-purple/10 via-transparent to-transparent pointer-events-none z-0" />
      
      {/* Fixed Layout Modules */}
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        {/* Core Sections conforming to original specifications */}
        <Hero />
        <TrustBar />
        <ProblemSection />
        <AboutSection />
        <ServicesSection />
        <TechLabShowcase />
        <SeoAeoSection />
        <HowItWorks />
        <WhyIds />
        <UaeSpotlight />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating Utilities */}
      <ChatbotWidget />
      <ScrollToTop />
    </div>
  );
}

