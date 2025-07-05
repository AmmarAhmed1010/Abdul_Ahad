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
  const [activeSection, setActiveSection] = useState('');

  // Update active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    
    const handleScroll = () => {
      // Navbar background animation
      if (window.scrollY > 50) {
        navRef.current.classList.add('bg-gray-900/90', 'backdrop-blur-sm');
        navRef.current.classList.remove('bg-transparent');
      } else {
        navRef.current.classList.remove('bg-gray-900/90', 'backdrop-blur-sm');
      }

      // Active section detection
      const scrollPosition = window.scrollY + 100; // Adjust offset as needed
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
  const menuPanelRef = useRef();
  const overlayRef = useRef();
  const hamburgerRef = useRef();
  const topBar = useRef();
  const midBar = useRef();
  const botBar = useRef();

  // Hamburger GSAP animation
  useEffect(() => {
    if (!hamburgerRef.current) return;
    if (!topBar.current || !midBar.current || !botBar.current) return;
    if (mobileMenuOpen) {
      gsap.to(topBar.current, { y: 8, rotate: 45, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(midBar.current, { opacity: 0, duration: 0.2, ease: 'power2.inOut' });
      gsap.to(botBar.current, { y: -8, rotate: -45, duration: 0.4, ease: 'power2.inOut' });
    } else {
      gsap.to(topBar.current, { y: 0, rotate: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(midBar.current, { opacity: 1, duration: 0.2, ease: 'power2.inOut' });
      gsap.to(botBar.current, { y: 0, rotate: 0, duration: 0.4, ease: 'power2.inOut' });
    }
  }, [mobileMenuOpen]);

  // Menu panel GSAP animation
  useEffect(() => {
    if (!menuPanelRef.current || !overlayRef.current) return;
    if (mobileMenuOpen) {
      gsap.to(menuPanelRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.5, ease: 'power3.out', pointerEvents: 'auto' });
    } else {
      gsap.to(menuPanelRef.current, { x: '-100%', duration: 0.5, ease: 'power3.in' });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power3.in', pointerEvents: 'none' });
    }
  }, [mobileMenuOpen]);

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

          {/* GSAP Hamburger Icon for Mobile */}
          <button
            ref={hamburgerRef}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-gray-800/80"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(v => !v)}
          >
            <span ref={topBar} className="block w-7 h-1 bg-blue-400 rounded transition-all" style={{marginBottom: 5}} />
            <span ref={midBar} className="block w-7 h-1 bg-blue-400 rounded transition-all" style={{marginBottom: 5}} />
            <span ref={botBar} className="block w-7 h-1 bg-blue-400 rounded transition-all" />
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex text-white items-center gap-7 lg:gap-10">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`relative group transition-colors duration-300 font-mono text-base uppercase tracking-wider px-2 py-1 rounded-md focus-visible:ring-2 focus-visible:ring-blue-400 outline-none ${
                  activeSection === item 
                    ? 'text-cyan-400' 
                    : 'text-white hover:text-blue-400 focus-visible:text-cyan-400'
                }`}
                aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
                tabIndex={0}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                  activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* GSAP Mobile Menu & Overlay */}
          <div>
            {/* Overlay (30vw blurred, closes menu) */}
            <div
              ref={overlayRef}
              className="fixed top-0 right-0 h-screen z-40"
              style={{ width: '30vw', background: 'rgba(16,23,42,0.5)', backdropFilter: 'blur(8px)', opacity: 0, pointerEvents: 'none', transition: 'opacity 0.3s' }}
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu Panel (70vw solid) */}
            <div
              ref={menuPanelRef}
              className="fixed top-0 left-0 h-screen z-50 md:hidden flex flex-col items-start py-10 px-6"
              style={{ width: '70vw', background: '#181f2c', boxShadow: '2px 0 16px #0006', borderTopRightRadius: '1.5rem', borderBottomRightRadius: '1.5rem', transform: 'translateX(-100%)' }}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/70 text-blue-300 hover:text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                tabIndex={0}
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <nav className="w-full flex flex-col gap-6 mt-8">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    className={`block w-full text-left font-mono text-xl font-semibold uppercase tracking-wider px-4 py-3 rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none ${
                      activeSection === item
                        ? 'text-cyan-400 bg-blue-900/30 scale-105 translate-x-2'
                        : 'text-white hover:text-blue-300 focus-visible:text-cyan-400'
                    }`}
                    aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
                    tabIndex={0}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>


          {/* Social Links */}
       
        </div>
      </div>
    </nav>
  );
}
