import React from 'react';
import { useTranslation } from 'react-i18next';

const Greetings = (props) => {
  const { t } = useTranslation();
  return (
    <section id="greetings" className="container px-8 mx-auto mt-16">
      <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-black tracking-none">
        {t('Title Greetings')}
      </h2>
      <p className="text-justify sm:text-left tracking-wide mt-4 sm:text-xl">
        {t('Text Greetings')}
      </p>
    </section>
  );
};

export default Greetings;
