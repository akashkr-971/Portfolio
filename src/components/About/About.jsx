import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p className="about-description">
                        Hi there! I'm Akash KR, a passionate Full Stack Developer based in India.
                        I specialize in building robust web applications using modern technologies.
                    </p>

                    <div className="about-details">
                        <div className="detail-item">
                            <h3>Education</h3>
                            <p>Integrated Masters in Computer Applications</p>
                            <p>SCMS School of Technology and Management</p>
                            <p>2021 - 2026</p>
                        </div>

                        <div className="detail-item">
                            <h3>Interests</h3>
                            <p>Web Development</p>
                            <p>Mobile App Development</p>
                            <p>Open Source</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 