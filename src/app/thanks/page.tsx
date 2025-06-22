"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
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

        {/* Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white w-full max-w-md mx-auto p-8 pt-6 rounded-2xl shadow-xl text-center"
        >
          <CheckCircle className="mx-auto mb-4 text-green-500 w-12 h-12" />
          <h2 className="text-2xl font-bold text-[#194E6B] mb-3">
            Thank You for Your Donation!
          </h2>
          <p className="text-[#374151] mb-6 text-sm leading-relaxed">
            Your generosity makes a real impact. We&apos;re grateful for your support
            in helping us reach more lives and create lasting change.
          </p>

          <Link
            href="/"
            className="inline-block mt-4 bg-[#3C8A4E] hover:bg-[#2e6b39] text-white py-3 px-6 rounded-full font-medium transition"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
