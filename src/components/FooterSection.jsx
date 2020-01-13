import React from 'react';

import Links from './Links';

const FooterSection = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Links />

            <p className="heart">
              Made with <span className="fa fa-heart fa-2x animated pulse"></span> in Vancouver & San Francisco
            </p>
            <p className="copyright">
              {`© ${new Date().getFullYear()} Ali Haghani`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
