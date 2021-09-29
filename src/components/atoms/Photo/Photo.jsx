import React from 'react';
import photo from '../../../img/profile.png';
import Style from './Photo.module.scss';

export const Photo = () => {
  return (
    <figure className={Style.Photo}>
      <img src={photo} alt="プロフィール画像" />
    </figure>
  );
};
