import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import heroImage from "../assets/boy.png"; // replace with your image path

export default function Hero() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightImageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Marquee scroll (your existing)
    if (marqueeRef.current) {
      const isMobile = window.innerWidth < 768;
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: isMobile ? 5 : 8,
        ease: "linear",
      });
    }

    // Hero entrance animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7 }
    )
      .fromTo(
        leftTextRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        rightImageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.7 },
        "-=0.6"
      )
      .fromTo(
        buttonsRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.15,
        },
        "-=0.4"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden opacity-0"
      // opacity-0 to avoid flicker before GSAP animates
    >
      {/* Hero Section */}
      <section className="bg-white min-h-[80vh] mt-[70px] flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-8 gap-8 md:gap-16">
        {/* Left Text Content */}
        <div ref={leftTextRef} className="w-full max-w-2xl text-center md:text-left">
          <p className="text-blue-600 font-semibold flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
            🎯 Excellence in Education from Class 1 to 12, JEE & NEET
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug md:leading-tight">
            Your Trusted Coaching for School & Competitive Exams
          </h1>

          <p className="text-gray-600 mt-5 text-sm sm:text-base md:text-lg leading-relaxed px-2 md:px-0">
            Comprehensive coaching programs for school subjects and entrance exams,
            with expert guidance, personalized attention, and a proven track record of success.
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-2 text-gray-800 text-sm sm:text-base md:text-lg">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              ✅ <span className="font-medium">Class 1–12 (All Boards)</span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              ✅ <span className="font-medium">JEE & NEET Specialized Coaching</span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              ✅ <span className="font-medium">Experienced Faculty & Small Batches</span>
            </li>
          </ul>

          {/* Buttons */}
          <div ref={buttonsRef} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start opacity-0">
            {/* Initially hidden, GSAP animates */}
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md"
              >
                Enroll Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/courses"
                className="border border-blue-600 text-blue-600 px-6 py-2.5 rounded-lg font-semibold shadow-md"
              >
                View Courses
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={rightImageRef}
          className="flex justify-center md:justify-end w-full max-w-sm sm:max-w-md md:max-w-lg opacity-0"
        >
          <img
            src={heroImage}
            alt="Student studying"
            className="w-full h-auto mix-blend-multiply"
          />
        </div>
      </section>

      {/* Marquee at top */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 mt-4 mb-6 text-white py-2 px-4 overflow-hidden relative rounded-full shadow-lg border border-white/20 w-[95%] mx-auto">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-xs sm:text-sm md:text-base font-medium tracking-wide"
        >
          <span className="mx-6">🏆 Innovation Academy – New Batch Starting from September</span>
          <span className="mx-6">💰 Minimum Fees – Maximum Value</span>
          <span className="mx-6">📈 Consistently Best Results in the Region</span>
          <span className="mx-6">🎯 Coaching for Class 1–12, JEE & NEET</span>
          <span className="mx-6">🏆 Innovation Academy – New Batch Starting from September</span>
          <span className="mx-6">💰 Minimum Fees – Maximum Value</span>
          <span className="mx-6">📈 Consistently Best Results in the Region</span>
          <span className="mx-6">🎯 Coaching for Class 1–12, JEE & NEET</span>
        </div>
      </div>
    </div>
  );
}
