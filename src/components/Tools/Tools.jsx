import React from 'react';
import { useTranslation } from 'react-i18next';
import { tools } from '../../data/tools.json';

import ToolCard from '../ToolCard';
const Tools = (props) => {
  const { t } = useTranslation();
  return (
    <section id="tools" className="container px-8 mx-auto mt-16">
      <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-black tracking-none">
        {t('Tools Section Title')}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
        {renderTools(tools)}
      </div>
    </section>
  );
};

function renderTools(tools) {
  return tools.map((t) => {
    return <ToolCard key={t.id} name={t.name} image={t.image} description={t.description} />;
  });
}

export default Tools;
