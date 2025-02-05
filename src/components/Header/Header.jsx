import { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const handleResumeClick = () => {
    const resumeUrl = '/AkashKrResume.pdf';
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'AkashKrResume.pdf';

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav>
        <div className="name">
          <span className="logo">AK</span>
          <span className="full-name">Akash KR</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </div>
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" onClick={scrollToTop} className="nav-link">Home</a>
          <a href="#about" onClick={handleLinkClick} className="nav-link">About</a>
          <a href="#projects" onClick={handleLinkClick} className="nav-link">Projects</a>
          <a href="#contact" onClick={handleLinkClick} className="nav-link">Contact</a>
          <button onClick={handleResumeClick} className="nav-link resume-btn">Resume</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
