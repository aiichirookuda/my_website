import React from 'react';
import { Link } from 'react-router-dom';

import Style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={Style.Header}>
      <h1>
        Aiichiro
        <span>
          .<br />
        </span>
        works
        <span>
          .<br />
        </span>
        github<span>.</span>io
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/works">WORKS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
