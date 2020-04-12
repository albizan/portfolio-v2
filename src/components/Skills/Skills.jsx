import React from 'react';
import SkillBar from '../SkillBar';

import { Subtitle } from '../Resume/styled';

const Skills = (props) => {
  return (
    <div className="sm:pl-2">
      <Subtitle className="text-lg sm:text-xl">Coding Skills</Subtitle>
      <SkillBar skillName="HTML" width="65" />
      <SkillBar skillName="CSS" width="65" />
      <SkillBar skillName="Javascript/ES6+" width="70" />
      <SkillBar skillName="React" width="70" />
      <SkillBar skillName="Node" width="70" />
      <SkillBar skillName="Docker" width="50" />
      <SkillBar skillName="SQL" width="50" />
    </div>
  );
};

export default Skills;
