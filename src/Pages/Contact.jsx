import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { FaWhatsapp } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <motion.div
      className="container mx-auto px-4 pt-[110px] pb-12 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-extrabold text-blue-800 mb-12 text-center tracking-wide"
        variants={itemVariants}
      >
        Contact Us
      </motion.h1>

      {/* Map Full Width */}
      <motion.div
        className="w-full rounded-lg overflow-hidden border border-blue-300 shadow-lg mb-12"
        style={{ aspectRatio: "16 / 9" }}
        variants={itemVariants}
      >
        <iframe
          title="Vidisha Sati College Location"
          src="https://maps.google.com/maps?q=Vidisha%20Sati%20College&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        />
      </motion.div>

      {/* Contact Info & Form Side-by-Side */}
      <motion.div className="grid gap-12 md:grid-cols-2" variants={itemVariants}>
        {/* Contact Info */}
        <motion.div
          className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8 shadow-lg flex flex-col gap-8"
          variants={itemVariants}
        >
          <div>
            <p className="text-lg text-blue-900 mb-3 font-semibold">
              For admissions and enquiries, call:
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl text-green-600 hover:text-green-800 transition-colors font-bold"
            >
              <FaWhatsapp className="text-2xl" />
              +91 98765 43210
            </a>
          </div>

          <div>
            <p className="text-lg text-blue-900 mb-3 font-semibold">Visit us:</p>
            <address className="not-italic text-blue-700 hover:text-blue-900 transition-colors font-medium cursor-pointer">
              123 Main Road, Your City <br />
              Open Mon–Sat, 9:00 AM – 6:00 PM
            </address>
          </div>

          <div
            className="bg-white border border-blue-300 p-6 rounded-lg shadow-md
                       hover:bg-blue-50
                       hover:text-blue-900
                       transition-colors duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Office Hours
            </h3>
            <ul className="text-blue-800 text-base space-y-2">
              <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
              <li>Sat: 9:00 AM – 2:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-xl p-10 shadow-xl"
          variants={itemVariants}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
