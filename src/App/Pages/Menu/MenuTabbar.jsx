import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-re-super-tabs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import MenuTab from '../../Components/Tabbarmenu.jsx';
import { baseUrl } from '../../Components/constants.jsx';

const MenuTabbar = () => {
  const [menuData, setMenuData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token not found');
        }

        const response = await axios.get(`${baseUrl}/api/restaurant/getMenu`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.data.message === 'Menu fetched successfully') {
          const menuItems = response.data.menu.items;
          const categorizedMenu = {};

          menuItems.forEach(item => {
            const category = item.category.name;
            if (!categorizedMenu[category]) {
              categorizedMenu[category] = [];
            }
            categorizedMenu[category].push(item);
          });

          setMenuData(categorizedMenu);
          console.log('Error for api', response.data);

          setError(null);
        } else {
          throw new Error('Failed to fetch menu data');
        }
      } catch (error) {
        console.error('Error fetching menu data:', response.data);
        toast.error(`Error fetching menu data: ${response.data}`);
        setError(error.message);
      }
    };

    fetchMenuData();
  }, []);
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition='Bounce'
      />
      <Tabs activeTab='Starter'>
        <TabList className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
          <TabList>
            {menuData &&
              Object.keys(menuData).map(category => (
                <Tab
                  key={category}
                  component={MenuTab}
                  label={category.toUpperCase()}
                  id={category}
                />
              ))}
          </TabList>

          <TabList>
            <Link to='/Add'>
              <button
                className='border-0 shadow '
                style={{
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
                }}
              >
                Add
              </button>
            </Link>
          </TabList>
        </TabList>
        <TabList>
          {menuData &&
            Object.keys(menuData).map(category => (
              <TabPanel key={category}>
                {menuData[category].map(item => (
                  <div key={item._id}>
                    <p>Name: {item.name}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                ))}
              </TabPanel>
            ))}
        </TabList>
      </Tabs>
    </div>
  );
};

export default MenuTabbar;
