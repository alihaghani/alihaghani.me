import React from 'react';

const Links = ({ size = 100 }) => {
  return (
    <div>
      <ul className="social-links" style={{fontSize: `${size}%`}}>
        <li>
          <a
            className="wow fadeInUp"
            data-wow-delay=".1s"
            href="http://twitter.com/iAligator"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </li>

        <li>
          <a
            className="wow fadeInUp"
            data-wow-delay=".5s"
            href="https://github.com/alihaghani"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>

        <li>
          <a
            className="wow fadeInUp"
            data-wow-delay=".5s"
            href="https://linkedin.com/in/alihaghani"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a href="http://facebook.com/alihaghani" className="wow fadeInUp">
            <i className="fa fa-facebook-official"></i>
          </a>
        </li>

        <li>
          <a href="https://instagram.com/iAligator" className="wow fadeInUp" data-wow-delay=".5s">
            <i className="fa fa-instagram"></i>
          </a>
        </li>

        <li>
          <a href="https://youtube.com/iAligator" className="wow fadeInUp" data-wow-delay=".5s">
            <i className="fa fa-youtube"></i>
          </a>
        </li>

        <li>
          <a href="/contact" className="wow fadeInUp" data-wow-delay=".5s">
            <i className="fa fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
