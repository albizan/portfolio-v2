import React from 'react';
import SkillBar from '../SkillBar';

import { Subtitle } from '../Resume/styled';
import { useTranslation } from 'react-i18next';

const Skills = (props) => {
  const { t } = useTranslation();
  return (
    <div className="px-0">
      <Subtitle className="text-lg sm:text-xl">Soft Skills</Subtitle>
      <SkillBar skillName={t('Soft SKill Curiosity')} width="90" />
      <SkillBar skillName={t('Soft SKill Organization')} width="80" />
      <SkillBar skillName={t('Soft SKill Persistance')} width="90" />
      <SkillBar skillName={t('Soft SKill Teamwork')} width="80" />
      <SkillBar skillName={t('Soft SKill Learn')} width="100" />
    </div>
  );
};

export default Skills;
