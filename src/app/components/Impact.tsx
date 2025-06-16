"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Impact() {
  const impactStats = [
    {
      title: "1,500+ Clients Reached in FCT",
      description:
        "Through community outreach, facility-based support, and targeted health interventions, we provided essential health education and services to over 1,500 individuals, improving access and outcomes.",
    },
    {
      title: "28 Healthcare Providers Trained",
      description:
        "We equipped over 28 healthcare professionals with skills in maternal, newborn, and child health, HIV prevention, and client-centered care — enhancing service quality.",
    },
    {
      title: "700+ Newborns & Children Monitored",
      description:
        "Regular follow-up, growth monitoring, and referrals helped ensure the wellbeing and survival of more than 700 children across our focus communities.",
    },
    {
      title: "73 Caregivers Empowered",
      description:
        "We trained 73 caregivers in nutrition, early childhood development, and disease prevention — helping them better support the children in their care.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % impactStats.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + impactStats.length) % impactStats.length
    );
  };

  return (
    <section
      className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16 font-Inter"
      id="impact"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#194E6B] mb-4">Our Impact</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Measurable change, real lives transformed. Here's how we're making a
          difference.
        </p>
      </div>

      {/* Mobile View (Single Modal with Pagination) */}
      <div className="md:hidden">
        <div className="relative overflow-hidden h-60">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full h-full bg-white p-6 rounded-xl shadow border-l-4 border-[#3C8A4E]"
            >
              <h3 className="text-xl font-semibold text-[#3C8A4E] mb-2">
                {impactStats[currentIndex].title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {impactStats[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center mt-6 gap-4">
          <button onClick={handlePrev}>
            <ChevronLeft className="w-6 h-6 text-[#194E6B]" />
          </button>
          <div className="flex gap-2">
            {impactStats.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === currentIndex ? "bg-[#3C8A4E]" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
          <button onClick={handleNext}>
            <ChevronRight className="w-6 h-6 text-[#194E6B]" />
          </button>
        </div>
      </div>

      {/* Desktop View (Two Cards Per Row) */}
      <div className="hidden md:grid gap-10 md:grid-cols-2 mt-10">
        {impactStats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow p-6 border-l-4 border-[#3C8A4E]"
          >
            <h3 className="text-xl font-semibold text-[#3C8A4E] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}