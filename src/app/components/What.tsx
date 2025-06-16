"use client";

import { JSX, useState } from "react";
import {
  Stethoscope,
  ShieldCheck,
  Baby,
  Users,
  Coins,
  BookOpen,
  Building2,
  Handshake,
  Scale,
  BarChart4,
} from "lucide-react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

type CategoryItem = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

const categories: Record<string, CategoryItem[]> = {
  "Health Access": [
    {
      id: uuidv4(),
      icon: <Stethoscope className="w-7 h-7 text-[#3C8A4E]" />,
      title: "Expanding Access to Healthcare",
      description:
        "We provide people-centered health services, ensuring even the most remote communities are not left behind.",
    },
    {
      id: uuidv4(),
      icon: <ShieldCheck className="w-7 h-7 text-[#194E6B]" />,
      title: "Combating HIV/AIDS",
      description:
        "From testing to treatment and psychosocial support, we tackle HIV with compassion and science.",
    },
    {
      id: uuidv4(),
      icon: <Baby className="w-7 h-7 text-[#F59E0B]" />,
      title: "Promoting RMNCH",
      description:
        "We deliver essential care from reproductive health to newborn services—building stronger families.",
    },
  ],
  "Empowerment & Education": [
    {
      id: uuidv4(),
      icon: <Users className="w-7 h-7 text-[#C026D3]" />,
      title: "Empowering Youth",
      description:
        "We train and equip adolescents with life skills, leadership tools, and sexual health education.",
    },
    {
      id: uuidv4(),
      icon: <Coins className="w-7 h-7 text-[#15803D]" />,
      title: "Economic Resilience",
      description:
        "We enable women and youth to break cycles of poverty through vocational and income-generating programs.",
    },
    {
      id: uuidv4(),
      icon: <BookOpen className="w-7 h-7 text-[#1D4ED8]" />,
      title: "Advancing Health Education",
      description:
        "We run evidence-based campaigns that empower people to make informed, life-saving health choices.",
    },
  ],
  "Sustainability & Justice": [
    {
      id: uuidv4(),
      icon: <Building2 className="w-7 h-7 text-[#4B5563]" />,
      title: "Community-Driven Solutions",
      description:
        "Our programs are co-created with local communities for culturally relevant and sustainable impact.",
    },
    {
      id: uuidv4(),
      icon: <Handshake className="w-7 h-7 text-[#B45309]" />,
      title: "Strategic Partnerships",
      description:
        "We work with governments, NGOs, and donors to expand reach and create lasting health systems change.",
    },
    {
      id: uuidv4(),
      icon: <Scale className="w-7 h-7 text-[#BE123C]" />,
      title: "Tackling Health Inequities",
      description:
        "We fight social injustices in health by advocating for inclusion, access, and systemic reform.",
    },
    {
      id: uuidv4(),
      icon: <BarChart4 className="w-7 h-7 text-[#0E7490]" />,
      title: "Ensuring Long-Term Impact",
      description:
        "Our work is data-driven, adaptive, and accountable—ensuring lasting change where it's needed most.",
    },
  ],
};

const tabs = Object.keys(categories);

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-6">
          What We Do
        </h2>
        <p className="text-[#1F1F1F] text-lg mb-12 max-w-3xl mx-auto">
          At Health First Africa, our mission is more than a statement — it’s a
          call to action. Every program, partnership, and outreach effort is
          rooted in our commitment to equity, empowerment, and lasting change.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                tab === activeTab
                  ? "bg-[#194E6B] text-white ring-[#194E6B]"
                  : "bg-white text-[#194E6B] border border-[#194E6B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {categories[activeTab].map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition-all duration-300 text-left"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#194E6B] mb-2">
                {item.title}
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
