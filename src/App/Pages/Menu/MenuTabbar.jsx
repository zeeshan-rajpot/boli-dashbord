import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-re-super-tabs';
import { Link } from 'react-router-dom';
import MenuTab from '../../Components/Tabbarmenu.jsx';
import { baseUrl } from '../../Components/constants.jsx';

const MenuTabbar = () => {
  const [menuData, setMenuData] = useState(null);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage using the correct key

        if (!token) {
          throw new Error('Authentication token not found');
        }

        const response = await axios.get(
          `${baseUrl}/api/restaurant/getMenu`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Use the token variable here
            },
          }
        );

        if (response.data.message === 'Menu fetched successfully') {
          // Organize menu items into categories
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
          setError(null); // Reset error state if successful
        } else {
          throw new Error('Failed to fetch menu data');
        }
      } catch (error) {
        console.error('Error fetching menu data:', error);
        setError(error.message); // Set error state with error message
        // You might want to handle the error differently here
        // For example, displaying a toast notification
      }
    };

    fetchMenuData();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
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
                      {/* Additional item details can be displayed here */}
                    </div>
                  ))}
                </TabPanel>
              ))}
          </TabList>
        </Tabs>
      )}
    </div>
  );
};

export default MenuTabbar;
