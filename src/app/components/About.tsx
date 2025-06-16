"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <Image
          src="/assets/logo.png"
          alt="Health First Africa Logo"
          className="w-64 h-64 object-contain"
          fill
        />
      </div>

      {/* Animated Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto text-center z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-6">
          About Us
        </h2>
        <p className="text-[#1F1F1F] text-lg leading-relaxed">
          <span className="font-semibold text-[#3C8A4E]">
            Health First Africa
          </span>{" "}
          is a non-profit organization dedicated to improving health outcomes
          and promoting equitable healthcare access for underserved populations.
          Our organization commits to ensuring transparency, accountability, and
          the highest standards of service delivery in all healthcare
          programming activities.
        </p>
      </motion.div>
    </section>
  );
}
