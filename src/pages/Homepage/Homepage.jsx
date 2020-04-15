import React, { Fragment } from 'react';

import Landing from '../../components/Landing';
import Greetings from '../../components/Greetings';
import Resume from '../../components/Resume';
import Projects from '../../components/Projects';
import Tools from '../../components/Tools';
import Footer from '../../components/Footer';

const Homepage = ({ themeType, onClickToggleTheme }) => {
  return (
    <Fragment>
      <Landing />
      <Greetings />
      <Resume />
      <Projects />
      <Tools />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
