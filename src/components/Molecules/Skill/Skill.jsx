import React from 'react';
import { SkillIcon } from '../../Atoms/SkillIcon/SkillIcon';

import Style from './Skill.module.scss';

export const Skill = ({ icon, alt, title }) => {
  return (
    <li className={Style.Skill}>
      <SkillIcon icon={icon} alt={alt} />
      <p>{title}</p>
    </li>
  );
};
