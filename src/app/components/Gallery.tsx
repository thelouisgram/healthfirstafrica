"use client";

import Image from "next/image";
import Link from "next/link";

const featuredImages = [
  "/assets/img (1).jpg",
  "/assets/img (2).jpg",
  "/assets/img (3).jpg",
  
];

export default function Gallery() {
  return (
    <section id='gallery' className="py-20 bg-white px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Gallery
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Glimpses of our impact — from community outreaches to health campaigns
          and service-driven engagements across underserved communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {featuredImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Featured gallery image ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        <Link
          href="/gallery"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}
