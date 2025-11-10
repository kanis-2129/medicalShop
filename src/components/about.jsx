import React from "react";
import { motion } from "framer-motion";
import a1 from "../assest/a1.jpg";
import a2 from "../assest/a2.jpg";
import a3 from "../assest/a3.jpg";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
      },
    },
  };
};

const About = () => {
  return (
    <section
      className="bg-gray-50 z-0 py-16 px-6 md:px-20 flex flex-col items-center justify-center"
      id="about"
    >
      {/* Heading */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600">
          About Us
        </h2>
        <div className="mt-2 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-24">
        {/* 1️⃣ Who We Are */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-60 h-60 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src={a1}
                alt="Who We Are"
                className="w-36 h-36 object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-teal-600 mb-3">
              Who We Are
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are{" "}
              <span className="font-semibold text-teal-600">
                Mahesh Medical
              </span>
              , a trusted pharmacy in your neighborhood. Our mission is to
              provide genuine medicines, personal care, and reliable service —
              all focused on your well-being.
            </p>
          </motion.div>
        </div>

        {/* 2️⃣ Home Delivery */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 text-center md:text-left">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-60 h-60 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src={a2}
                alt="Home Delivery"
                className="w-36 h-36 object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-teal-600 mb-3">
              Home Delivery
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We deliver your medicines safely to your doorstep within{" "}
              <span className="font-semibold text-teal-600">20 km</span> of our
              store. Fast, reliable, and always on time — because your health
              can’t wait.
            </p>
          </motion.div>
        </div>

        {/* 3️⃣ Our Commitment */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-60 h-60 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src={a3}
                alt="Our Commitment"
                className="w-36 h-36 object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-teal-600 mb-3">
              Our Commitment to Vellpallam
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are proud to serve the people of{" "}
              <span className="font-semibold text-teal-600">Vellpallam</span>{" "}
              with care, compassion, and dedication. Our goal is to ensure every
              customer gets the right medicines with the best service and a
              personal touch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
