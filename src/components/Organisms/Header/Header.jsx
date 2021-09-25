import React from 'react';
import { Logo } from '../../Atoms/Logo/Logo';
import { Nav } from '../../Molecules/Nav/Nav';
import Style from './Header.module.scss';

export const Header = () => {
  return (
    <div className={Style.Header}>
      <Logo />
      <Nav />
    </div>
  );
};
