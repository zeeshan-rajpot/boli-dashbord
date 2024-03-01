import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../../Components/Navbar.jsx';
import SideBar from '../../../Components/Sidebar.jsx';
export const index = () => {
  const [activeButton, setActiveButton] = useState('STARTER');

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };
  return (
    <div>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0 shadow '
            style={{ backgroundColor: '#FFFFFF', height: '100vh' }}
          >
            <SideBar activetabe='Menu' />
          </Col>
          <Col
            md={10}
            xs={10}
            className='custom-scrollbar'
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <Navbar />
            </Row>
            <Row className='mt-4'>
              <div className='m-2 p-3 shadow rounded-3 '>
                <div>
                  <p
                    style={{
                      color: '#00BF63',
                      fontSize: '22px',
                      fontWeight: '600',
                    }}
                  >
                    Add New Item
                  </p>
                </div>
                <div className='mt-5'>
                  <p
                    style={{
                      color: '#4C535F',
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    Choose Category
                  </p>
                </div>
                <div>
                  <Row className='my-4'>
                    <Col lg={3} md={3} xs={6}>
                      <button
                        className='border-0 shadow w-100'
                        style={{
                          padding: '10px 30px',
                          borderRadius: '8px',
                          color:
                            activeButton === 'STARTER' ? '#FFFFFF' : '#717171',
                          fontSize: '14px',
                          fontWeight: '500',
                          backgroundColor:
                            activeButton === 'STARTER' ? '#00BF63' : '#FFFFFF',
                        }}
                        onClick={() => handleButtonClick('STARTER')}
                      >
                        STARTER
                      </button>
                    </Col>
                    <Col lg={3} md={3} xs={6}>
                      <button
                        className='border-0 shadow w-100'
                        style={{
                          padding: '10px 30px',
                          borderRadius: '8px',
                          color:
                            activeButton === 'MAIN' ? '#FFFFFF' : '#717171',
                          fontSize: '14px',
                          fontWeight: '500',
                          backgroundColor:
                            activeButton === 'MAIN' ? '#00BF63' : '#FFFFFF',
                        }}
                        onClick={() => handleButtonClick('MAIN')}
                      >
                        MAIN
                      </button>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={3} md={3} xs={6}>
                      <button
                        className='border-0 shadow w-100'
                        style={{
                          padding: '10px 30px',
                          borderRadius: '8px',
                          color:
                            activeButton === 'DESSERT' ? '#FFFFFF' : '#717171',
                          fontSize: '14px',
                          fontWeight: '500',
                          backgroundColor:
                            activeButton === 'DESSERT' ? '#00BF63' : '#FFFFFF',
                        }}
                        onClick={() => handleButtonClick('DESSERT')}
                      >
                        DESSERT
                      </button>
                    </Col>
                    <Col lg={3} md={3} xs={6}>
                      <button
                        className='border-0 shadow w-100'
                        style={{
                          padding: '10px 30px',
                          borderRadius: '8px',
                          color:
                            activeButton === 'DRINK' ? '#FFFFFF' : '#717171',
                          fontSize: '14px',
                          fontWeight: '500',
                          backgroundColor:
                            activeButton === 'DRINK' ? '#00BF63' : '#FFFFFF',
                        }}
                        onClick={() => handleButtonClick('DRINK')}
                      >
                        DRINK
                      </button>
                    </Col>
                  </Row>
                </div>
                <div className='mt-5'>
                  <p
                    style={{
                      color: '#4C535F',
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    Upload image of Item
                  </p>
                </div>
                <div
                  className='my-3 d-flex flex-column justify-content-center align-items-center'
                  style={{
                    backgroundColor: '#FFFFFF',
                    width: '130px',
                    borderRadius: '8px',
                    height: '132px',
                    boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                  }}
                >
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src='/gallery-add.svg' alt='' />
                    <p
                      className='pt-3'
                      style={{
                        color: '#4C535F',
                        fontSize: '12px',
                        fontWeight: '500',
                      }}
                    >
                      Upload photo
                    </p>
                  </div>
                </div>
                <Row>
                  <Col lg={6} md={6} xs={12}>
                    <p
                      className='mb-3'
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#4C535F',
                      }}
                    >
                      Item name
                    </p>
                    <input
                      className='w-100 border-0 p-3'
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                        fontSize: '14px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        color: '#B5B5B5',
                      }}
                      type='text'
                      placeholder='Please enter your item name'
                    />
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    <p
                      className='mb-3'
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#4C535F',
                      }}
                    >
                      Price
                    </p>
                    <input
                      type='text'
                      className='w-100 border-0 p-3'
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                        fontSize: '14px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        color: '#B5B5B5',
                      }}
                      placeholder='Please enter your Price'
                    />
                  </Col>
                </Row>

                <Row className='my-4'>
                  <Col lg={8} md={8} xs={12}></Col>
                  <Col lg={2} md={2} xs={6}>
                    <button
                      className='border-0 bg-transparent '
                      style={{
                        color: '#444444',
                        fontSize: '16px',
                        fontWeight: '500',
                        backgroundColor: '#00BF63',
                        padding: '11px 20px 11px 20px',
                        borderRadius: '8px',
                      }}
                    >
                      Cancel
                    </button>
                  </Col>
                  <Col lg={2} md={2} xs={6}>
                    <button
                      className='border-0 '
                      style={{
                        color: '#FFFFFF',
                        backgroundColor: '#00BF63',
                        padding: '11px 20px 11px 20px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                    >
                      Add Item
                    </button>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
