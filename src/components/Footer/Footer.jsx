import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Me</h3>
          <p>Email: akashkr971@gmail.com</p>
          <p>Phone: +91 9562699360</p>
          <p>Location: India</p>
        </div>

        <div className="footer-section">
          <h3>Social Links</h3>
          <div className="social-links">
            <a href="https://github.com/akashkr-971" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/akash-kr-kochi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/akashkr971" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AKASH KR. All rights reserved.</p>
      </div>
    </div>

  );
}

export default Footer;
