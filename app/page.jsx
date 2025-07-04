import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Web Development Services | Custom Websites',
  description: 'Professional web development services to help your business grow online. Get a custom website that converts visitors into customers.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <AboutUs />
        <Projects />
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
