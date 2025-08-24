import { motion } from "framer-motion";
import { useState } from "react";

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
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "916265070743"; // include country code without '+'

    const text = `Hello! I want to contact you.
Name: ${name}
Mobile: ${mobile}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };

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

      {/* Map */}
      <motion.div
        className="w-full rounded-lg overflow-hidden border border-blue-300 shadow-lg mb-12"
        style={{ aspectRatio: "16 / 9" }}
        variants={itemVariants}
      >
        <iframe
          title="Innovation Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.460073653838!2d77.42702564084738!3d23.26272688230073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69e604591179%3A0xc9ddd4628d23e286!2sInnovation%20Academy!5e0!3m2!1sen!2sin!4v1756004627403!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Contact Info & Form */}
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
            <p className="flex items-center gap-2 text-xl text-green-600 font-bold">
              +91 6265070743
            </p>
          </div>

          <div>
            <p className="text-lg text-blue-900 mb-3 font-semibold">Visit us:</p>
            <address className="not-italic text-blue-700 hover:text-blue-900 transition-colors font-medium cursor-pointer">
              Innovation Academy, Bank Nagar, 80 feet road, Ashoka garden, Bhopal, M.P. <br />
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
          className="bg-white border border-blue-300 p-6 rounded-lg shadow-md
                       hover:bg-blue-50
                       hover:text-blue-900
                       transition-colors duration-300 ease-in-out "
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <input
              type="text"
              placeholder="Your Mobile no."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="border border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border border-blue-300 p-3 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Send
            </button>
            {submitted && (
              <p className="text-green-600 mt-2">
                Message opened in WhatsApp successfully!
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
