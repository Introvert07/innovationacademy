import { motion } from "framer-motion";
import { FaBookOpen, FaFlask, FaChalkboardTeacher } from "react-icons/fa";

const sample = [
  { 
    title: "Class 9–10", 
    subtitle: "Board preparation & test series",
    icon: <FaBookOpen size={32} />
  },
  { 
    title: "Class 11–12 (PCM/PCB)", 
    subtitle: "Deep concept coverage",
    icon: <FaFlask size={32} />
  },
  { 
    title: "JEE / NEET", 
    subtitle: "Targeted test prep & strategies",
    icon: <FaChalkboardTeacher size={32} />
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: [0, -8, 0], // floating animation
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.5,
        ease: "easeInOut",
        delay: i * 0.3 + 0.6,
      },
      opacity: { duration: 0.6, ease: "easeOut" },
    },
  }),
};

export default function CoursesSection() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
          Popular Courses
        </h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sample.map((course, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              custom={i}  // Pass index for delay in variant
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-xl shadow-md bg-white group overflow-hidden cursor-pointer border border-blue-400"
            >
              {/* Hover color fill effect */}
              <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>

              {/* Icon */}
              <div className="mb-4 relative z-10 text-blue-600 group-hover:text-white transition-colors duration-300">
                {course.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                {course.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 group-hover:text-gray-100 relative z-10 transition-colors duration-300">
                {course.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
