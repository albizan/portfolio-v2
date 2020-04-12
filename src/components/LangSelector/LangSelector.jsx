import React from 'react';
import { Switch, SwitchWrapper } from './styled';
import { useTranslation } from 'react-i18next';

const LangSelector = (props) => {
  const { i18n } = useTranslation();

  const toggleLangSelector = () => {
    i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it');
  };

  return (
    <div className="absolute lg:fixed top-0 right-0 mt-16 mr-2 sm:mt-20 sm:mr-6 z-10">
      <SwitchWrapper className="relative h-10 w-20 flex rounded-full text-white">
        <div className="w-1/2 h-full flex items-center justify-center pl-2">EN</div>
        <div className="w-1/2 flex items-center justify-center pr-2">IT</div>
        <Switch onClick={toggleLangSelector} lang={i18n.language} className="absolute"></Switch>
      </SwitchWrapper>
    </div>
  );
};

export default LangSelector;
