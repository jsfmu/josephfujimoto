const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-subtitle">
          <span className="typewriter">
            <span className="typewriter-text">Hi, I&apos;m</span>
            <span className="typewriter-cursor" aria-hidden="true">
              _
            </span>
          </span>
        </div>
        <h1 className="hero-title">Joseph Fujimoto</h1>
        <div className="hero-tagline">Software Engineer · AI &amp; Data</div>
        <p className="hero-description">I’m a CS grad who builds practical software, AI, and data projects.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
          <a className="btn btn-secondary" href="https://github.com/jsfmu" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="btn btn-secondary" href="https://www.linkedin.com/in/joseph-fujimoto/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

