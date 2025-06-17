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
        <motion.h2
          variants={childVariants}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Contact Us
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
        >
          We’d love to hear from you. Whether it&apos;s questions, partnerships,
          or just saying hello—connect with us.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="grid sm:grid-cols-2 gap-10 text-left mb-10"
        >
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
        </motion.div>

        <motion.div variants={childVariants} className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Connect with us on social media
          </h4>
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
      </motion.div>
    </section>
  );
}
