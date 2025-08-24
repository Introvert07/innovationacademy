// Faculty.jsx
import React from "react";

export default function Faculty() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-r from-blue-100 via-white to-blue-100 flex items-center pt-24">
      {/* pt-24 ensures content starts after navbar (adjust if navbar height is different) */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <img
              src="/faculty.jpeg" // Place faculty.jpeg in public/
              alt="Founder"
              className="w-96 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
            />
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-3xl border-4 border-blue-500 opacity-40 -z-10 translate-x-3 translate-y-3"></div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-blue-700 mb-3 tracking-wide">
            Founder
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Mr. Atul Kumar Patel
          </h3>
          <p className="text-xl font-semibold text-gray-800 mb-1">B.Sc, MBA</p>
          <p className="text-lg font-medium text-gray-700 mb-6">
            10+ Years of Experience
          </p>
          <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
            Mr. Patel brings a wealth of knowledge and expertise, blending 
            academic excellence with years of practical experience. With a 
            passion for guiding students, he ensures every learner reaches 
            their true potential. His vision is to create an academy where 
            innovation meets discipline, inspiring the next generation of leaders.
          </p>
        </div>
      </div>
    </section>
  );
}
