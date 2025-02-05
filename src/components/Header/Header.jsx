import "./Header.css";

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
  };

  return (
    <header className="header">
      <nav>
        <div className="name">
          <span className="logo">AK</span>
          <span className="full-name">Akash KR</span>
        </div>
        <div className="links">
          <a href="#" onClick={scrollToTop} className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button onClick={handleResumeClick} className="nav-link resume-btn">Resume</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
