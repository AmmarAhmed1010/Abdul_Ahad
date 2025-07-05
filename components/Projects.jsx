'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    name: "Apple Clone",
    description:
      "A responsive clone of the Apple website built with Next.js and Tailwind CSS, featuring a modern UI, smooth transitions, and consistent layout across all devices for an authentic feel.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    source_code_link: "https://apple-clone-beta.vercel.app/",
  },
  {
    name: "E Commerce Website",
    description:
      "A modern shopping site with product browsing, cart features, and responsive design. Built using Next.js and Tailwind CSS to offer a smooth and intuitive user experience across devices.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    source_code_link: "https://e-commerce-chi-eight-35.vercel.app/",
  },
  {
    name: "E commerce Website",
    description:
      "Next.js-based ecommerce frontend with REST API integration, allowing users to browse products, manage cart items, and enjoy a responsive UI designed for all screen sizes.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    source_code_link: "https://foreverecommerce-eta.vercel.app/",
  },
  {
    name: "World Atlas",
    description:
      "An interactive world map app built with Next.js and Framer Motion, providing country details and region filters in a responsive UI, ideal for exploring global geography visually.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    source_code_link: "https://worldatlas-dusky.vercel.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "A sleek and modern personal portfolio site using Next.js and Tailwind CSS. It highlights skills and projects with smooth Framer Motion animations for a professional user experience.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    source_code_link: "https://romeogfx.vercel.app/",
  },
  {
    name: "Contagious",
    description:
      "A web app displaying a global map with country insights and filter options. Developed using Next.js and Tailwind CSS, it delivers a smooth and engaging interface with Framer Motion.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    source_code_link: "https://contagiouswebsite.vercel.app/",
  },
  {
    name: "Plumbing",
    description:
      "A clean and responsive plumbing service site powered by Next.js. Includes region-based service details with a user-friendly layout and animations powered by Framer Motion and Tailwind.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    source_code_link: "https://plumbing-nine.vercel.app/",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);
  return (
    <section id="projects" className="relative py-24 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <p
          className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Some of my recent work and side projects
        </p>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <div
              key={project.name + idx}
              className="group relative h-full"
              data-aos="fade-up"
              data-aos-delay={150 + idx * 90}
            >
              <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full flex flex-col group-hover:border-blue-500/30 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-400 transition-colors duration-300">{project.name}</h3>
                  <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag.name + i}
                        className={
                          "inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-lg " +
                          (tag.color === "blue-text-gradient"
                            ? "bg-gradient-to-r from-blue-600/80 to-blue-400/80 text-white"
                            : tag.color === "green-text-gradient"
                            ? "bg-gradient-to-r from-green-600/80 to-green-400/80 text-white"
                            : tag.color === "pink-text-gradient"
                            ? "bg-gradient-to-r from-pink-600/80 to-pink-400/80 text-white"
                            : "bg-gray-700/80 text-white")
                        }
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-700/50 group-hover:border-gray-600/50 transition-colors duration-300">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-200 group-hover:translate-x-1 transition-all duration-300 text-sm font-medium"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
