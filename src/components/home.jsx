import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import doctor from "../assest/doctor.jpg";

const Home = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a file first!");

    setSending(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_name", "Mahesh Medical Customer");
    formData.append("message", "Prescription upload from user");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            setShowUpload(false);
            setFile(null);
            setFileName("");
          }, 2500);
        },
        (error) => {
          console.error(error);
          setSending(false);
          alert("Failed to send! Try again later.");
        }
      );
  };

  return (
    <section
      id="home"
      className="flex flex-wrap justify-around items-center px-10 py-16 bg-gray-50"
    >
      <div className="max-w-xl space-y-5 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-snug">
          <span className="text-green-600">Your Health,</span>
          <br /> Our Priority
        </h1>
        <p className="text-gray-700 text-lg">
          Everything you need for a healthy life in one place.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowUpload(true)}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition mx-auto md:mx-0"
        >
          <FaUpload className="text-white" /> Upload Description
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-md mt-10 md:mt-0"
      >
        <img src={doctor} alt="Doctors" className="rounded-lg shadow-lg" />
      </motion.div>

      <AnimatePresence>
        {showUpload && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.form
              onSubmit={sendEmail}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 w-80 shadow-xl text-center relative"
            >
              <button
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setShowUpload(false)}
                type="button"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Upload Your Prescription
              </h3>

              <label className="block border-2 border-dashed border-green-400 p-6 rounded-lg cursor-pointer hover:bg-green-50 transition">
                <FaUpload className="text-green-600 text-3xl mx-auto mb-2" />
                <span className="text-gray-700">
                  {fileName ? fileName : "Click to choose a file"}
                </span>
                <input
                  type="file"
                  name="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {fileName && (
                <p className="mt-3 text-green-600 font-medium">
                  File Ready to Send ✅
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                disabled={sending}
                className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full"
              >
                {sending ? "Sending..." : success ? "Sent ✅" : "Submit"}
              </motion.button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
