"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/assets/img (1).jpg",
  "/assets/img (2).jpg",
  "/assets/img (3).jpg",
  "/assets/img (4).jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full overflow-hidden relative bg-black">
      {/* Background Image */}
      <Image
        src={images[currentImageIndex]}
        alt="Health First Africa outreach"
        fill
        priority
        className="object-cover object-center z-0 absolute inset-0 brightness-25 transition-opacity duration-1000 ease-in-out"
      />

      {/* Image Counter */}
      <div className="absolute top-4 right-6 bg-black/50 text-white px-4 py-1 rounded-full z-30 text-sm font-medium backdrop-blur-sm">
        {currentImageIndex + 1} / {images.length}
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Health First. Hope Always.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-white/90"
        >
          Every mother. Every child. Every community. We’re bridging the gap in
          healthcare access with compassion, data, and local partnerships across
          Nigeria.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/donate"
            className="inline-block bg-[#E63946] hover:bg-[#d32f2f] text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Donate Now
          </Link>
          <Link
            href="/gallery"
            className="inline-block border border-white text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-[#194E6B] transition"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}