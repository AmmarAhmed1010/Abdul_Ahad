'use client';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript, SiJest, SiAccessibility, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-200" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'Jest', icon: <SiJest className="text-red-400" /> },
  { name: 'Accessibility', icon: <SiAccessibility className="text-green-400" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-400" /> },
  { name: 'Responsive Design', icon: <span className="text-xl">📱</span> },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-blue-950 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
          Frontend Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-gray-900/70 rounded-xl shadow-lg p-5 transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-blue-500/20 group focus-within:ring-2 focus-within:ring-blue-400 outline-none"
              tabIndex={0}
              aria-label={skill.name}
            >
              <span className="text-4xl md:text-5xl mb-2 drop-shadow-lg group-hover:animate-bounce">
                {skill.icon}
              </span>
              <span className="text-base md:text-lg font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
