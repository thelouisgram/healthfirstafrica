"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <section className="bg-[#F9F5EF] min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
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

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center mb-10">
          <Image
            src="/logo.png"
            alt="NGO Logo"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </Link>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-4 text-center">
            Donations Page Coming Soon
          </h2>
          <p className="text-lg text-[#374151] text-center max-w-xl mx-auto">
            We’re working hard to enable donations on our platform. Please check
            back shortly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
