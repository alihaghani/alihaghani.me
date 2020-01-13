import React from 'react';
import Links from "./Links";

const Home = ({ name, description }) => {
  return (
    <section id="home" className="pfblock-image screen-height">
      <div className="home-overlay"></div>
      <div className="intro">
        <div className="start">Hello, my name is</div>
        <h1>{name}</h1>
        <div className="start">{description}</div>

        <div className="pfblock-line"></div>


        <Links size={250} />
      </div>

      <a href="#about">
        <div className="scroll-down">
          <span>
              <i className="fa fa-angle-down fa-2x"></i>
          </span>
        </div>
      </a>

    </section>
  );
};

export default Home;
