const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          Joseph Fujimoto
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

