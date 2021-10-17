import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Thumbnails } from '../Thumbnails/Thumbnails';

import { web } from '../../data/web';
import { logo } from '../../data/logo';
import { banner } from '../../data/banner';

import Style from './Category.module.scss';

export const Category = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const selectedStyle = {
    backgroundColor: 'skyblue',
  };

  return (
    <Tabs
      className={Style.Category}
      selectedIndex={tabIndex}
      onSelect={(tabIndex) => {
        setTabIndex(tabIndex);
      }}
    >
      <TabList className={Style.TabList}>
        <Tab
          className={Style.Tab}
          style={tabIndex === 0 ? selectedStyle : null}
        >
          WEB
        </Tab>
        <Tab
          className={Style.Tab}
          style={tabIndex === 1 ? selectedStyle : null}
        >
          LOGO
        </Tab>
        <Tab
          className={Style.Tab}
          style={tabIndex === 2 ? selectedStyle : null}
        >
          BANNER
        </Tab>
      </TabList>

      <TabPanel>
        <Thumbnails category={web} />
      </TabPanel>
      <TabPanel>
        <Thumbnails category={logo} />
      </TabPanel>
      <TabPanel>
        <Thumbnails category={banner} />
      </TabPanel>
    </Tabs>
  );
};
