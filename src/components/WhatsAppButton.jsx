// components/WhatsAppButton.jsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210" // Put your WhatsApp number here (with country code, no +)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-6 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-colors z-50"
      title="Message us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:inline">Message Us</span>
    </a>
  );
}
