import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import CoursesSection from "./components/CoursesSection";
import PricesSection from "./components/PricesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// import other sections as you create them

const App: React.FC = () => (
  <div className="bg-gray-50 min-h-screen">
    <HeroSection />
    <AboutUsSection />
    <CoursesSection />
    <PricesSection />
    <GallerySection />
    <ContactSection />
    <Footer />
    {/* Add CoursesSection, GallerySection, ContactSection, Footer here */}
  </div>
);

export default App;
