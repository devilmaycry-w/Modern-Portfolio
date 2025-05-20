
import React from 'react';
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8 leading-relaxed">
            I'm a passionate Backend developer with experience in Java, Spring Boot, REST APIs, & MySQL. 
            Currently working on side projects where I'm enhancing my skills in backend 
            development and learning to build scalable, efficient web applications.
          </p>
          
          <p className="text-lg mb-8 leading-relaxed">
            My approach combines technical expertise with creative problem-solving, allowing me to 
            develop robust solutions that meet both user needs and business requirements.
          </p>
          
          <div className="flex justify-center mt-10">
            <a 
              href="https://drive.google.com/file/d/1YlEZRK87Oaxcx3g5ucmXJhfyJwIWJdci/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
