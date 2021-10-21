import React from 'react';
import Style from './MainVisual.module.scss';

export const MainVisual = ({ topImage, title }) => {
  return (
    <div className={Style.MainVisual}>
      <figure>
        <img src={topImage} alt={title} />
        <figcaption>
          <h1>{title}</h1>
        </figcaption>
      </figure>
    </div>
  );
};
