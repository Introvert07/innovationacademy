import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton"; // Import your WhatsApp button
import Gallery from "./Pages/Gallery";
import Faculty from "./Pages/Faculty";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faculty" element={<Faculty />} />




        </Routes>
      </main>

      <WhatsAppButton />  {/* Add it here for it to float on all pages */}

      <Footer />
    </div>
  );
}
