import React from 'react';

import './App.css';
import './assets/css/style.css';
import './assets/css/animate.css';
import './assets/css/font-awesome.css';
import './assets/css/simple-line-icons.css';

import headshot from './assets/images/round.png'
import bio from './assets/content/bio';
import projects from './assets/content/projects';

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Home from "./components/Home";
import Header from "./components/Header";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div>
      <Home
        name='Ali Haghani'
        description='Enthusiast, software engineer, and entrepreneur. Currently at Twitter in San Francisco.'
      />
      <Header />
      <AboutSection
        title='About Me'
        description={bio}
        image={headshot}
      />
      <ProjectsSection
        title='My Projects'
        description="Some of the things I've worked on."
        projects={projects}
      />
      <ContactSection
        title='Contact'
        description="Say what's up."
        email='alihaghani96@gmail.com'
      />
      <FooterSection />
    </div>
  );
}

export default App;
