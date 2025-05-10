
import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <div className="bg-secondary hover:bg-secondary/70 transition-colors px-4 py-2 rounded-md text-center">
      <span className="font-medium">{skill}</span>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    "Java",
    "C++",
    "Spring Boot", 
    "MySQL", 
    "Frontend Design", 
    "Backend Setup", 
    "Rest API",
    "Websocket",
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
