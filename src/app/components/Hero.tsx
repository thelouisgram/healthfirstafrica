"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen w-full overflow-hidden relative bg-black">
      {/* Background Image */}
      <Image
        src="/assets/img (4).jpg"
        alt="Health First Africa outreach"
        fill
        priority
        className="object-cover object-center z-0 absolute inset-0 brightness-25"
      />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Putting Health First — For Every Life, Every Community.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
          We are transforming lives across Nigeria by delivering accessible
          healthcare, supporting families, and creating lasting solutions for
          underserved communities.
        </p>
        <Link
          href="/gallery"
          className="mt-6 inline-block bg-[#3C8A4E] hover:bg-[#2e6b39] text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Explore Our Work
        </Link>
      </div>
    </section>
  );
}
