import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-blue-200 shadow-lg">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        
        {/* Left - Copyright */}
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">&copy; {new Date().getFullYear()} Innovation Academy</p>
          <p className="opacity-70 mt-1">All rights reserved.</p>
        </div>

        {/* Middle - Contact Info */}
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-700" /> 
            <span>Near Ashoka Garden, Bhopal</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-blue-700" /> 
            <span>+91 6265070743</span>
          </div>
        </div>

        {/* Right - Social Media */}
        <div className="text-center md:text-right ">
          <p className="font-semibold mb-2">Follow us</p>
          <div className="flex justify-center md:justify-end gap-5 text-xl">
            <a href="#" className="hover:text-blue-700 transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-600 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-500 transition-colors"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom - Made by */}
     {/* Bottom - Made by */}
<div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
  Made with ❤️ by{" "}
  <a 
    href="https://instagram.com/_introvert7" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="font-semibold hover:text-pink-600 transition-colors"
  >
    Introvert
  </a>
</div>

    </footer>
  );
}
