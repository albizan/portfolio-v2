import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Switch, SwitchWrapper } from './styled';

const ThemeToggle = (props) => {
  return (
    <div className="absolute lg:fixed top-0 right-0 mt-2 mr-2 sm:mt-6 sm:mr-6 z-10">
      <SwitchWrapper className="relative h-10 w-20 flex rounded-full">
        <div className="w-1/2 h-full flex items-center justify-center pl-2">
          <FiMoon className="text-white text-xl" />
        </div>
        <div className="w-1/2 flex items-center justify-center pr-2">
          <FiSun className="text-white text-xl" />
        </div>
        <Switch onClick={props.onClick} themeType={props.themeType} className="absolute"></Switch>
      </SwitchWrapper>
    </div>
  );
};

export default ThemeToggle;
