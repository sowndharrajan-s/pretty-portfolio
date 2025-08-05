import { ArrowRight, ExternalLink, Github, ChevronUp } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Event Mangagement System",
    description: "A role-based event management platform for colleges with event creation, approval, registration form, and feedback features.",
    image: "./projects/event.png",
    tags: ["React", "TailwindCSS", ],
    demoUrl: "https://shanmugaeventmanagementportal.web.app/event",
    githubUrl: "https://github.com/sowndharrajan-s",
  },
  {
    id: 2,
    title: " Real Esatate",
    description:
      "A responsive real estate listing site with property cards and a modern, mobile-friendly UI.",
    image: "./projects/real-estate.png",
    tags: ["react JS", "Tailwind CSS"],
    demoUrl: "https://real-estate-orpin-eta.vercel.app/",
    githubUrl: "https://github.com/sowndharrajan-s/real-estate",
  },
  {
    id: 3,
    title: "Ecommerce",
    description:
      "A clean and responsive front-end e-commerce site with product browsing and cart interface.",
    image: "./projects/simple-ecomm.png",
    tags: ["React", "tailwind CSS"],
    demoUrl: "https://ecomm-lovat-two.vercel.app/",
    githubUrl: "https://github.com/sowndharrajan-s/ecomm",
  },
  {
    id: 4,
    title: "Food Store",
    description:
      "A simple and responsive food ordering UI with clean layout, modern styling, and mobile-friendly design.",
    image: "./projects/food.png",
    tags: ["HTML", "TailwindCSS"],
    demoUrl: "https://foodstore-two.vercel.app/",
    githubUrl: "https://github.com/sowndharrajan-s/foodvercel",
  },
  {
    id: 5,
    title: "personal Portfolio",
    description:
      "A responsive personal portfolio showcasing projects, skills, and contact information with a modern UI.",
    image: "./projects/p1.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://sowndhar354.vercel.app/",
    githubUrl: "https://github.com/sowndharrajan-s/pretty-portfolio",
  },
  {
    id: 6,
    title: "Simple Pagination",
    description:
      "A basic pagination component to navigate through lists or data in pages with clean UI and responsive design.",
    image: "./projects/pagination.png",
    tags: ["React" ,"CSS"],
    demoUrl: "https://pagination-delta-one.vercel.app/",
    githubUrl: "https://github.com/sowndharrajan-s/pagination",
  },
];

export const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          {visibleProjects < projects.length ? (
            <button
              onClick={showMoreProjects}
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
              Show More Projects <ArrowRight size={16} />
            </button>
          ) : visibleProjects > 3 && (
            <button
              onClick={showLessProjects}
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
              Show Less <ChevronUp size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};