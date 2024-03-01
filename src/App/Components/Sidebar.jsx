// import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = props => {
  const [activeTab, setActiveTab] = useState(props.activetabe);

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <div
        className='AllTabbutn text-center '
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <Link to='/'>
          <p
            className='text-start resfontlogo ms-0 ms-md-4  mt-3 textColor'
            style={{
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'capitalize',
              fontWeight: '400',
              fontSize: '45px',
            }}
          >
            Boli
          </p>
        </Link>
        <Link to='/Orders'>
          <div
            className={`tab-container d-flex align-items-center text-center justify-content-start  sidebardiv ${
              activeTab === 'Orders' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Orders')}
          >
            <img src='/Orders.svg' alt='' class='activeicon' />

            <p className='mb-0 '>Orders</p>
          </div>
        </Link>
        <Link to='/Menu'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Menu' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Menu')}
          >
            {' '}
            <img src='/Menu.svg' alt='' />
            <p>Menu</p>
          </div>
        </Link>
        <Link to='/Reservations'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Reservations' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Reservations')}
          >
            {' '}
            <img src='/Reservations icon.svg' alt='' />
            <p>Reservations</p>
          </div>
        </Link>
        <Link to='/Stats'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Stats' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Stats')}
          >
            {' '}
            <img src='/Stats.svg' alt='' />
            <p>Stats</p>
          </div>
        </Link>
        <Link to='/Settings'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Settings' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Settings')}
          >
            {' '}
            <img src='/Setting.svg' alt='' />
            <p>Settings</p>
          </div>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <div
          style={{
            backgroundColor: '#2DCC70',
            borderRadius: '100px',
            height: '6px',
            width: '45px',
            transform: 'rotate(90deg)',
          }}
        ></div> */}

        <Link to='/Logout'>
          <div class='d-flex mt-5  justify-content-center align-items-center shadow p-3 w-50 bottom-0  mx-auto my-auto rounded-3'>
            <img src='/logouticon.svg' alt='' />
            <p
              class='ms-0 dis  ms-md-2'
              style={{
                fontSize: '16px',
                fontWeight: '400',
                color: '#00BF63',
              }}
            >
              Logout
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
