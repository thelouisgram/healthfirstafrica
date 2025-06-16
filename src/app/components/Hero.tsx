"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7500); // Change every 7.5 seconds

    return () => clearInterval(interval); // Clean up
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

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Putting Health First — For Every Life, Every Community.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-white/90"
        >
          We are transforming lives across Nigeria by delivering accessible
          healthcare, supporting families, and creating lasting solutions for
          underserved communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          <Link
            href="/gallery"
            className="mt-6 inline-block bg-[#3C8A4E] hover:bg-[#2e6b39] text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
