"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo-plain.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold text-[#ffffff]">
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
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">Email: Health1stAfrica@gmail.com</p>
          <p className="text-gray-400">Phone: +234 906 078 9816</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Health First Africa. All rights reserved.
      </div>
    </footer>
  );
}
