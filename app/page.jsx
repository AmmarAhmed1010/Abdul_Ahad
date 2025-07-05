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
          <Waves
            lineColor="#1E90FF"
            backgroundColor="rgba(173, 216, 230, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
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
