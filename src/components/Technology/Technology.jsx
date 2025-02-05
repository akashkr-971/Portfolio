import React from 'react';
import './Technology.css';

function Technology() {
  const frontendTechnologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: 'bi bi-filetype-js' },
    { name: 'HTML5', icon: 'bi bi-filetype-html' },
    { name: 'CSS3', icon: 'bi bi-filetype-css' },
    { name: 'TypeScript', icon: 'bi bi-filetype-tsx' },
    { name: 'Flutter', icon: 'bi bi-phone' },
    { name: 'Three.js', icon: 'bi bi-filetype-js' },
    { name: 'Tailwind CSS', icon: 'bi bi-filetype-css' },
    { name: 'Bootstrap', icon: 'bi bi-bootstrap' },
  ];


  const backendTechnologies = [
    { name: 'Node.js', icon: '💚' },
    { name: 'Python', icon: 'bi bi-filetype-py' },
    { name: 'Java', icon: 'bi bi-filetype-java' },
    { name: 'Django', icon: 'bi bi-code-slash' },
    { name: 'MySQL', icon: 'bi bi-database' },
    { name: 'MongoDB', icon: 'bi bi-database-fill' },
    { name: 'Git', icon: 'bi bi-git' },
    { name: 'Docker', icon: 'bi bi-boxes' },
    { name: 'Firebase', icon: 'bi bi-fire' },
    { name: 'Supabase', icon: 'bi bi-fire' },
    { name: 'PHP', icon: 'bi bi-filetype-php' }
  ];

  const renderTechItems = (technologies) => (
    [...technologies, ...technologies].map((tech, index) => (
      <div key={index} className="tech-item">
        {tech.icon.startsWith('bi') ? (
          <i className={`${tech.icon} tech-icon`}></i>
        ) : (
          <span className="tech-icon">{tech.icon}</span>
        )}
        <span className="tech-name">{tech.name}</span>
      </div>
    ))
  );

  return (
    <div className="technologies-container">
      <h2 className="section-title">Technologies</h2>
      <div className="marquee-wrapper">
        <div className="marquee-container">
          <div className="marquee-content">
            {renderTechItems(frontendTechnologies)}
          </div>
        </div>
        <div className="marquee-container reverse">
          <div className="marquee-content">
            {renderTechItems(backendTechnologies)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;