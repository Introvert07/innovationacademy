import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Hemant", text: "94.5% in boards 2025 - 91 marks in chemistry.", img: "/testinomialphotos/9.png" },
    { name: "Rupesh", text: "Scored 88% in boards 2025 — thanks to Innovation Academy!", img: "/testinomialphotos/1.png" },
    { name: "Manjari", text: "85.5% in boards 2025 - 92 marks in biology.", img: "/testinomialphotos/2.png" },
    { name: "Pratima", text: "90.5% in boards 2025 - 94 marks in chemistry.", img: "/testinomialphotos/3.png" },
    { name: "Dhruv", text: "94 marks in physics in boards 2025 — thanks to Innovation Academy!.", img: "/testinomialphotos/4.png" },
    { name: "Anshuman", text: "82% in boards 2025 - 88 marks in biology.", img: "/testinomialphotos/5.png" },
    { name: "Chitransh", text: "85% in boards 2025 - 87 marks in chemistry.", img: "/testinomialphotos/6.png" },
    { name: "Ayush", text: "82 marks in chemistry — thanks to Innovation Academy!.", img: "/testinomialphotos/7.png" },
    { name: "Vaibhav", text: "87% in boards 2025 - 89 marks in chemistry.", img: "/testinomialphotos/8.png" },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 relative ">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-200 via-blue-400 to-blue-800 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ✨ Student Success Stories ✨
        </motion.h2>

      

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300 p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
              >
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-200 mb-4 shadow-lg">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <FaQuoteLeft className="text-blue-500 text-2xl mb-3 opacity-80" />
                <p className="italic text-gray-700 mb-3">"{t.text}"</p>
                <div className="mt-2 font-bold text-gray-900 text-lg">{t.name}</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
