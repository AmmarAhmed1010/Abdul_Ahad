'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiSmartphone, FiZap } from 'react-icons/fi';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Services() {
  const services = [
    {
      icon: <FiCode className="h-10 w-10 text-blue-500" />,
      title: 'Custom Web Development',
      description: 'Tailored websites built with the latest technologies to meet your specific business needs.'
    },
    {
      icon: <FiSmartphone className="h-10 w-10 text-blue-500" />,
      title: 'Responsive Design',
      description: 'Websites that look and function perfectly on all devices, from desktops to smartphones.'
    },
    {
      icon: <FiLayers className="h-10 w-10 text-blue-500" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement.'
    },
    {
      icon: <FiZap className="h-10 w-10 text-blue-500" />,
      title: 'Fast & Optimized',
      description: 'Lightning-fast websites optimized for performance and search engines.'
    }
  ];

  return (
    <section id="services" className="relative py-24overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Comprehensive solutions to bring your digital vision to life
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full flex flex-col group-hover:border-blue-500/30 transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                  {React.cloneElement(service.icon, {
                    className: `${service.icon.props.className} transform group-hover:scale-110 transition-transform duration-300`
                  })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 flex-1">{service.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-700/50 group-hover:border-gray-600/50 transition-colors duration-300">
                  <span className="inline-flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    Learn more
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
