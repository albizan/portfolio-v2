import React from 'react';
import styled from 'styled-components';

const Circle = styled.span`
  position: absolute;
  border: 2px solid ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.backgroundColor};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  left: -8px;
  top: 4px;
`;

const TimeLineElement = styled.div`
  border-left: 2px dotted ${(props) => (props.latest ? 'transparent' : props.theme.accent)};
`;

const TimeLineItem = ({ year, event, issuer, latest }) => {
  return (
    <div className="flex justify-start">
      <div className="text-left hidden md:block font-bold w-12">{year}</div>
      <TimeLineElement latest={latest} className="h-32 pl-3 relative">
        <Circle />
        <p className="md:hidden font-bold">{year}</p>
        <p className="font-bold">{event}</p>
        <p className="">{issuer}</p>
      </TimeLineElement>
    </div>
  );
};

export default TimeLineItem;
