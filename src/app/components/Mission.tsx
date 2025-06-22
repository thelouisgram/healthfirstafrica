"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Mission() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-6">
          Our Mission
        </h2>
        <p className="text-[#1F1F1F] text-lg leading-relaxed">
          <span className="font-semibold text-[#3C8A4E]">
            Health First Africa
          </span>{" "}
          is dedicated to improving the quality of life for vulnerable and
          underserved populations in Nigeria through the delivery of inclusive,
          high-impact health and social interventions. We focus on combating
          HIV/AIDS, enhancing Reproductive, Maternal, Newborn, and Child Health
          (RMNCH), and promoting youth empowerment and economic resilience as
          pillars of lasting community transformation.
        </p>

        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            className="mt-4 inline-flex items-center cursor-pointer text-[#6498b6] font-semibold"
          >
            Read more <ChevronDown className="ml-2 w-5 h-5" />
          </button>
        ) : (
          <>
            <p className="text-[#1F1F1F] text-lg leading-relaxed mt-6">
              Our mission is driven by a commitment to expanding access to
              comprehensive, people-centered healthcare services, advancing
              health education, and addressing health disparities through
              community-based and culturally relevant approaches. We empower
              individuals—especially women, adolescents, and young people—with
              the tools, knowledge, and opportunities to lead healthy and
              productive lives.
            </p>

            <p className="text-[#1F1F1F] text-lg leading-relaxed mt-6">
              Through strategic partnerships, evidence-informed programming, and
              capacity building, we work to strengthen health systems, reduce
              stigma, and foster economic independence among vulnerable groups.
              At the core of our mission is the belief that sustainable
              development begins with health equity, empowerment, and dignity
              for all.
            </p>

            <button
              onClick={() => setExpanded(false)}
              className="mt-4 inline-flex items-center cursor-pointer text-[#6498b6] font-semibold"
            >
              Show less <ChevronUp className="ml-2 w-5 h-5" />
            </button>
          </>
        )}
      </motion.div>
    </section>
  );
}