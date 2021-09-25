import React from 'react';
import { CopyRight } from '../../Atoms/CopyRight/CopyRight';
import Style from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={Style.Footer}>
      <CopyRight />
    </div>
  );
};
