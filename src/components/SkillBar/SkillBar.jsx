import React from 'react';
import { BarWrapper, Bar } from './styled';

const SkillBar = ({ skillName, width }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <div className="font-bold text-xs">{skillName}</div>
        <div className="text-right font-bold text-xs">{width}%</div>
      </div>
      <BarWrapper>
        <Bar width={width} />
      </BarWrapper>
    </div>
  );
};
export default SkillBar;
