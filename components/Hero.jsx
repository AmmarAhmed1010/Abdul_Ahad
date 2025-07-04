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
    <div ref={heroRef} className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-6 opacity-0">
            Custom Websites That Drive Results
          </h1>
          <p ref={textRef} className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto opacity-0">
            Let's build something amazing together. Get a professional website that converts visitors into customers.
          </p>
          <a 
            ref={buttonRef}
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block opacity-0"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
