import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-5 w-full">
        
        {/* Left - Copyright */}
        <div className="text-sm flex-1 text-center md:text-left">
          &copy; {new Date().getFullYear()} Innovation Academy. All rights reserved.
        </div>

        {/* Middle - Contact Info */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-3 justify-center text-sm text-center md:text-left">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> 123 Main Road, Bhopal
          </div>
         
        </div>

        {/* Right section removed */}

      </div>
    </footer>
  );
}
