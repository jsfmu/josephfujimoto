import { experience } from '../data/experience.js';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-heading">Experience</h2>
        <p className="section-subtitle">
          Impactful roles where I delivered end-to-end solutions and collaborated across teams.
        </p>
        <div className="cards-grid">
          {experience.map((role) => (
            <article className="card" key={`${role.company}-${role.title}`}>
              <div className="card-header">
                <h3>{role.title}</h3>
                <div className="card-meta">
                  <span>{role.company}</span>
                  <span>{role.location}</span>
                  <span>
                    {role.start} — {role.end}
                  </span>
                </div>
              </div>
              <ul className="card-list">
                {role.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

