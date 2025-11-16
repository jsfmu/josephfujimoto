import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <p className="section-subtitle">
          Selected work spanning AI, data tooling, and end-to-end software systems.
        </p>
        <div className="cards-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

