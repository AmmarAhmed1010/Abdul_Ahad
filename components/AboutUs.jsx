'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);

  return (
    <section id="about" className="py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 inline-block"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </div>
        <p
          className="text-lg text-gray-300 mb-4 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I am a passionate web developer with a strong background in building modern, responsive, and high-performance web applications.
          My expertise spans custom websites, dashboards, and interactive forms using the latest technologies like Next.js, React, and Tailwind CSS.
        </p>
        <p
          className="text-lg text-gray-300 mb-4 text-center"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          I focus on delivering clean code, smooth user experiences, and business-driven results. Let&apos;s work together to bring your ideas to life and grow your online presence!
        </p>
      </div>
    </section>
  );
}
