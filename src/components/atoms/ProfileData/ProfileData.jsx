import React from 'react';

export const ProfileData = ({ title, data }) => {
  return (
    <>
      <dt>{title}</dt>
      <dd>{data}</dd>
    </>
  );
};
