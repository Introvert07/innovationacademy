import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Gallery() {
  const images = [
    "/gallery/img1.jpeg",
    "/gallery/img2.jpeg",
    "/gallery/img3.jpeg",
    "/gallery/img4.jpeg",
    "/gallery/img5.jpeg",
    "/gallery/img6.jpeg",
    "/gallery/img7.jpeg",
  ];

  return (
    <section className="pt-[96px] pb-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-700">
           Glimpses
        </h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-3xl shadow-2xl"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src={src}
                  alt={`Academy glimpse ${idx + 1}`}
                  className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
