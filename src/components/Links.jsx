import React from 'react';

import links from '../content/links.json';

const Links = ({ size = 100 }) =>
  (
    <div>
      <ul className="social-links" style={{fontSize: `${size}%`}}>
        {links.map(({icon, link}) => (
          <li>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className={`fa ${icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

export default Links;
