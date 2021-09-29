import React from 'react';
import { Photo } from '../../Atoms/Photo/Photo';
import { ProfileDataList } from '../../Molecules/ProfileDataList/ProfileDataList';
import Style from './Profile.module.scss';

export const Profile = () => {
  return (
    <div className={Style.Profile}>
      <Photo />
      <ProfileDataList />
    </div>
  );
};
