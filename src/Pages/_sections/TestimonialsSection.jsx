import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Ritu", text: "Scored 98% in boards — thanks to ABC Coaching!", img: "https://via.placeholder.com/150x150.png?text=Ritu" },
    { name: "Aman", text: "Cleared JEE mains with smart practice & tests.", img: "https://via.placeholder.com/150x150.png?text=Aman" },
    { name: "Pooja", text: "Faculty are very supportive — doubt sessions helped a lot.", img: "https://via.placeholder.com/150x150.png?text=Pooja" },
    { name: "Raj", text: "Best coaching center for competitive exams.", img: "https://via.placeholder.com/150x150.png?text=Raj" },
    { name: "Simran", text: "Weekly mock tests boosted my confidence!", img: "https://via.placeholder.com/150x150.png?text=Simran" },
    { name: "Vikram", text: "Teachers explain concepts very clearly.", img: "https://via.placeholder.com/150x150.png?text=Vikram" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get 3 testimonials at once
  const getVisibleTestimonials = () => {
    return [
      testimonials[current],
      testimonials[(current + 1) % testimonials.length],
      testimonials[(current + 2) % testimonials.length],
    ];
  };

  // Animation logic depending on position
  const getVariants = (position) => {
    if (position === 0) {
      // Left card
      return {
        hidden: { opacity: 0, x: -120 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
        exit: { opacity: 0, x: -120 },
      };
    }
    if (position === 1) {
      // Center card
      return {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
        exit: { opacity: 0, scale: 0.5 },
      };
    }
    if (position === 2) {
      // Right card
      return {
        hidden: { opacity: 0, x: 120 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
        exit: { opacity: 0, x: 120 },
      };
    }
  };

  return (
    <motion.section
      className="bg-blue-50 py-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 relative max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Success</h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {getVisibleTestimonials().map((t, idx) => (
                <motion.div
                  key={idx}
                  variants={getVariants(idx)}
                  className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100 mb-4 shadow-sm">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <FaQuoteLeft className="text-blue-500 text-2xl mb-2 opacity-70" />
                  <p className="italic text-gray-700">"{t.text}"</p>
                  <div className="mt-3 font-semibold text-gray-900">{t.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Left arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-blue-100 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-blue-100 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
