import React from "react";
import { ReactTyped } from "react-typed";
import seminar from "../assets/Seminar.gif";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="bg-gray-50 pt-20">
      <motion.section
        className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Illustration Left */}
        <motion.div
          className="flex-1 flex justify-center"
          variants={imageVariants}
        >
          <img
            src={seminar}
            alt="Innovation Academy Illustration"
            loading="lazy"
            className="max-w-md w-full object-contain"
          />
        </motion.div>

        {/* About Text Right */}
        <motion.div className="flex-1 text-center md:text-left" variants={textVariants}>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            <ReactTyped
              strings={[
                "About Innovation Academy",
                "Shaping Futures with Excellence",
                "Guiding Students Towards Success",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Innovation Academy, we are dedicated to more than just academic success —
            we aim to inspire lifelong learners. With a focus on strong fundamentals,
            innovative teaching methods, and personalized guidance, our programs help
            students thrive in school exams, board results, and competitive challenges.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our experienced faculty, small batch sizes, and one-on-one mentorship create
            a nurturing learning environment. We combine discipline with creativity to
            ensure that every student not only scores high but also develops the skills,
            confidence, and mindset needed to excel in life.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
