import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import getTheme from '../../theming';

// Components
import ThemeToggle from '../ThemeToggle';
import LangSelector from '../LangSelector';
import Landing from '../Landing';
import Greetings from '../Greetings';
import Resume from '../Resume';
import Projects from '../Projects';
import Tools from '../Tools';
import Footer from '../Footer';

// Styled Components
import { GlobalStyles } from './styled';

const App = () => {
  // On App mounting, get theme type ('light' or 'dark') from the localstorage. 'light' is the default value
  const [themeType, setThemeType] = useState(localStorage.getItem('themeType') || 'light');

  // toggleThemeType gets fired when user click on theme toggle button
  const toggleThemeType = () => {
    console.log('Toggling theme');
    const newThemeType = themeType === 'light' ? 'dark' : 'light';
    localStorage.setItem('themeType', newThemeType);
    setThemeType(newThemeType);
  };

  return (
    // themeType is just a string while "theme" prop needs an entire object
    // Here getTheme is an helper that returns an entire object (that describes a theme) given a themeType
    <ThemeProvider theme={getTheme(themeType)}>
      <GlobalStyles id="app">
        <ThemeToggle themeType={themeType} onClick={toggleThemeType} />
        <LangSelector />
        <Landing />
        <Greetings />
        <Resume />
        <Projects />
        <Tools />
        <Footer />
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default App;
