import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      message: data.get("message"),
    };
    console.log("Contact form:", payload);
    setStatus("Thanks! We will contact you soon.");
    e.target.reset();
    setTimeout(() => setStatus(null), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full border border-blue-300 rounded-md p-3 text-gray-900 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <input
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full border border-blue-300 rounded-md p-3 text-gray-900 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <input
        name="email"
        type="email"
        placeholder="Email (optional)"
        className="w-full border border-blue-300 rounded-md p-3 text-gray-900 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className="w-full border border-blue-300 rounded-md p-3 text-gray-900 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
      ></textarea>
      <div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md
                     shadow-md transition-colors duration-300 w-full"
        >
          Send Message
        </button>
      </div>
      {status && (
        <div className="text-center text-green-600 font-medium mt-2">
          {status}
        </div>
      )}
    </form>
  );
}
