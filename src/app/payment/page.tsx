"use client";

import { useState } from "react";
import { CheckCircle, Copy, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const bankDetails = [
  { label: "Account Name", value: "KALU SAMUEL UKO" },
  { label: "Bank Name", value: "Moniepoint MFB" },
  { label: "Account Number", value: "6109468779" },
];

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState("");
  const router = useRouter();

  const handleCopy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(""), 2000);
  };

  return (
    <section className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16 min-h-screen relative">
      <div className="max-w-3xl mx-auto relative">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/donate"
            className="inline-block text-[#3C8A4E] font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1 inline" />
            Go Back
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

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white w-full max-w-md mx-auto p-8 pt-6 rounded-2xl shadow-xl text-center"
        >
          <h2 className="text-2xl font-bold text-[#194E6B] mb-2">
            Donate via Bank Transfer
          </h2>
          <p className="text-[#374151] mb-6 text-sm leading-relaxed">
            Use the details below to make a direct bank donation. Tap to copy.
          </p>

          <div className="space-y-4 text-left">
            {bankDetails.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-600">{label}</p>
                  <p className="text-lg font-semibold text-gray-800">{value}</p>
                </div>
                <button
                  onClick={() => handleCopy(value, label)}
                  aria-label={`Copy ${label}`}
                  className="text-gray-500 hover:text-[#194E6B] transition"
                >
                  {copiedField === label ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push("/thanks")}
            className="mt-8 w-full bg-[#3C8A4E] cursor-pointer hover:bg-[#2e6b39] text-white py-3 rounded-full font-medium transition"
          >
            Done
          </button>
        </motion.div>
      </div>
    </section>
  );
}