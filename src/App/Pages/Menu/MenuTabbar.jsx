import React, { useState } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import MenuTab from '../../Components/Tabbarmenu.jsx';
import Starter from './MenuPages/Starter.jsx';
import Main from './MenuPages/Main.jsx';
import Desert from './MenuPages/Desert.jsx';
import Drink from './MenuPages/Desert.jsx';

const MenuTabbar = () => {
  return (
    <div>
      <Tabs activeTab='Starter'>
        <TabList>
          <Tab component={MenuTab} label='STARTER' id='Starter' />
          <Tab component={MenuTab} label='MAIN ' id='Main ' />
          <Tab component={MenuTab} label='DESSERT' id='Desert' />
          <Tab component={MenuTab} label='DRINK' id='Drink' />
        </TabList>
        <TabList>
          <TabPanel component={Starter} id='Starter' />
          <TabPanel component={Main} id='Main' />
          <TabPanel component={Desert} id='Desert' />
          <TabPanel component={Drink} id='Drink' />
        </TabList>
      </Tabs>
    </div>
  );
};

export default MenuTabbar;
