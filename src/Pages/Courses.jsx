import { motion } from "framer-motion";

const courses = [
  {
    title: "Foundations — Class 1–5",
    subtitle: "Building basics, numeracy and skills",
    bullets: ["Concept clarity", "Fun activities", "Small batches"],
  },
  {
    title: "Middle School — Class 6–8",
    subtitle: "Stronger fundamentals and problem solving",
    bullets: ["Concept practice", "Weekly tests", "Project work"],
  },
  {
    title: "Secondary — Class 9–10",
    subtitle: "Board exam strategy & score improvement",
    bullets: ["Exam pattern", "Previous year problems", "Doubt sessions"],
  },
  {
    title: "Senior — Class 11–12 (PCM/PCB)",
    subtitle: "In-depth theory for boards and prep",
    bullets: ["Topic mastery", "Advanced problem solving", "Test series"],
  },
  {
    title: "JEE Preparation",
    subtitle: "Advanced coaching for engineering aspirants",
    bullets: ["Concepts + advanced problems", "Mock tests", "Rank guidance"],
  },
  {
    title: "NEET Preparation",
    subtitle: "Complete biology & physics/chemistry coaching",
    bullets: ["NCERT focus", "Revision modules", "Test strategy"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Courses() {
  return (
    <div className="container mx-auto px-4 pt-[120px] pb-12">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        Our Courses
      </h1>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {courses.map((course, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-2xl p-6 cursor-pointer border border-blue-200
                       hover:bg-blue-700 hover:text-white
                       hover:border-blue-700
                       transition-colors duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="mb-4">{course.subtitle}</p>
            <ul className="list-disc list-inside space-y-1">
              {course.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="transition-colors duration-300 ease-in-out
                             hover:text-white"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
