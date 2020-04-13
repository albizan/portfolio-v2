import React from 'react';
import { useTranslation } from 'react-i18next';

import Education from '../Education';
import Skills from '../Skills';
import SoftSkills from '../SoftSkills';

const Resume = (props) => {
  const { t } = useTranslation();
  return (
    <section className="container px-8 mx-auto mt-16">
      <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-black tracking-none">
        {t('resume_title')}
      </h2>
      <div className="sm:flex sm:flex-wrap">
        <div className="sm:w-1/2">
          <Education />
        </div>
        <div className="sm:w-1/2">
          <Skills />
        </div>
        <div className="w-full">
          <SoftSkills />
        </div>
      </div>
    </section>
  );
};

export default Resume;
