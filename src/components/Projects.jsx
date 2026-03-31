import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import project1Img from '../assets/project1.png'; // Generated project image

const Projects = () => {
  const projectData = [
    {
      title: "Facial Recognition Model",
      description: "A highly accurate facial recognition system built with Python and modern deep learning frameworks. Scans and identifies individuals in real-time with an interactive visualization dashboard.",
      techStack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
      github: "https://github.com/Rishaadvp",
      live: "#",
      image: project1Img
    },
    {
      title: "Data Analytics Dashboard",
      description: "Comprehensive data visualization dashboard that processes large datasets and presents actionable insights through interactive charts and reports.",
      techStack: ["React", "Python", "SQL", "Pandas"],
      github: "https://github.com/Rishaadvp",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-24 flex flex-col justify-center relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mr-2">03.</span> 
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 animate-fade-up hover:-translate-y-2"
              style={{ animationDelay: `${0.2 * idx}s` }}
            >
              <div className="relative h-64 overflow-hidden w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-3 bg-white/10 hover:bg-cyan-500/20 text-slate-100 hover:text-cyan-400 rounded-full border border-white/20 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub size={24} />
                    </a>
                    {project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-white/10 hover:bg-purple-500/20 text-slate-100 hover:text-purple-400 rounded-full border border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
