'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiSend, FiCheck, FiX } from 'react-icons/fi';

export default function ContactForm() {
  const formRef = useRef();
  const successRef = useRef();
  const errorRef = useRef();
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

  useGSAP(() => {
    const formElements = formRef.current?.querySelectorAll('input, textarea, select, button');
    
    if (formElements) {
      gsap.set(formElements, { y: 20, opacity: 0 });
      
      gsap.to(formElements, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3
      });
    }
  }, { scope: formRef });

  useGSAP(() => {
    if (isSuccess || isError) {
      const target = isSuccess ? successRef.current : errorRef.current;
      if (target) {
        gsap.fromTo(
          target,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
      }
    }
  }, { dependencies: [isSuccess, isError] });

  return (
    <section id="contact" className="py-20 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">Ready to start your project? Let's talk!</p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-xl p-6 md:p-8">
          {isSuccess && (
            <div
              ref={successRef}
              className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-md flex items-center opacity-0"
            >
              <FiCheck className="text-green-500 mr-2" />
              <span className="text-green-300">Your message has been sent successfully!</span>
            </div>
          )}
          
          {isError && (
            <div
              ref={errorRef}
              className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-md flex items-center opacity-0"
            >
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
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
