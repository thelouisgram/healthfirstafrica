"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide-react icons

const navLinks = [
  { name: "Home", href: "/" }, // Keep this as-is
  { name: "About", href: "/#about" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
  { name: "Donate", href: "/donate" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F9F5EF] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo-plain.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold text-[#194E6B]">
              Health First Africa
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#194E6B] hover:text-[#3C8A4E] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#194E6B] focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F5EF] px-4 pt-4 pb-6 space-y-3 shadow">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-[#194E6B] hover:text-[#3C8A4E] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}