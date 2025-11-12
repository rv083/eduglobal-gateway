// src/components/sections/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // npm install lucide-react

export default function FAQ() {
  const faqs = [
    {
      q: "How long does admission take?",
      a: "Admissions depend on the university but generally take 4–8 weeks.",
    },
    {
      q: "What about scholarships?",
      a: "We guide you through applying for both university and government scholarships based on your profile and eligibility.",
    },
    {
      q: "Do you help with accommodation?",
      a: "Yes! We assist in connecting you with verified student housing services to make your transition smoother.",
    },
    {
      q: "Is there any counselling fee?",
      a: "Our initial counselling session is completely free. We provide honest guidance to help you choose the right path.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 mt-3 mb-10 text-center"
        >
          Here are answers to some common queries from our students.
        </motion.p>

        {/* FAQ List */}
        <div className="bg-white shadow-md rounded-2xl border border-blue-100 divide-y divide-blue-50">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-5 cursor-pointer select-none hover:bg-blue-50 transition-all duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h5 className="font-semibold text-blue-800 text-base md:text-lg">
                  {faq.q}
                </h5>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-600 w-5 h-5" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <motion.div
        className="absolute -top-10 -left-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </section>
  );
}
