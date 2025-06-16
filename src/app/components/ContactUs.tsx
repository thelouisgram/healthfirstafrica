"use client";

import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16" id="contact">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.2, 0.8, 0.2, 1],
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          We’d love to hear from you. Whether it's questions, partnerships, or
          just saying hello—connect with us.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 text-left mb-10">
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
              <h4 className="font-semibold text-lg text-gray-800">WhatsApp</h4>
              <p className="text-gray-600">+234 906 078 9816</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Connect with us on social media
          </h4>
          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/company/health-first-africa-ltd-gte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition"
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/profile.php?id=61575137017478&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Facebook className="w-7 h-7" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/health_first_africa_ltd_gte/profilecard/?igsh=Y2J4MW00czk4MHg4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <Instagram className="w-7 h-7" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
