import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; // Example icon, replace with desired icon

const testimonialsData = [
  {
    text: "Nahom demonstrated exceptional skills in problem-solving and a deep understanding of software development.",
    author: "Marew",
    icon: <FaStar className="text-yellow-400 text-6xl" />, // Replace with desired icon
  },
  {
    text: "I have no doubt they will excel in any software development role.",
    author: "Betty",
    icon: <FaStar className="text-yellow-400 text-6xl" />, // Replace with desired icon
  },
  {
    text: "Has a natural talent for coding and has consistently produced work of the highest standard.",
    author: "Samson",
    icon: <FaStar className="text-yellow-400 text-6xl" />, // Replace with desired icon
  },
  // Add more testimonials as needed
];

function Testimonials() {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("animate-fadeIn");
  }, []);

  return (
    <section className="h-screen testimonials-section bg-gradient-to-r from-slate-900 to-slate-700 py-12">
      <div className="testimonials-container max-w-7xl mx-auto px-4 pt-10">
        <h2 className="testimonials-title text-orange-500 text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>
        <div
          className={`testimonials-wrapper grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${animationClass}`}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-item bg-blue-800 text-white p-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{testimonial.icon}</div>
              <p className="testimonial-text text-lg font-medium leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <p className="testimonial-author text-sm font-semibold text-yellow-400">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
