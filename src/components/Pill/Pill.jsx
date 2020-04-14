import React from 'react';
import { PillWrapper } from './styled';

const Pill = ({ value }) => {
  return (
    <PillWrapper className="inline-block leading-none text-xxs uppercase font-black tracking-widest rounded-full mb-2">
      {value}
    </PillWrapper>
  );
};

export default Pill;
