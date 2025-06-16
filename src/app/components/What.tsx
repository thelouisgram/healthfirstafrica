"use client";

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

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-[#3C8A4E]" />,
    title: "Expanding Access to Healthcare",
    description:
      "We provide people-centered health services, ensuring even the most remote communities are not left behind.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#194E6B]" />,
    title: "Combating HIV/AIDS",
    description:
      "From testing to treatment and psychosocial support, we tackle HIV with compassion and science.",
  },
  {
    icon: <Baby className="w-8 h-8 text-[#F59E0B]" />,
    title: "Promoting RMNCH",
    description:
      "We deliver essential care from reproductive health to newborn services—building stronger families.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#C026D3]" />,
    title: "Empowering Youth",
    description:
      "We train and equip adolescents with life skills, leadership tools, and sexual health education.",
  },
  {
    icon: <Coins className="w-8 h-8 text-[#15803D]" />,
    title: "Economic Resilience",
    description:
      "We enable women and youth to break cycles of poverty through vocational and income-generating programs.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#1D4ED8]" />,
    title: "Advancing Health Education",
    description:
      "We run evidence-based campaigns that empower people to make informed, life-saving health choices.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#4B5563]" />,
    title: "Community-Driven Solutions",
    description:
      "Our programs are co-created with local communities for culturally relevant and sustainable impact.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-[#B45309]" />,
    title: "Strategic Partnerships",
    description:
      "We work with governments, NGOs, and donors to expand reach and create lasting health systems change.",
  },
  {
    icon: <Scale className="w-8 h-8 text-[#BE123C]" />,
    title: "Tackling Health Inequities",
    description:
      "We fight social injustices in health by advocating for inclusion, access, and systemic reform.",
  },
  {
    icon: <BarChart4 className="w-8 h-8 text-[#0E7490]" />,
    title: "Ensuring Long-Term Impact",
    description:
      "Our work is data-driven, adaptive, and accountable—ensuring lasting change where it's needed most.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-6">
          What We Do
        </h2>
        <p className="text-[#1F1F1F] text-lg mb-12 max-w-3xl mx-auto">
          At Health First Africa, our mission is more than a statement — it’s a
          call to action. Every program, partnership, and outreach effort is
          rooted in our commitment to equity, empowerment, and lasting change.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow transition duration-300 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#194E6B] mb-2">
                {service.title}
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
