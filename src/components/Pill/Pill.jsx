import React from 'react';
import { PillWrapper } from './styled';

const Pill = ({ value }) => {
  return (
    <PillWrapper className="inline-block leading-none text-xxs uppercase font-bold tracking-tighter rounded-full mb-2">
      {value}
    </PillWrapper>
  );
};

export default Pill;
