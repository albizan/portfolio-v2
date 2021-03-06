import React from 'react';
import Project from '../Project';
import { projects } from '../../data/projects.json';
import { useTranslation } from 'react-i18next';

const Projects = (props) => {
  const { t } = useTranslation();
  return (
    <section className="container px-8 mx-auto mt-16">
      <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-black tracking-none">
        {t('projects_title')}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">{renderProjects()}</div>
    </section>
  );
};

function renderProjects() {
  return projects.map((p) => <Project key={p.id} project={p} />);
}

export default Projects;
