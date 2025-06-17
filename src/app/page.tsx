import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import Gallery from "./components/Gallery";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import WhatWeDo from "./components/What";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import CoreValues from "./components/CoreValues";
import Impact from "./components/Impact";
import { Heart } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-[#F9F5EF] font-Inter relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <Mission />
      <Vision />
      <CoreValues />
      <WhatWeDo />
      <Impact />
      <Gallery />
      <ContactUs />
      <Footer />

      {/* Sticky Donate Button */}
      <Link
        href="#donate" // Change this to your donation link or route
        className="fixed bottom-4 right-4 2xl:right-[15%] z-50 bg-[#E63946] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#d62839] transition-all"
      >
        <Heart className="w-4 h-4" fill="white" />
        <span className="font-semibold text-sm">Donate</span>
      </Link>
    </div>
  );
};

export default Home;
