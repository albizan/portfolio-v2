import React from 'react';
import { ToolCardBackground, Button, Hint, ToolDescription } from './styled';

const ToolCard = ({ name, image, description }) => {
  return (
    <ToolCardBackground className="shadow-md hover:shadow-2xl">
      <div id="image-box">
        <img src={image} alt={`${name} logo`} className="h-16 w-16 mx-auto" />
        <h3 className="text-center uppercase mt-6 font-bold tracking-wider">{name}</h3>
      </div>
      <Button>
        <Hint>Why?</Hint>
        <ToolDescription>{description}</ToolDescription>
      </Button>
    </ToolCardBackground>
  );
};
export default ToolCard;
