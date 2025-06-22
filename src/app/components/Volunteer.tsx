"use client";

import { motion } from "framer-motion";

export default function VolunteerWithUs() {
  return (
    <section className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-6">
          Volunteer With Us
        </h2>
        <p className="text-[#1F1F1F] text-lg leading-relaxed">
          Join our mission to create healthier communities! As a volunteer, you’ll play a vital role in supporting our programs, from health education and outreach to community mobilization and empowerment.
        </p>
        <p className="text-[#1F1F1F] text-lg leading-relaxed mt-4">
          Whether you have a few hours a week or want to contribute your skills on a project basis, your time and passion can make a real difference. Together, we can build a stronger, healthier future for all.
        </p>
      </motion.div>
    </section>
  );
}
