"use client";
import { motion } from "motion/react";

export default function Vision() {
  return (
    <section className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-6">
          Our Vision
        </h2>
        <p className="text-[#1F1F1F] text-lg leading-relaxed">
          To foster healthy and socially empowered communities through access to
          quality health and social services for structurally underserved
          populations.
        </p>
      </motion.div>
    </section>
  );
}
