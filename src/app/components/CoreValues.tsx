"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoreValues() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Only one open at a time

  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const values = [
    {
      title: "Equity",
      content:
        "We believe that everyone, regardless of background, status, or circumstance, deserves equal access to quality healthcare and opportunities. Our programs are designed to remove barriers and promote fairness in every community we serve.",
    },
    {
      title: "Dignity",
      content:
        "We treat every individual with respect, compassion, and empathy. Upholding human dignity is at the heart of our work, ensuring that clients, staff, and partners are valued and heard.",
    },
    {
      title: "Partnerships",
      content:
        "We thrive on collaboration. By building strong partnerships with communities, governments, and organizations, we amplify impact and co-create sustainable solutions for health and development.",
    },
    {
      title: "Accountability",
      content:
        "We are committed to transparency, integrity, and excellence. We take responsibility for our actions and continuously measure our performance to ensure we deliver on our promises.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-6">
          Our Core Values
        </h2>
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          At the heart of Health First Africa are values that guide everything
          we do—from strategic planning to the smallest acts of service.
        </p>

        <div className="space-y-4 text-left">
          {values.map((value, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#3C8A4E]">
                    {value.title}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#3C8A4E]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white px-5 pb-5"
                    >
                      <p className="text-gray-700 text-base leading-relaxed mt-2">
                        {value.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
