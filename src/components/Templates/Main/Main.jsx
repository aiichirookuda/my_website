import React from 'react';
import Style from './Main.module.scss';

export const Main = ({ children }) => {
  return <div className={Style.Main}>{children}</div>;
};
