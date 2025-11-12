// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import heroImg from "../../assets/hero-illustration.svg"; 

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
            Study Abroad Made Simple —
            <br />
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Personalised Guidance, Real Results
            </span>
          </h1>
          <p className="text-slate-600 mt-5 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Get expert counselling, visa guidance, and university admission support — 
            all under one roof. Your dream education journey starts here.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Get Free Counselling
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-lg border border-blue-300 text-blue-700 font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={heroImg}
            alt="Study Abroad Illustration"
            className="w-[90%] max-w-md lg:max-w-lg drop-shadow-md"
          />
        </motion.div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
    </section>
  );
}
