import React from 'react';

const ProjectBlock = ({
  name,
  description,
  url,
  imagePath,
}) => {
  return (
    <div className="col-xs-12 col-sm-4 col-md-4">
      <div className="grid">
        <a target="_blank" href={url}>
          <figure className="effect-bubba">
            <img src={imagePath} alt={name}/>
            <figcaption>
              <h2><span>{name}</span></h2>
              <p>{description}</p>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};

export default ProjectBlock;
