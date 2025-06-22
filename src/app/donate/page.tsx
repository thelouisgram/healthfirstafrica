"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Donate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (!name || !email || !numericAmount ) {
      alert("Please enter a valid name, email, and amount.");
      return;
    }

    // Redirect with query params
    router.push(
      `/payment?name=${encodeURIComponent(name)}&email=${encodeURIComponent(
        email
      )}&amount=${encodeURIComponent(amount)}`
    );
  };

  return (
    <section className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-block text-[#3C8A4E] font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center mb-10">
          <Image
            src="/logo.png"
            alt="NGO Logo"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#194E6B] mb-4 text-center">
            Support Our Mission
          </h2>
          <p className="text-lg text-[#374151] mb-10 text-center max-w-xl mx-auto">
            Your donation helps us reach underserved communities with
            life-changing programs in health and empowerment.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 space-y-6 max-w-md mx-auto text-left"
          >
            <div>
              <label className="block text-[#194E6B] font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#194E6B]"
                required
              />
            </div>

            <div>
              <label className="block text-[#194E6B] font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#194E6B]"
                required
              />
            </div>

            <div>
              <label className="block text-[#194E6B] font-medium mb-2">
                Amount (₦)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#194E6B]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#194E6B] hover:bg-[#12394E] cursor-pointer text-white w-full py-3 text-lg font-semibold rounded-lg transition duration-300"
            >
              Proceed to Payment
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}