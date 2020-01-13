import React from 'react';

const AboutSection = ({ title, description, image }) => {
  return (
    <section id="about" className="pfblock pfblock-gray">
      <div className="container">
        <div className="row">

          <div className="col-sm-6 col-sm-offset-3">
            <div className="pfblock-header wow fadeInUp">
              <h2 className="pfblock-title">{title}</h2>
              <div className="pfblock-line"></div>
              <div>
                <img src={image} alt="Ali Haghani" />
              </div>
              <div className="pfblock-subtitle">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
