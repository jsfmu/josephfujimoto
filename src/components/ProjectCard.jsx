const ProjectCard = ({ name, tech, description, githubUrl }) => {
  return (
    <article className="card">
      <h3>{name}</h3>
      <div className="project-tech">{tech}</div>
      <p>{description}</p>
      <a className="project-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
        View on GitHub →
      </a>
    </article>
  );
};

export default ProjectCard;

