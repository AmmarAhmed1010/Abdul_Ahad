import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Waves from '../components/Waves';

  export const metadata = {
    title: 'Web Development Services | Custom Websites',
    description: 'Professional web development services to help your business grow online. Get a custom website that converts visitors into customers.',
  };



export default function Home() {
  return (
    
    <div className="">
   
      <Navbar />
      <main>
        {/* Full-page animated background */}
        <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none">
                  {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-800 opacity-20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

       </div>
        <Hero />
        <AboutUs />
        <Projects />
        <Skills />
        <Services />
        <ContactForm />
      </main>
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} WebDev Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
