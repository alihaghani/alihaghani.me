import React from 'react';

import ProjectBlock from "./ProjectBlock";

const ProjectsSection = ({ title, description, projects }) => {
  return (
    <section id="portfolio">
      <div className="row">
        {projects.map(project => (
          <ProjectBlock {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
