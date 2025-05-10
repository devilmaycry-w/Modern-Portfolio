
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-primary mb-3 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Ankrit Maity
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            Java Backend Developer, Vibe Coder, Prompt Engineer
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            Building scalable web solutions with Java and modern frameworks
          </p>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Me
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
