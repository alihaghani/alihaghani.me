import React from 'react';

import { OutboundLink } from "gatsby-plugin-google-analytics"

const ProjectBlock = ({
  name,
  description,
  url,
  imagePath,
}) => {
  return (
    <div className="col-xs-12 col-sm-4 col-md-4">
      <div className="grid">
        <OutboundLink target="_blank" href={url}>
          <figure className="effect-bubba">
            <img src={imagePath} alt={name}/>
            <figcaption>
              <h2><span>{name}</span></h2>
              <p>{description}</p>
            </figcaption>
          </figure>
        </OutboundLink>
      </div>
    </div>
  );
};

export default ProjectBlock;
