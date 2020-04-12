import React from 'react';
import { Background, EnterButton, TextWrapper, Overlay } from './styled';
import Scroller from '../Scroller';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  // Translation
  const { t } = useTranslation();

  // Update windows.innerHeight on resize (debounce 100ms)
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <Background
      innerHeight={dimensions.height}
      className="relative w-full flex items-center sm:justify-start"
    >
      <div className="px-8 sm:px-6 lg:px-10 xl:px-12 z-10 mt-40">
        <TextWrapper className="leading-none">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black">{t('Greetings-1')}</h1>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black">{t('Greetings-2')}</h3>
          <p className="mt-2 sm:text-xl">{t('Greetings-3')}</p>
          <p className="sm:text-xl">{t('Greetings-4')}</p>
        </TextWrapper>
        <EnterButton href="#greetings" className="py-2 px-6 font-black">
          {t('Enter Button')}
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
