import React from 'react';

// Add liveLink to props
const ProjectCard = ({ title, description, tags, githubLink, isFullstack = false, liveLink }) => {
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

        {/* LIVE link with blinking green dot */}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 font-bold mr-4"
          >
            <span className="relative flex h-3 w-3 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            LIVE
          </a>
        )}

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
      title: "Dev-Elevate: Interactive Coding Challenges",
      description: "Master JavaScript and Python with interactive coding challenges, progressive hints, and real-time feedback in VS Code.",
      tags: ["Progressive hints", "Real time feedback", "many more feat. soon"],
      githubLink: "https://github.com/devilmaycry-w/develevate",
      isFullstack: true,
      liveLink: "https://marketplace.visualstudio.com/items?itemName=DevElevate.develevate"
    },
    {
      title: "ReWear - Sustainable Clothing Community Brand",
      description: "ReWear is more than just an app—it's a movement to make fashion circular. Built at Odoo Hackathon 2025.",
      tags: ["React", "Tailwind CSS", "Firebase"],
      isFullstack: true,
      liveLink: "https://rewear-clothing-brand.netlify.app/"
    },
    {
      title: "CodexCity - Email Automation Platform",
      description: "Codexcity is a modern web app that empowers small businesses to automate their mail communication. It makes it easy for users to send professional, personalized emails with integration from SendGrid API—like order confirmation, support replies, and notification—without technical hassle.",
      tags: ["React", "Gmail API", "Tailwind CSS", "Supabase"],
      githubLink: "https://github.com/devilmaycry-w/Email-Automation",
      isFullstack: true,
      liveLink: "https://codexcity.xpensive.me"
    },
    {
      title: "Legacy Vault: Digital Memory Vault",
      description: "To empower individuals to own and organize their digital legacy—notes, credentials, documents, memories—and pass them on with confidence. Legacy is more than a vault; it's a living testament to show your family's journey.",
      tags: ["React", "Firebase Firestore", "Firebase Auth", "Tailwind CSS"],
      githubLink: "https://github.com/devilmaycry-w/legacy-vault",
      isFullstack: true,
      liveLink: "https://legacy-memories.netlify.app"
    },
    {
      title: "StoryScape: AI-Powered Storytelling",
      description: "StoryScape is a mobile-first web app that turns locations into AI-generated, shareable stories—blending history, folklore, and culture with visuals for an immersive experience.",
      tags: ["Supabase", "leaflet.js"],
      githubLink: "https://github.com/devilmaycry-w/storyscape-voyager-quest",
      isFullstack: true,
      liveLink: "https://storyscape.xpensive.me"
    },
    {
      title: "Movie Watchlist Platform",
      description: "Developed a Netflix-inspired web app enabling users to search movies, manage watchlists, and share them publicly.",
      tags: ["React", "Tailwind CSS", "Vite", "TMDB API"],
      githubLink: "https://github.com/devilmaycry-w/movie-watchlist-platform",
      isFullstack: true,
      liveLink: "https://remarkable-starship-e2d83e.netlify.app"
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
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
