import React from 'react';
import Style from './NavItem.module.scss';

export const NavItem = ({ path, value }) => {
  return (
    <a className={Style.NavItem} href={path}>
      {value}
    </a>
  );
};
