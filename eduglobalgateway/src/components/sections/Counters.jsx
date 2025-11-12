// src/components/sections/Counters.jsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Counters() {
  const counters = [
    { num: "200+", label: "Universities" },
    { num: "1500+", label: "Students Guided" },
    { num: "98%", label: "Visa Success Rate" },
    { num: "25+", label: "Partner Countries" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-10"
        >
          <Typewriter
            words={[
              "Our Numbers Speak for Themselves",
              "Your Success is Our Achievement",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </motion.h2>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2"
              >
                {item.num}
              </motion.div>
              <div className="text-slate-600 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
