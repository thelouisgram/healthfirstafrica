"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const galleryItems = [
  { type: "image", src: "/assets/img (1).jpg" },
  { type: "image", src: "/assets/img (2).jpg" },
  { type: "image", src: "/assets/img (3).jpg" },
  { type: "image", src: "/assets/img (4).jpg" },
  { type: "image", src: "/assets/img (5).jpg" },
  { type: "image", src: "/assets/img (6).jpg" },
  { type: "image", src: "/assets/img (7).jpg" },
  { type: "image", src: "/assets/img (8).jpg" },
  { type: "image", src: "/assets/img (9).jpg" },
  { type: "image", src: "/assets/img (10).jpg" },
  { type: "image", src: "/assets/img (12).jpg" },
  { type: "image", src: "/assets/img (13).jpg" },
  { type: "image", src: "/assets/img (14).jpg" },
  { type: "image", src: "/assets/img (15).jpg" },
  { type: "image", src: "/assets/img (16).jpg" },
  { type: "image", src: "/assets/img (17).jpg" },
  { type: "image", src: "/assets/img (18).jpg" },
  { type: "image", src: "/assets/img (19).jpg" },
  { type: "image", src: "/assets/img (20).jpg" },
  { type: "image", src: "/assets/img (21).jpg" },
  { type: "image", src: "/assets/img (22).jpg" },
  { type: "image", src: "/assets/img (23).jpg" },
  { type: "image", src: "/assets/img (24).jpg" },
  { type: "image", src: "/assets/img (25).jpg" },
  { type: "image", src: "/assets/img (26).jpg" },
  { type: "image", src: "/assets/img (27).jpg" },
  { type: "image", src: "/assets/img (28).jpg" },
  { type: "image", src: "/assets/img (29).jpg" },
  { type: "video", src: "/assets/vid (1).mp4" },
  { type: "video", src: "/assets/vid (2).mp4" },
  { type: "video", src: "/assets/vid (3).mp4" },
];

export default function GalleryPage() {
  const photos = galleryItems.filter((item) => item.type === "image");
  const videos = galleryItems.filter((item) => item.type === "video");

  return (
    <div className="bg-[#F9F5EF] font-Inter">
      <Navbar />

      <main className="min-h-screen px-4 py-24 md:px-8 lg:px-16 bg-white">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-block text-[#3C8A4E] font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#194E6B] mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A collection of moments from our health outreaches, community
            drives, and impactful programs.
          </p>
        </motion.div>

        {/* Photos Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#3C8A4E] mb-6">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {photos.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow"
              >
                <Image
                  src={item.src}
                  alt={`Photo ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Videos Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#3C8A4E] mb-6">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {videos.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative group w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <video
                  src={item.src}
                  controls
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-105 group-hover:brightness-95 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
