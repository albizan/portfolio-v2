import React from 'react';
import SkillBar from '../SkillBar';

import { Subtitle } from '../Resume/styled';
import { useTranslation } from 'react-i18next';

const Skills = (props) => {
  const { t } = useTranslation();
  return (
    <div className="px-0">
      <Subtitle className="text-lg sm:text-xl">Soft Skills</Subtitle>
      <SkillBar skillName={t('soft_skill_curiosity')} width="90" />
      <SkillBar skillName={t('soft_skill_organization')} width="80" />
      <SkillBar skillName={t('soft_skill_persistance')} width="90" />
      <SkillBar skillName={t('soft_skill_teamwork')} width="80" />
      <SkillBar skillName={t('soft_skill_learning')} width="100" />
    </div>
  );
};

export default Skills;
