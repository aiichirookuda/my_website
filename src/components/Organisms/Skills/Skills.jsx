import React from 'react';
import { Skill } from '../../Molecules/Skill/Skill';
import icon from '../../../img/caustic.png';

import Style from './Skills.module.scss';

export const Skills = () => {
  const skills = [
    { icon: `${icon}`, title: 'HTML5' },
    { icon: `${icon}`, title: 'CSS3' },
    { icon: `${icon}`, title: 'JavaScript' },
    { icon: `${icon}`, title: 'jQuery' },
    { icon: `${icon}`, title: 'React' },
    { icon: `${icon}`, title: 'TypeScript' },
    { icon: `${icon}`, title: 'Sass' },
    { icon: `${icon}`, title: 'Photoshop' },
    { icon: `${icon}`, title: 'Illustrator' },
    { icon: `${icon}`, title: 'InVisionStudio' },
  ];

  return (
    <div className={Style.Skills}>
      <p>Skill</p>
      <ul>
        {skills.map((skill, index) => {
          return (
            <Skill
              key={index}
              icon={skill.icon}
              alt={skill.title}
              title={skill.title}
            />
          );
        })}
      </ul>
    </div>
  );
};
