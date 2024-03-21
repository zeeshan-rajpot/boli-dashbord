import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const mainPage = () => {
  return (
    <Container className='m-2 mb-4 shadow rounded-3'>
      <div className='p-4'>
        <p
          className='textColor'
          style={{ fontSize: '22px', fontWeight: '700' }}
        >
          Settings
        </p>

        <div className='mt-4'>
          <p style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}>
            Your Profile Picture
          </p>
        </div>

        <div
          className='d-flex flex-column mt-2 justify-content-center align-items-center rounded-4 '
          style={{
            boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
            backgroundColor: '#FFFFFF',
            width: '132px',
            height: '130px',
          }}
        >
          <img src='/gallery-add.svg' alt='' />
          <p
            className='text-center pt-2'
            style={{ color: '#4C535F', fontSize: '15px', fontWeight: '500' }}
          >
            Upload your <br /> photo
          </p>
        </div>
        <br />
        <hr style={{ border: '2px solid #E0E4EC' }} />

        <Row>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Full name
            </p>
            <input
              type='text'
              className='rounded-3 p-2  w-100 border-0 '
              style={{
                backgroundColor: '#FFFFFF',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='Please enter your full name'
            />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Email
            </p>
            <input
              type='text'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='Please enter your email'
            />
          </Col>
        </Row>
        {/* main vvddddd*/}
        <Row>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Username
            </p>
            <input
              type='text'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='Please enter your username'
            />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Phone number
            </p>
            <input
              type='tel'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='+1 | Please enter your phone number'
            />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Account Number
            </p>
            <input
              type='tel'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='Please enter Company’s account number'
            />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <p>Add Restaurant images</p>
          </Col>
          <Col></Col>
        </Row>

        <Row className='mt-5'>
          <Col lg={9} md={9}></Col>
          <Col lg={3} xs={12} md={3}>
            <button
              className='rounded-3 w-100 p-2 border-0 text-white'
              style={{ backgroundColor: '#00BF63' }}
            >
              Done
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default mainPage;
