'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const heroRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      [headingRef.current, textRef.current, buttonRef.current],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-950 via-black to-cyan-900 text-white overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-800 opacity-20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-xl"
          >
            Custom Websites That Drive Results
          </h1>
          <p
            ref={textRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto opacity-0"
          >
            Let's build something amazing together. Get a <span className="text-cyan-300 font-semibold">professional website</span> that converts visitors into customers.
          </p>
          <a
            ref={buttonRef}
            href="#contact"
            className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-700 hover:via-cyan-600 hover:to-teal-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 inline-block opacity-0 focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
