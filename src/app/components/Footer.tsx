"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo-plain.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold text-white">
              Health First Africa
            </span>
          </Link>
          <p className="text-gray-400 mt-3">
            Empowering lives through education, healthcare, and sustainable
            community development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-white transition">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">Email: Info@health1stafrica.org</p>
          <p className="text-gray-400">Phone: +234 906 078 9816</p>
          <p className="text-gray-400 mb-4">
            Address: Wing C, House 6, Gold City Estate 2, Airport Road,
            FCT-Abuja, Nigeria.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/health-first-africa-ltd-gte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575137017478&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/health_first_africa_ltd_gte/profilecard/?igsh=Y2J4MW00czk4MHg4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Health First Africa. All rights reserved.
      </div>
    </motion.footer>
  );
}