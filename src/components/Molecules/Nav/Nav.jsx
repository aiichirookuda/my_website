import React from 'react';
import { NavItem } from '../../Atoms/NavItem/NavItem';
import Style from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={Style.Nav}>
      <ul>
        <li>
          <NavItem path={'#'} value={'TOP'} />
        </li>
        <li>
          <NavItem path={'#'} value={'ABOUT'} />
        </li>
        <li>
          <NavItem path={'#'} value={'WORKS'} />
        </li>
      </ul>
    </nav>
  );
};
