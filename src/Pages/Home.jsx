import Hero from "../components/Hero";
import CoursesSection from "./_sections/CoursesSection";
import TestimonialsSection from "./_sections/TestimonialsSection";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <>
      <Hero />
      <CoursesSection />
      <TestimonialsSection />
    <motion.section
  className="py-16 bg-white text-black"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-3">Join a Free Demo Class</h2>
    <p className="text-black max-w-lg mx-auto mb-6">
      Call us now or fill the enquiry form to schedule your{" "}
      <span className="font-semibold">free demo</span>.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="tel:+91-1234567890"
        className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700 transition-colors duration-300"
      >
        📞 Call Now
      </a>
      <a
        href="#enquiry"
        className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg border-2 border-yellow-400 hover:bg-yellow-300 hover:border-yellow-500 transition-colors duration-300"
      >
        📝 Fill Enquiry Form
      </a>
    </div>
  </div>
</motion.section>


    </>
  );
}
