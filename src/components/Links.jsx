import React from 'react';

import { OutboundLink } from 'gatsby-plugin-google-analytics'

import links from '../content/links.json';

const Links = ({ size = 100 }) =>
  (
    <div>
      <ul className="social-links" style={{fontSize: `${size}%`}}>
        {links.map(({icon, link}) => (
          <li>
            <OutboundLink href={link} target="_blank" rel="noopener noreferrer">
              <i className={`fa ${icon}`}></i>
            </OutboundLink>
          </li>
        ))}
      </ul>
    </div>
  );

export default Links;
