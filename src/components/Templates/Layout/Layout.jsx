import React from 'react';
import { Header } from '../../Organisms/Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../../Organisms/Footer/Footer';

import Style from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={Style.Wrapper}>
        <Main>{children}</Main>
      </div>
      <Footer />
    </>
  );
};
