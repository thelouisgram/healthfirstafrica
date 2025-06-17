"use client";

import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, Variants, Transition } from "framer-motion";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.2,
      delayChildren: 0.2,
    } as Transition,
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    } as Transition,
  },
};

export default function ContactUs() {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16" id="contact">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Main Heading */}
        <motion.h2
          variants={childVariants}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Contact Us
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          variants={childVariants}
          className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
        >
          We’d love to hear from you. Whether it&apos;s questions, partnerships,
          or just saying hello—connect with us.
        </motion.p>

        {/* Contact Info Section */}
        <motion.div variants={childVariants} className="text-left mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Contact Information
          </h3>

          <div className="grid sm:grid-cols-2 gap-10">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                <p className="text-gray-600 break-all">
                  Health1stAfrica@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  WhatsApp
                </h4>
                <p className="text-gray-600">+234 906 078 9816</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={childVariants} className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Connect with Us Online
          </h3>
          <div className="flex justify-center gap-6">
            {[
              {
                href: "https://www.linkedin.com/company/health-first-africa-ltd-gte/",
                icon: <Linkedin className="w-7 h-7" />,
                className: "text-blue-700 hover:text-blue-900",
              },
              {
                href: "https://www.facebook.com/profile.php?id=61575137017478&mibextid=LQQJ4d",
                icon: <Facebook className="w-7 h-7" />,
                className: "text-blue-600 hover:text-blue-800",
              },
              {
                href: "https://www.instagram.com/health_first_africa_ltd_gte/profilecard/?igsh=Y2J4MW00czk4MHg4",
                icon: <Instagram className="w-7 h-7" />,
                className: "text-pink-500 hover:text-pink-700",
              },
            ].map(({ href, icon, className }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} transition`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Where We Work Section */}
        <motion.div
          variants={childVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Where We Work
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Our office is based in Nigeria&apos;s capital, serving as a regional hub
            for health and social impact.
          </p>
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Abuja Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126822.79671517841!2d7.349996687401709!3d9.057850219752678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b51f1708a8f%3A0xdd24bc3a0baff378!2sAbuja!5e0!3m2!1sen!2sng!4v1718603096321!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-gray-600">
            Wing C, House 6, Gold City Estate 2, Airport Road, FCT-Abuja
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}