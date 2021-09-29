import React from 'react';

import { Profile } from '../../Organisms/Profile/Profile';
import { Skills } from '../../Organisms/Skills/Skills';
import { Layout } from '../../Templates/Layout/Layout';

export const About = () => {
  return (
    <Layout>
      <Profile />
      <Skills />
    </Layout>
  );
};
