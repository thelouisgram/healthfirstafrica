"use client";

import { JSX, useRef, useState } from "react";
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
  Plus,
  Minus,
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

export default function WhatWeDo() {
  const categoryKeys = Object.keys(categories);
  const [expandedCategory, setExpandedCategory] = useState<string>(
    categoryKeys[0]
  );
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToWithOffset = (element: HTMLElement, offset = 120) => {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const toggleCategory = (key: string) => {
    const willOpen = expandedCategory !== key;
    setExpandedCategory((prev) => (prev === key ? "" : key));

    if (willOpen) {
      // Wait for the animation to complete visually before scrolling
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = sectionRefs.current[key];
          if (el) scrollToWithOffset(el, 80);
        }, 450); // Matches the motion.div transition duration
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] text-center mb-6">
          What We Do
        </h2>
        <p className="text-[#1F1F1F] text-lg text-center mb-12 max-w-3xl mx-auto">
          At Health First Africa, our mission is more than a statement — it’s a
          call to action. Every program, partnership, and outreach effort is
          rooted in our commitment to equity, empowerment, and lasting change.
        </p>

        <div className="space-y-6">
          {categoryKeys.map((key) => {
            const isOpen = expandedCategory === key;

            return (
              <div
                key={key}
                ref={(el) => {
                  sectionRefs.current[key] = el;
                }}
                className="bg-white border border-gray-200 rounded-2xl shadow transition-all duration-300"
              >
                <button
                  onClick={() => toggleCategory(key)}
                  className="w-full flex justify-between items-center px-6 py-4 font-semibold text-lg text-[#194E6B] transition rounded-t-2xl"
                >
                  <span>{key}</span>
                  <span className="transition duration-300">
                    {isOpen ? (
                      <Minus size={22} className="text-[#194E6B]" />
                    ) : (
                      <Plus size={22} className="text-[#194E6B]" />
                    )}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories[key].map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#F9FAFB] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="mb-3">{item.icon}</div>
                        <h3 className="text-md font-semibold text-[#194E6B] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#374151] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
