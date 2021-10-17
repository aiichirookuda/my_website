import React from 'react';
import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';

import Style from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={Style.Main}>{children}</main>
      <Footer />
    </>
  );
};
