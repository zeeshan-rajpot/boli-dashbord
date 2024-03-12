import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
export const AddLoylity = () => {
  return (
    <div>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className=' text-center p-0 shadow '
            style={{
              backgroundColor: '#FFFFFF',
              height: '100vh',
            }}
          >
            <SideBar activetabe='Loyalty' />
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
              <div className='m-2 mb-4 pb-3 shadow rounded-3 '>
                <div className='d-flex justify-content-between align-items-center '>
                  <div className='p-4 d-flex flex-column justify-content-start align-items-start '>
                    <div>
                      <p
                        className='textColor'
                        style={{ fontSize: '22px', fontWeight: '700' }}
                      >
                        Add New Item
                      </p>
                    </div>
                    <div className='my-3'>
                      <p
                        style={{
                          color: '#4C535F',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                      >
                        Upload image of Item
                      </p>

                      <div
                        className='d-flex my-3 flex-column justify-content-center align-items-center '
                        style={{
                          width: '132px',
                          height: '130px',
                          backgroundColor: '#FFFFFF',
                          borderRadius: '8px',
                          boxShadow:
                            '1px 2px 11.100000381469727px 0px #0000001A',
                        }}
                      >
                        <img src='/gallery-add.svg' alt='' />
                        <p
                          className='my-2'
                          style={{
                            color: '#4C535F',
                            fontSize: '12px',
                            fontWeight: '500',
                          }}
                        >
                          Upload your photo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Row className='px-0 md-px-2'>
                  <Col lg={6}>
                    <div className=' my-2 d-flex flex-column justify-content-start align-items-start'>
                      <p
                        style={{
                          fontWeight: '500',
                          fontSize: '16px',
                          color: '#4C535F',
                        }}
                      >
                        Item name
                      </p>
                      <input
                        className='w-100 border-0 p-3'
                        style={{
                          fontWeight: '500',
                          fontSize: '12px',
                          borderRadius: '8px',
                          color: '#4C535F',
                          boxShadow:
                            '1px 2px 11.100000381469727px 0px #0000001A',
                        }}
                        type='text'
                        placeholder='Enter Product name'
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className=' my-2 d-flex flex-column justify-content-start align-items-start'>
                      <p
                        style={{
                          fontWeight: '500',
                          fontSize: '16px',
                          color: '#4C535F',
                        }}
                      >
                        points
                      </p>
                      <input
                        className='w-100 border-0 p-3'
                        style={{
                          fontWeight: '500',
                          fontSize: '12px',
                          borderRadius: '8px',
                          color: '#4C535F',
                          boxShadow:
                            '1px 2px 11.100000381469727px 0px #0000001A',
                        }}
                        type='text'
                        placeholder='Enter points of the product'
                      />
                    </div>
                  </Col>
                </Row>
                <Row className='my-3 '>
                  <Col lg={6} xs={12} md={6}></Col>
                  <Col lg={3} xs={12} md={3}>
                    {' '}
                    <button
                      className='w-100'
                      style={{
                        borderRadius: '8px',
                        border: ' 1px solid #00BF63',
                        color: '#00BF63',
                        fontSize: '16px',
                        padding: '11px 30px 11px 30px',
                        fontWeight: '500',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      Cancle
                    </button>
                  </Col>
                  <Col lg={3} xs={12} md={3}>
                    {' '}
                    <button
                      className='border-0 w-100 mt-3 mt-md-0'
                      style={{
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontSize: '16px',
                        padding: '11px 30px 11px 30px',
                        fontWeight: '500',
                        backgroundColor: '#00BF63',
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
export default AddLoylity;
