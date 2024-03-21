import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-re-super-tabs';
import { Link } from 'react-router-dom';
import MenuTab from '../../Components/Tabbarmenu.jsx';
import Desert from './MenuPages/Desert.jsx';
import Drink from './MenuPages/Drink.jsx';
import Main from './MenuPages/Main.jsx';
import Starter from './MenuPages/Starter.jsx';
const MenuTabbar = () =>
{
  return (
    <div>
      <Tabs activeTab='Starter'>
        <TabList className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
          <TabList>
            <Tab component={ MenuTab } label='STARTER' id='Starter' />
            <Tab component={ MenuTab } label='MAIN ' id='Main' />
            <Tab component={ MenuTab } label='DESSERT' id='Desert' />
            <Tab component={ MenuTab } label='DRINK' id='Drink' />
          </TabList>
          <TabList>
            <Link to='/Add'>
              <button
                className='border-0 shadow '
                style={ {
                  padding: '10px 20px',
                  display: 'inline-block',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  color: '#00BF63',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '500',
                  margin: '0 25px',
                  boxShadow: '0px 2px 6.8px 0px rgba(0, 0, 0, 0.1)',
                } }
              >
                Add
              </button>
            </Link>
          </TabList>
        </TabList>
        <TabList>
          <TabPanel component={ Starter } id='Starter' />
          <TabPanel component={ Main } id='Main' />
          <TabPanel component={ Desert } id='Desert' />
          <TabPanel component={ Drink } id='Drink' />
        </TabList>
      </Tabs>
    </div>
  );
};

export default MenuTabbar;
