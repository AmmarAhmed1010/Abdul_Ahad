import { FiCode, FiLayers, FiSmartphone, FiZap } from 'react-icons/fi';

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
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
