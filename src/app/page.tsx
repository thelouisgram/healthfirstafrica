"use client";

import React, { useEffect, useState } from "react";
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
import VolunteerWithUs from "./components/Volunteer";
import { ArrowUp, Heart } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F9F5EF] font-Inter relative overflow-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Mission />
      <Vision />
      <CoreValues />
      <WhatWeDo />
      <Impact />
      <Gallery />
      <VolunteerWithUs />
      <ContactUs />
      <Footer />

      {/* Scroll to Top Button - bottom right */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-[#194E6B] text-white shadow-lg transition-opacity duration-300 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Donate Button - bottom left */}
      <Link
        href="/donate"
        className={`fixed bottom-4 left-4 z-50 bg-[#E63946] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 
        hover:bg-[#d62839] transition-all duration-300 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Heart className="w-4 h-4" fill="white" />
        <span className="font-semibold text-sm">Donate</span>
      </Link>
    </div>
  );
};

export default Home;