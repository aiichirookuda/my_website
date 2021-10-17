import React from 'react';
import { Link } from 'react-router-dom';

import Style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={Style.Header}>
      <h1>
        Aiichiro<span>.</span>works<span>.</span>github<span>.</span>io
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/works">WORKS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
