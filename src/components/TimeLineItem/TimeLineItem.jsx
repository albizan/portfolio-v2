import React from 'react';
import styled from 'styled-components';

const Circle = styled.span`
  position: absolute;
  border: 2px solid ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.backgroundColor};
  width: 14px;
  height: 14px;
  border-radius: 50%;
  left: -7px;
  top: 6px;
`;

const TimeLineElement = styled.div`
  border-left: 2px dotted ${(props) => (props.latest ? 'transparent' : props.theme.accent)};
`;

const TimeLineItem = ({ year, event, issuer, latest }) => {
  return (
    <div className="flex items-stretch">
      <div className="text-left hidden md:block font-bold mr-4">{year}</div>
      <TimeLineElement latest={latest} className="h-32 pl-4 relative">
        <Circle />
        <p className="md:hidden font-bold">{year}</p>
        <p className="font-bold">{event}</p>
        <p className="">{issuer}</p>
      </TimeLineElement>
    </div>
  );
};

export default TimeLineItem;
