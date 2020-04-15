import React from 'react';
import Pill from '../Pill';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

import { ProjectCard, ProjectButton } from './styled';

const Project = ({ project }) => {
  const { t } = useTranslation();
  return (
    <ProjectCard className="overflow-hidden shadow-md hover:shadow-2xl mb-8 relative">
      <LazyLoadImage
        className="object-cover object-center h-48 md:h.56 lg:h-64 w-full"
        alt="Screenshot progetto"
        src={project.img}
      ></LazyLoadImage>
      <div className="card-content px-5 mt-4">
        <div className="pills flex flex-wrap justify-center md:justify-start">
          {renderPills(project.tags)}
        </div>
        <div className="card-title mt-3">
          <h4 className="text-lg font-black tracking-wide">{t(project.title)}</h4>
          <p className="mt-1">{t(project.brief_description)}</p>
        </div>
        <div className="libraries"></div>
      </div>
      <div className="card-footer mx-10 border-t project-show-button flex justify-center items-center py-3 absolute bottom-0 right-0 left-0">
        {/* // ProjectButton is a React Router Link component styled with styled-components */}
        <ProjectButton
          to={`/project/${project.id}`}
          className="inline-block font-black rounded-full tracking-tight uppercase py-1 px-3"
        >
          {t('show_more_button')}
        </ProjectButton>
      </div>
    </ProjectCard>
  );
};

function renderPills(tags) {
  return tags.map((t) => <Pill key={t} value={t} />);
}

/* function renderLibraries(libraries) {
  if (libraries.length !== 0) {
    return libraries.map((l) => (
      <span className="mr-2 text-sm inline-block" key={l}>
        {l}
      </span>
    ));
  }
} */

export default Project;
