// src/app/gallery/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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
  { type: "video", src: "/assets/vid (1).mp4" },
  { type: "video", src: "/assets/vid (2).mp4" },
];

export default function GalleryPage() {
  const photos = galleryItems.filter((item) => item.type === "image");
  const videos = galleryItems.filter((item) => item.type === "video");

  return (
    <div className="bg-[#F9F5EF] font-Inter">
      <Navbar />

      <main className="min-h-screen px-4 py-24 md:px-8 lg:px-16 bg-white">
        {/* Back to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block text-[#3C8A4E] font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#194E6B] mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A collection of moments from our health outreaches, community
            drives, and impactful programs.
          </p>
        </div>

        {/* Photos Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#3C8A4E] mb-6">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((item, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow"
              >
                <Image
                  src={item.src}
                  alt={`Photo ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#3C8A4E] mb-6">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((item, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow"
              >
                <video
                  src={item.src}
                  controls
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}