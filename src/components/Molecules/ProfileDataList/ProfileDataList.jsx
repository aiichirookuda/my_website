import React from 'react';
import { ProfileData } from '../../Atoms/ProfileData/ProfileData';
import Style from './ProfileDataList.module.scss';

export const ProfileDataList = () => {
  const profiles = [
    { title: 'Name', data: 'Aiichiro' },
    { title: 'Location', data: 'TOKYO' },
    { title: 'Likes', data: 'Music / Movie / Game' },
    { title: 'Work History', data: '-2020 App sales & planning' },
  ];

  return (
    <dl className={Style.ProfileDataList}>
      {profiles.map((profile, index) => {
        return (
          <ProfileData key={index} title={profile.title} data={profile.data} />
        );
      })}
    </dl>
  );
};
