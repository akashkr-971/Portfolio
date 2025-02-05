import React from 'react';
import './Project.css';
import HMS from '../../static/HMS.png';
import BRC from '../../static/BRC.png';
import LMS from '../../static/LMS.png';


function Project() {
  const projects = [
    {
      title: 'HouseHold Management System',
      description: 'A full-stack web application built using Django a python web framework and added payment integration using Razorpay',
      image: HMS,
      technologies: ['Django', 'Mysql', 'HTML', 'CSS', 'Razorpay'],
      link: 'https://github.com/akashkr-971/Household-management-system'
    },
    {
      title: 'Library Management System',
      description: 'A PHP based web application for managing the library books and students details',
      image: LMS,
      technologies: ['PHP', 'Mysql', 'Javascript', 'HTML', 'CSS'],
      link: 'https://github.com/akashkr-971/Library-Management'

    },
    {
      title: 'Book Reading Companion',
      description: 'A Flutter based app for book lovers to listen to books by uploading the book to the system',
      image: BRC,
      technologies: ['Flutter', 'Dart', 'Sqlite'],
      link: 'https://github.com/akashkr-971/Book-Reader'

    }
  ];

  return (
    <div className="projects-container" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-link-container">
                <a href={project.link} target='_blank' className="project-link">
                  <i className="bi bi-github"></i>
                  <span>View Project</span>
                </a>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Project;