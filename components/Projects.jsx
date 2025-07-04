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
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.name + idx}
              className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag.name + i}
                      className={
                        "inline-block px-3 py-1 rounded-full text-xs font-semibold " +
                        (tag.color === "blue-text-gradient"
                          ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                          : tag.color === "green-text-gradient"
                          ? "bg-gradient-to-r from-green-600 to-green-400 text-white"
                          : tag.color === "pink-text-gradient"
                          ? "bg-gradient-to-r from-pink-600 to-pink-400 text-white"
                          : "bg-gray-700 text-white")
                      }
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-400 hover:text-blue-200 underline text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
