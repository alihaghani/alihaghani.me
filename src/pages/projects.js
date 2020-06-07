import React from 'react';

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsSection from '../components/ProjectsSection'

import projects from '../content/projects';

const ProjectsPage = () =>
  (
    <Layout shouldRenderTitle shouldRenderFooter>
      <SEO title="Projects"/>
      <ProjectsSection
        title="Projects"
        description="Some of the things I've worked on."
        projects={projects}
      />
    </Layout>
  )

export default ProjectsPage;
