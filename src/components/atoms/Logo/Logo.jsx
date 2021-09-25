import React from 'react';
import Style from './Logo.module.scss';

export const Logo = () => {
  return (
    <h1 className={Style.Logo}>
      Aiichiro<span>.</span>github<span>.</span>io
    </h1>
  );
};
