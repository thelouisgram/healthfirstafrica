import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/About'
import Gallery from './components/Gallery'
import Mission from './components/Mission'
import Vision from './components/Vision'
import WhatWeDo from "./components/What";
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import CoreValues from './components/CoreValues'
import Impact from "./components/Impact";

const Home = () => {
  return (
    <div className="bg-[#F9F5EF] font-Inter">
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
    </div>
  );
}

export default Home
