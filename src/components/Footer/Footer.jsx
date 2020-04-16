import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { FooterBackground } from './styled';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterBackground>
      <div className="text-lg text-sm mg:text-lg">
        <p>
          {t('footer_text_1_before_heart')} <FiHeart className="inline-block" />{' '}
          {t('footer_text_1_after_heart')}
        </p>
        <p>{t('footer_text_2')}</p>
      </div>
    </FooterBackground>
  );
};

export default Footer;
