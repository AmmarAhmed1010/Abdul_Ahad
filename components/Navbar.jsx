'use client';

import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { FiCode, FiTerminal, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef();
  const brandRef = useRef();
  const linksRef = useRef([]);
  // Clear refs on rerender to avoid stale references
  linksRef.current = [];
  const socialRef = useRef();


  // Add scroll and typing effect
  useEffect(() => {
    // Navbar background animation on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('bg-gray-900/90', 'backdrop-blur-sm');
        navRef.current.classList.remove('bg-transparent');
      } else {
        navRef.current.classList.remove('bg-gray-900/90', 'backdrop-blur-sm');
        }
      };

      // Initial check
      handleScroll();
      window.addEventListener('scroll', handleScroll);

      // Typing effect for brand name
      const brandText = "<AHAD/>";
      let i = 0;
      const typeWriter = () => {
        if (i < brandText.length) {
          brandRef.current.textContent += brandText.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      // Start typing after a small delay
      const timer = setTimeout(() => {
        brandRef.current.textContent = '';
        typeWriter();
      }, 500);


      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };

  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-50 transition-all duration-300 bg-gradient-to-b from-gray-900/80 to-gray-900/30 shadow-lg backdrop-blur-lg py-3 md:py-4"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center gap-4">
          {/* Brand with typing effect */}
          <Link
            href="#"
            className="flex items-center group focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg px-2 outline-none"
            aria-label="Home - Ahad Brand"
            tabIndex={0}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                x: 5,
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <FiTerminal className="h-7 w-7 md:h-8 md:w-8 text-blue-400 drop-shadow-md mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span
              ref={brandRef}
              className="text-2xl md:text-3xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 shadow-sm select-none"
            >
              {/* Text will be filled by the typing effect */}
            </span>
            <span className="ml-1 text-blue-400 animate-pulse">_</span>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(v => !v)}
          >
            <svg
              className={`w-7 h-7 text-white transition-transform duration-200 ${mobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                // X icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex text-white items-center gap-7 lg:gap-10">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="relative group text-white hover:text-blue-400 focus-visible:text-cyan-400 transition-colors duration-300 font-mono text-base uppercase tracking-wider px-2 py-1 rounded-md focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
                aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
                tabIndex={0}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Navigation Links - Mobile Dropdown */}
          {mobileMenuOpen && (
            <>
              {/* Blurred Backdrop */}
              <div
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[3px] animate-fade-in"
                aria-hidden="true"
                onClick={() => setMobileMenuOpen(false)}
              />
              {/* Mobile Menu Panel */}
              <div className="fixed top-0 left-0 w-full z-50 md:hidden flex justify-center items-start">
                <div className="relative mt-4 w-[94vw] max-w-md bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-blue-900/90 backdrop-blur-2xl border border-blue-400/40 rounded-2xl shadow-2xl flex flex-col items-center py-7 px-2 gap-4 animate-slide-down-glass">
                  {/* Close (X) Button */}
                  <button
                    className="absolute top-3 right-3 p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/70 text-blue-300 hover:text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                    tabIndex={0}
                  >
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  {/* Nav Links */}
                  {['about', 'projects', 'skills', 'contact'].map((item, idx, arr) => (
                    <div key={item} className="w-full flex flex-col items-center">
                      <Link
                        href={`#${item}`}
                        className="w-full text-center text-white hover:text-blue-400 focus-visible:text-cyan-400 transition-all duration-200 font-mono text-xl font-semibold uppercase tracking-wider px-8 py-3 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-400 outline-none shadow-md hover:bg-blue-900/20 active:scale-95"
                        aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
                        tabIndex={0}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                      {idx !== arr.length - 1 && <div className="w-2/3 h-px bg-gradient-to-r from-blue-400/30 via-gray-400/10 to-cyan-400/30 my-2 mx-auto" />}
                    </div>
                  ))}
                  {/* Social Icons with Labels */}
                  <div className="w-full flex justify-center gap-7 mt-6 pt-4 border-t border-blue-900/30">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-gray-400 hover:text-blue-400 focus-visible:text-cyan-400 transition-all duration-200 p-3 rounded-full focus-visible:ring-2 focus-visible:ring-blue-400 outline-none shadow hover:shadow-blue-100 hover:scale-110"
                      aria-label="GitHub"
                      tabIndex={0}
                    >
                      <FiGithub className="h-8 w-8 mb-1" />
                      <span className="text-xs font-mono text-blue-200">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-gray-400 hover:text-blue-400 focus-visible:text-cyan-400 transition-all duration-200 p-3 rounded-full focus-visible:ring-2 focus-visible:ring-blue-400 outline-none shadow hover:shadow-blue-100 hover:scale-110"
                      aria-label="LinkedIn"
                      tabIndex={0}
                    >
                      <FiLinkedin className="h-8 w-8 mb-1" />
                      <span className="text-xs font-mono text-blue-200">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:youremail@example.com"
                      className="flex flex-col items-center text-gray-400 hover:text-blue-400 focus-visible:text-cyan-400 transition-all duration-200 p-3 rounded-full focus-visible:ring-2 focus-visible:ring-blue-400 outline-none shadow hover:shadow-blue-100 hover:scale-110"
                      aria-label="Email"
                      tabIndex={0}
                    >
                      <FiMail className="h-8 w-8 mb-1" />
                      <span className="text-xs font-mono text-blue-200">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}


          {/* Social Links */}
       
        </div>
      </div>
    </nav>
  );
}
