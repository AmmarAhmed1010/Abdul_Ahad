'use client';

import { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript, SiJest, SiFigma } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Waves from './Waves';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, color: 'from-orange-500/20 to-orange-600/10' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, color: 'from-blue-500/20 to-blue-600/10' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, color: 'from-yellow-500/20 to-yellow-600/10' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, color: 'from-blue-400/20 to-blue-500/10' },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, color: 'from-cyan-500/20 to-cyan-600/10' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, color: 'from-gray-200/20 to-gray-300/10' },
  { name: 'Redux', icon: <SiRedux className="text-purple-400" />, color: 'from-purple-500/20 to-purple-600/10' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" />, color: 'from-cyan-400/20 to-cyan-500/10' },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" />, color: 'from-orange-400/20 to-orange-500/10' },
  { name: 'Jest', icon: <SiJest className="text-red-400" />, color: 'from-red-500/20 to-red-600/10' },
  { name: 'Figma', icon: <SiFigma className="text-pink-400" />, color: 'from-pink-500/20 to-pink-600/10' },
  { name: 'Responsive', icon: <span className="text-2xl">📱</span>, color: 'from-emerald-500/20 to-emerald-600/10' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Skills() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);
  return (
    <section 
      id="skills" 
      className="relative py-24 text-white scroll-mt-24"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300"
            data-aos="fade-up"
          >
            My Skills
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technologies I've been working with recently
          </p>
        </div>

        <div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8"
        >
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={100 + idx * 60}
            >
              <div className={`absolute inset-0.5 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div 
                className="relative flex flex-col items-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl group-hover:border-blue-500/30 transition-all duration-300 h-full"
                tabIndex={0}
                aria-label={skill.name}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 rounded-2xl bg-gray-800/50 group-hover:bg-gray-800/80 transition-all duration-300">
                  <span className="text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                </div>
                <span className="text-base md:text-lg font-medium text-gray-100 group-hover:text-white transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
