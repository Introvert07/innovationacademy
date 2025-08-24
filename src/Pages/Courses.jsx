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
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Courses() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 py-24 pt-26">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6 text-center">
          Our Courses
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12">
          Registration Fee: <span className="font-semibold">₹500</span> <br />
          Physics, Chemistry, Maths: <span className="font-semibold">₹10,000</span> per subject per session
        </p>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
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
              className="relative overflow-hidden rounded-3xl p-8 cursor-pointer border border-blue-200
                         shadow-lg transition-all duration-500 ease-in-out group
                         before:absolute before:inset-0 before:bg-blue-500 before:translate-y-full before:origin-bottom
                         before:transition-transform before:duration-500 before:ease-in-out
                         hover:before:translate-y-0 hover:text-white"
            >
              <h2 className="text-2xl font-bold mb-3 relative z-10">{course.title}</h2>
              <p className="mb-4 relative z-10">{course.subtitle}</p>
              <ul className="list-disc list-inside space-y-1 relative z-10">
                {course.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
