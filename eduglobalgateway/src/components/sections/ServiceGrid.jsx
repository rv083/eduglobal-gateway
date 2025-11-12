// src/components/sections/ServicesGrid.jsx
import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Plane,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Award,
  Users,
} from "lucide-react"; // optional icon set; install with: npm install lucide-react

export default function ServicesGrid() {
  const services = [
    { name: "Career Counselling", icon: <Briefcase size={32} className="text-blue-600" /> },
    { name: "University Shortlisting", icon: <GraduationCap size={32} className="text-blue-600" /> },
    { name: "Application Assistance", icon: <ClipboardCheck size={32} className="text-blue-600" /> },
    { name: "Document Prep", icon: <FileText size={32} className="text-blue-600" /> },
    { name: "Visa Guidance", icon: <Plane size={32} className="text-blue-600" /> },
    { name: "Test Preparation", icon: <BookOpen size={32} className="text-blue-600" /> },
    { name: "Scholarship Help", icon: <Award size={32} className="text-blue-600" /> },
    { name: "Pre-departure Briefing", icon: <Users size={32} className="text-blue-600" /> },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-blue-800"
        >
          Our Core Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 mt-3 mb-12 max-w-2xl mx-auto text-base"
        >
          We offer comprehensive guidance to make your study abroad journey smooth and successful — from applications to your first day overseas.
        </motion.p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-blue-100 p-6 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h5 className="font-semibold text-blue-800 text-lg">{service.name}</h5>
              <p className="text-sm text-slate-500 mt-2">
                Expert assistance tailored to your academic goals and international ambitions.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Floating Elements */}
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
