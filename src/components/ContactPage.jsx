import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCopy, FaTimes } from "react-icons/fa";

const ContactPage = () => {
  const [popup, setPopup] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center justify-center py-16 px-4"
    >
      {/* Outer Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left — Animated Medical Info & Icons */}
        <div className="flex-1 flex flex-col items-center text-center">
          {/* Medical Cross Animation */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="relative w-20 h-20 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg mb-6"
          >
            <div className="absolute w-8 h-3 bg-white rounded"></div>
            <div className="absolute w-3 h-8 bg-white rounded"></div>
          </motion.div>

          <h2 className="text-3xl font-bold text-green-900 mb-10">
            Mahesh Medical
          </h2>

          {/* ICONS SECTION */}
          <div className="flex justify-center gap-10 text-3xl text-green-700 mb-6">
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => setPopup("address")}
              className="hover:text-blue-600"
            >
              <FaMapMarkerAlt />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => setPopup("phone")}
              className="hover:text-blue-600"
            >
              <FaPhone />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => setPopup("email")}
              className="hover:text-blue-600"
            >
              <FaEnvelope />
            </motion.button>
          </div>

          <p className="text-gray-600 text-sm">
            Tap an icon to connect with us instantly 📞📍📧
          </p>
        </div>

        {/* Right — Feedback Form */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 w-full">
          <h3 className="text-2xl font-semibold text-teal-600 mb-6 text-center">
            Send Feedback
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <textarea
              placeholder="Your Feedback"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>

      {/* Popup Section */}
      {popup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl p-6 w-80 text-center relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setPopup(null)}
            >
              <FaTimes />
            </button>

            {popup === "address" && (
              <>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Our Location
                </h3>
                <p className="text-gray-600 mb-3">
                  Vellappalam Main Road, Nagapattinam
                </p>
                <a
                  href="https://www.google.com/maps?q=Vellappalam+Main+Road,Nagapattinam+611112"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Open in Google Maps
                </a>
              </>
            )}

            {popup === "phone" && (
              <>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-3">+91 9876543210</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="tel:+919876543210"
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Call
                  </a>
                  <button
                    onClick={() => handleCopy("+91 9876543210")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <FaCopy /> {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </>
            )}

            {popup === "email" && (
              <>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Mail Us
                </h3>
                <p className="text-gray-600 mb-3">
                  maheshmedical@example.com
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href="mailto:maheshmedical@example.com"
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Send Mail
                  </a>
                  <button
                    onClick={() =>
                      handleCopy("maheshmedical@example.com")
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <FaCopy /> {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ContactPage;
