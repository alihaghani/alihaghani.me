import React from 'react';

import ProjectBlock from "./ProjectBlock";

const ProjectsSection = ({ title, description, projects }) => {
  return (
    <section id="portfolio" className="pfblock">
      <div className="container">
        <div className="row">

          <div className="col-sm-6 col-sm-offset-3">
            <div className="pfblock-header">
              <h2 className="pfblock-title">{title}</h2>
              <div className="pfblock-line"></div>
              <div className="about-text">
                {description}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {projects.map(project => (
            <ProjectBlock {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
