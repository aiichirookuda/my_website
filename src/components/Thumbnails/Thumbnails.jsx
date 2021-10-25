import React from 'react';
import { Link } from 'react-router-dom';

import Style from './Thumbnails.module.scss';

export const Thumbnails = ({ category }) => {
  return (
    <div className={Style.Thumbnails}>
      <ul>
        {category.map((obj, index) => {
          return (
            <li key={index}>
              <Link to={`/works${obj.path}`}>
                <figure id={index}>
                  <img src={obj.image} alt={obj.title} />
                  <figcaption className={Style.title}>{obj.title}</figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
