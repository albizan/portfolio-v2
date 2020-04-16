import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useHistory, Redirect } from 'react-router-dom';
import { LinkButton } from './styled';

const Projectpage = (props) => {
  const { t } = useTranslation();
  const history = useHistory();
  let project;
  if (props.location.state) {
    project = props.location.state.project || null;
  } else {
    project = null;
  }

  if (project === null) {
    return <Redirect to="/" />;
  }
  console.log(project);
  return (
    <div className="h-screen w-full px-4 pt-4">
      <section className="container mx-auto">
        <div className="go-back-wrapper flex items-center h-20 pt-2">
          <div onClick={() => history.goBack()} className="go-back flex items-center">
            <FiArrowLeft className="text-4xl inline-block" />
            <span className="ml-1 font-bold text-xl leading-none tracking-tighter">Go Back</span>
          </div>
        </div>
        <h1 className="mt-5 font-bold text-2xl">{t(project.title)}</h1>
        <div className="flex justify-start items-center">
          <div className="link buttons">{renderLinks(project.links)}</div>
          <div className="link buttons">{renderRepos(project.repos)}</div>
        </div>
      </section>
    </div>
  );
};

function renderLinks(links) {
  return links.map((link) => {
    return (
      <LinkButton target="_blank" key={link.url} className="text-xs py-1 px-2 mr-1" href={link.url}>
        {link.label}
      </LinkButton>
    );
  });
}

function renderRepos(repos) {
  return repos.map((repo) => {
    return (
      <LinkButton target="_blank" key={repo.url} className="text-xs py-1 px-2 mr-1" href={repo.url}>
        {repo.label}
      </LinkButton>
    );
  });
}
export default Projectpage;
