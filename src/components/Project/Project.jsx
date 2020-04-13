import React from 'react';
import Pill from '../Pill';
import { useTranslation } from 'react-i18next';

import { ProjectCard, ProjectImage, ProjectButton } from './styled';

const Project = ({ project }) => {
  const { t } = useTranslation();
  return (
    <ProjectCard className="overflow-hidden shadow-md hover:shadow-2xl mb-8 relative">
      <ProjectImage loading="lazy" src={project.img} className="object-cover object-center" />
      <div className="card-content px-5 mt-4">
        <div className="pills flex flex-wrap justify-center sm:justify-start">
          {renderPills(project.tags)}
        </div>
        <div className="card-title mt-3 h-40">
          <h4 className="text-lg font-black tracking-wide">{t(project.title)}</h4>
          <p className="mt-1">{t(project.brief_description)}</p>
        </div>
        <div className="libraries">
          <p className="font-bold text-md">Librerie:</p>
          <div className="flex flex-wrap justify-start">{renderLibraries(project.libraries)}</div>
        </div>
      </div>
      <div className="card-footer mx-10 border-t project-show-button flex justify-center items-center py-3 absolute bottom-0 right-0 left-0">
        <ProjectButton className="inline-block font-black rounded-full tracking-tight uppercase py-1 px-3">
          {t('Show More')}
        </ProjectButton>
      </div>
    </ProjectCard>
  );
};

function renderPills(tags) {
  return tags.map((t) => <Pill key={t} value={t} />);
}

function renderLibraries(libraries) {
  if (libraries.length !== 0) {
    return libraries.map((l) => (
      <span className="mr-2 text-sm inline-block" key={l}>
        {l}
      </span>
    ));
  }
}

export default Project;
