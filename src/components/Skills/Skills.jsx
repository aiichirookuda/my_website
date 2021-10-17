import React from 'react';
import { SkillsArray } from './SkillsArray';

import Style from './Skills.module.scss';

export const Skills = () => {
  const skills = SkillsArray;

  return (
    <div className={Style.Skills}>
      <p>Skill</p>
      <ul className="contents">
        {skills.map((skill, index) => {
          return (
            <li key={index}>
              <figure>
                {skill.icon}
                <figcaption>{skill.title}</figcaption>
              </figure>
              <p>{skill.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
