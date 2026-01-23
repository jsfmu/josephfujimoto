import { useRef } from 'react';
import portrait from '../assets/jf.jpg';

const Hero = () => {
  const photoRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = photoRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const percentX = offsetX / rect.width;
    const percentY = offsetY / rect.height;
    const rotateRange = 12;

    const rotateY = (percentX - 0.5) * rotateRange * 2;
    const rotateX = -(percentY - 0.5) * rotateRange * 2;

    card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
    card.style.setProperty('--tilt-scale', '1.04');
    card.style.setProperty('--tilt-glow-x', `${percentX * 100}%`);
    card.style.setProperty('--tilt-glow-y', `${percentY * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = photoRef.current;
    if (!card) return;

    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--tilt-scale', '1');
    card.style.setProperty('--tilt-glow-x', '50%');
    card.style.setProperty('--tilt-glow-y', '50%');
  };

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
          <p className="hero-description">
            <p className="section-subtitle">
          I’m a Computer Science graduate from CSU East Bay who likes building real, usable tools:
          deployed web apps, AI, and data-driven projects
        </p>
        </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://docs.google.com/document/d/1KVzaxhOD8SlSacuSQQRzu0YshUTyehIgp9rRBBtqtj8/edit?tab=t.0#heading=h.7bjr5znnnhxr"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/jsfmu"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          <div
            className="hero-photo"
            ref={photoRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={portrait} alt="Joseph Fujimoto portrait" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
