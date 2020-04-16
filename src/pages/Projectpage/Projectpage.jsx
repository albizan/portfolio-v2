import React from 'react';
import { FiArrowLeft, FiGithub, FiChrome } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useHistory, Redirect } from 'react-router-dom';
import { LinkButton, ColoredLink } from './styled';
import { useEffect } from 'react';

const Projectpage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { t } = useTranslation();
  const history = useHistory();
  const project = props.location.state ? props.location.state.project : undefined;

  if (project === undefined) {
    return <Redirect to="/" />;
  }
  return (
    <div className="w-full min-h-screen px-8 pt-4">
      <section className="container mx-auto">
        <div className="go-back-wrapper flex items-center h-20 pt-2">
          <div
            onClick={() => history.goBack()}
            className="go-back flex items-center cursor-pointer"
          >
            <FiArrowLeft className="text-4xl inline-block" />
            <span className="ml-1 font-bold text-xl leading-none tracking-tighter">Go Back</span>
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <img
            src={project.img}
            alt="project screenshot"
            className="hidden md:block h-32 w-32 rounded-full object-cover object-left"
          />
          <div className="md:ml-4">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">{t(project.title)}</h1>
            <div className="flex justify-start items-center">
              <div className="link buttons">{renderLinks(project.links)}</div>
              <div className="link buttons">{renderRepos(project.repos)}</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-8 text-lg md:text-xl lg:text-2xl font-bold">
            {t('project_description')}
          </h2>
          <p className="text-justify sm:text-left tracking-wide mt-1 sm:text-xl">
            {t(project.description)}
          </p>
          <h2 className="mt-8 text-lg md:text-xl lg:text-2xl font-bold">
            {t('project_libraries')}
          </h2>
          <div className="mt-1 pb-20">{renderLibraries(project.libraries)}</div>
        </div>
      </section>
    </div>
  );
};

function renderLinks(links) {
  return links.map((link) => (
    <LinkButton
      target="_blank"
      key={link.url}
      className="mt-2 py-1 px-2 mr-2 md:text-lg lg:text-xl"
      href={link.url}
    >
      <FiChrome className="inline text-lg" /> {link.label}
    </LinkButton>
  ));
}

function renderRepos(repos) {
  return repos.map((repo) => (
    <LinkButton
      target="_blank"
      key={repo.url}
      className="mt-2 py-1 px-2 mr-2 md:text-lg lg:text-xl"
      href={repo.url}
    >
      <FiGithub className="inline text-lg" /> {repo.label}
    </LinkButton>
  ));
}

function renderLibraries(libs) {
  return libs.map((lib) => (
    <ColoredLink
      target="_blank"
      key={lib.url}
      className="mr-3 text-lg md:text-xl font-bold"
      href={lib.url}
    >
      {lib.label}
    </ColoredLink>
  ));
}
export default Projectpage;
