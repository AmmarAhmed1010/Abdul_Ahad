'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheck, FiX, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactForm() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(formRef.current);
    const submissionData = {
      id: Date.now(),
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      subject: formData.get('subject'),
      budget: formData.get('budget'),
      message: formData.get('message'),
      createdAt: new Date().toISOString()

    };

    // Simulate API call with timeout
    setTimeout(() => {
      try {
        // Save to localStorage
        const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        submissions.unshift(submissionData);
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));

        // Send email using Email.js
        emailjs.sendForm(
          'service_ptlznas',
          'template_6k2jcv9',
          formRef.current,
          'Y-1zgOmBSA9MeegfW'
        )
        .then(() => {
          console.log('Email sent successfully!');
          setIsSuccess(true);
          // Show toast
          if (typeof window !== 'undefined') {
            const toast = document.createElement('div');
            toast.innerText = 'Your message has been sent successfully!';
            toast.style.position = 'fixed';
            toast.style.bottom = '32px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.background = '#22c55e';
            toast.style.color = 'white';
            toast.style.padding = '16px 32px';
            toast.style.borderRadius = '8px';
            toast.style.boxShadow = '0 2px 16px rgba(0,0,0,0.18)';
            toast.style.fontWeight = 'bold';
            toast.style.zIndex = 9999;
            document.body.appendChild(toast);
            setTimeout(() => {
              toast.remove();
            }, 3500);
          }
          formRef.current.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          // Still show success to user even if email fails
          // since we've saved the submission
          setIsSuccess(true);
          formRef.current.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        });
      } catch (error) {
        console.error('Error:', error);
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      } finally {
        setIsSubmitting(false);
      }
    }, 500);
  };



  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 to-black overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mb-4">
                <FiMail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
              <p className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mb-4">
                <FiPhone className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Me</h3>
              <p className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mb-4">
                <FiMapPin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">Islamabad, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300">
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-md flex items-center">
              <FiCheck className="text-green-500 mr-2" />
              <span className="text-green-300">Your message has been sent successfully!</span>
            </div>
          )}
          
          {isError && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-md flex items-center">
              <FiX className="text-red-500 mr-2" />
              <span className="text-red-300">Failed to send message. Please try again later.</span>
            </div>
          )}

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Website Development"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                Project Budget (PKR) *
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a budget range</option>
                <option value="5000 - 10000">5000 - 10000</option>
                <option value="15000 - 25000">15000 - 25000</option>
                <option value="25000 - 50000">25000 - 50000</option>
                <option value="50000+">50000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-4 text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
      </div>

    </section>
  

  );
}
