import React from 'react';
import Style from './SkillIcon.module.scss';

export const SkillIcon = ({ icon, alt }) => {
  return <img src={icon} alt={alt} className={Style.SkillIcon} />;
};
