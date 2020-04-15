import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import getTheme from '../../theming';

import ThemeToggle from '../ThemeToggle';
import LangSelector from '../LangSelector';

import Homepage from '../../pages/Homepage';
import Projectpage from '../../pages/Projectpage';

// Styled Components
import { GlobalStyles } from './styled';

const App = () => {
  // On App mounting, get theme type ('light' or 'dark') from the localstorage. 'light' is the default value
  const [themeType, setThemeType] = useState(localStorage.getItem('themeType') || 'light');

  // toggleThemeType gets fired when user click on theme toggle button
  const toggleThemeType = () => {
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
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Homepage themeType={themeType} onClickToggleTheme={toggleThemeType} />
              )}
            />
            <Route exact path="/project/:id" component={Projectpage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default App;
