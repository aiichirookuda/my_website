import React from 'react';
import { Profile } from '../../components/Profile/Profile';
import { Skills } from '../../components/Skills/Skills';
import { Layout } from '../../components/Templates/Layout/Layout';

export const About = () => {
  return (
    <Layout>
      <Profile />
      <Skills />
    </Layout>
  );
};
