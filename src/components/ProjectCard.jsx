const ProjectCard = ({ name, tech, description, githubUrl, liveUrl }) => {
  return (
    <article className="card">
      <h3>{name}</h3>
      <div className="project-tech">{tech}</div>
      <p>{description}</p>
      {(githubUrl || liveUrl) && (
        <div className="project-links">
          {githubUrl && (
            <a className="project-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          )}
          {liveUrl && (
            <a className="project-link" href={liveUrl} target="_blank" rel="noopener noreferrer">
              View Live →
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;

