import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ToolCardBackground, Button, Hint, ToolDescription } from './styled';
import { useTranslation } from 'react-i18next';

const ToolCard = ({ name, image, description }) => {
  const { t } = useTranslation();
  return (
    <ToolCardBackground className="shadow-md hover:shadow-2xl">
      <div id="image-box">
        <LazyLoadImage
          effect="blur"
          src={image}
          alt={`${name} logo`}
          className="h-16 w-16 mx-auto"
        />
        <h3 className="text-center uppercase mt-6 font-bold tracking-wider">{name}</h3>
      </div>
      <Button>
        <Hint>Why?</Hint>
        <ToolDescription>{t(description)}</ToolDescription>
      </Button>
    </ToolCardBackground>
  );
};
export default ToolCard;
