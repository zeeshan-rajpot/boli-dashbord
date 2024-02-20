import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <div className='container'>
      <Row className='my-2 justify-content-between align-items-center'>
        <Col xs={12} md={5} className='d-flex rounded-5 ms-3 p-2 shadow'>
          <img src='/search.svg' alt='' />
          <input
            type='search'
            placeholder='Search here'
            className='w-100 border-0 ps-3'
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className='d-flex justify-content-end align-items-center'
        >
          <div className='me-2'>
            <img src='/notification.svg' alt='' />
          </div>
          <div className='me-4'>
            <p style={{ color: '#444444' }}>Manager</p>
          </div>
          <div
            className='rounded-5 me-4'
            style={{
              width: '50px',
              height: '50px',
              overflow: 'hidden',
              backgroundImage:
                "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
