import React from 'react';
import { Background, EnterButton, TextWrapper, Overlay } from './styled';
import Scroller from '../Scroller';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t } = useTranslation();

  // Update windows.innerHeight on resize (debounce every 400ms)
  const [height, setHeight] = React.useState(window.innerHeight);
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setHeight(window.innerHeight);
    }, 400);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <Background innerHeight={height} className="relative w-full flex items-center sm:justify-start">
      <div className="px-8 sm:px-6 lg:px-10 xl:px-32 z-10 mt-40">
        <TextWrapper className="leading-none">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black">{t('landing_title')}</h1>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black">{t('landing_subtitle')}</h3>
          <p className="mt-2 sm:text-xl">{t('landing_text_1')}</p>
          <p className="sm:text-xl">{t('landing_text_2')}</p>
        </TextWrapper>
        <EnterButton href="#greetings" className="py-2 px-6 font-black">
          {t('landing_button_text')}
        </EnterButton>
      </div>
      <Overlay />
      <Scroller />
    </Background>
  );
};

const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

export default Landing;
