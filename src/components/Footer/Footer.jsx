import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { FooterBackground } from './styled';

const Footer = () => {
  return (
    <FooterBackground>
      <div className="text-lg mg:text-xl">
        <p>
          Made with <FiHeart className="inline-block" /> by Alberto Zanotti
        </p>
        <p>Built with react and tailwind</p>
      </div>
    </FooterBackground>
  );
};

export default Footer;
