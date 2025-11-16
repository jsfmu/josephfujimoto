const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-copy">
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
            <a className="btn btn-primary" href="https://docs.google.com/document/d/1KVzaxhOD8SlSacuSQQRzu0YshUTyehIgp9rRBBtqtj8/edit?tab=t.0#heading=h.7bjr5znnnhxr" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <a className="btn btn-secondary" href="https://github.com/jsfmu" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/joseph-fujimoto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-photo">
            <div className="hero-photo-glow" aria-hidden="true" />
            <img src="/src/assets/jf.jpg" alt="Joseph Fujimoto portrait" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

