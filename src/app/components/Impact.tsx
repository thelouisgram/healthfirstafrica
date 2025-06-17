"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

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

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impactStats.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [impactStats.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev + 1) % impactStats.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prev) => (prev - 1 + impactStats.length) % impactStats.length
      ),
    trackMouse: true,
  });

  return (
    <motion.section
      id="impact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16 font-Inter"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#194E6B] mb-4">Our Impact</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Measurable change, real lives transformed. Here&apos;s how we&apos;re making a
          difference.
        </p>
      </div>

      {/* Mobile View (Auto, Swipeable, No Arrows) */}
      <div className="md:hidden">
        <div
          {...swipeHandlers}
          className="relative overflow-hidden h-60 touch-pan-x"
        >
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

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {impactStats.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? "bg-[#3C8A4E]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Desktop View (Each card animates individually) */}
      <div className="hidden md:grid gap-10 md:grid-cols-2 mt-10">
        {impactStats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
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
    </motion.section>
  );
}
