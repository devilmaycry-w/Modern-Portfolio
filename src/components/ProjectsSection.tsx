
import React from 'react';

const ProjectCard = ({ title, description, tags, githubLink, isFullstack = false }) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`h-2 ${isFullstack ? 'bg-gradient-to-r from-primary to-purple-500' : 'bg-primary'}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 bg-secondary text-foreground/80 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block text-primary hover:underline font-medium"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie Watchlist Platform",
      description: "Developed a Netflix-inspired web app enabling users to search movies, manage watchlists, and share them publicly.",
      tags: ["React", "Tailwind CSS", "Vite", "TMDB API", "Bolt.new"],
      githubLink: "https://github.com/devilmaycry-w/movie-watchlist-platform",
      isFullstack: true
    },
    {
      title: "Real-Time Messaging App",
      description: "This Chat-App is a real-time messaging application built using Spring Boot and WebSocket. It allows users to send and receive messages instantly.",
      tags: ["Java", "Spring Boot", "MySQL", "JWT", "Spring Security", "WebSocket"],
      githubLink: "https://github.com/devilmaycry-w/chat-app"
    },
    {
      title: "Stock Trading Simulator",
      description: "Developed a web-based stock trading simulator that enables X users to practice (real time + mock )trading stocks in a risk-free environment.",
      tags: ["Java", "Spring Boot", "Vanilla JS", "Chart.js", "MySQL", "REST API"],
      githubLink: "https://github.com/devilmaycry-w/stock-trading-simulation"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              isFullstack={project.isFullstack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
