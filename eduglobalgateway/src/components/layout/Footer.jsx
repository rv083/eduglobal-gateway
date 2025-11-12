// src/components/layout/Footer.jsx
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react"; // npm install lucide-react

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-white to-blue-50 pt-20 pb-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 text-center mt-3 mb-10"
        >
          Have questions or need guidance? We’d love to help you begin your study abroad journey.
        </motion.p>

        {/* Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md border border-blue-100"
          >
            <h4 className="text-xl font-bold text-blue-800 mb-4">Contact Information</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              You can reach out to us through the following professional channels.
              Our team typically responds within 24 hours.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600 w-5 h-5" />
                <span className="text-slate-700 font-medium">+91 9999999999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 w-5 h-5" />
                <a
                  href="mailto:hello@eduglobalgateway.com"
                  className="text-blue-700 hover:underline font-medium"
                >
                  hello@eduglobalgateway.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-blue-600 w-5 h-5" />
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="text-blue-600 w-5 h-5" />
                <a
                  href="https://www.linkedin.com/company/eduglobalgateway/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>

            <p className="text-slate-500 mt-6 text-sm">
              Address: Lucknow, Uttar Pradesh, India
            </p>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            // Later you'll replace this action with your Formspree link
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent (placeholder — integrate Formspree later)");
            }}
            className="bg-white p-8 rounded-2xl shadow-md border border-blue-100"
          >
            <h4 className="text-xl font-bold text-blue-800 mb-4">Send us a Message</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition"
              />
              <input
                name="contact"
                type="text"
                placeholder="Email or Phone"
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-md mt-4 focus:ring-2 focus:ring-blue-300 outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="mt-6 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-slate-500 mt-12 border-t pt-6 text-sm">
          © {new Date().getFullYear()} EduGlobalGateway — All rights reserved.
        </div>
      </div>

      {/* Decorative Floating Blobs */}
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
    </footer>
  );
}
