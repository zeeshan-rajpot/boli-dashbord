import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';

const AddQR = () => {
  return (
    <div>
      <Container fluid className='h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0 shadow'
            style={{ backgroundColor: '#FFFFFF', height: '100vh' }}
          >
            <SideBar activetab='QR' />
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
              <div className='m-2 p-3 shadow rounded-3'>
                <div className='my-3'>
                  <p
                    style={{
                      color: '#00BF63',
                      fontSize: '22px',
                      fontWeight: '600',
                    }}
                  >
                    AddQR
                  </p>
                </div>
                <Row>
                  <Col lg={3}>
                    <div
                      className='d-flex justify-content-between align-items-center '
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow:
                          '0.6638888716697693px 1.3277777433395386px 7.369166851043701px 0px #0000001A',
                        borderRadius: '5.31px',
                      }}
                    >
                      <p
                        className='ps-2'
                        style={{
                          color: '#4C535F',
                          fontSize: '17px',
                          fontWeight: '500',
                        }}
                      >
                        Table No.
                      </p>
                      <button
                        className='border-0 px-4 py-2'
                        style={{
                          color: '#4C535F',
                          fontSize: '15px',
                          fontWeight: '500',
                          boxShadow:
                            ' 1px 2px 11.100000381469727px 0px #0000001C',
                          backgroundColor: '#FFFFFF',
                          borderRadius: '8px',
                        }}
                      >
                        #0011
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <p
                      className='mt-4'
                      style={{
                        color: '#4C535F',
                        fontSize: '10.62px',
                        fontWeight: '400',
                      }}
                    >
                      Assign QR
                    </p>
                    <div
                      className='text-center py-5'
                      style={{
                        borderRadius: '5.31px',
                        boxShadow:
                          ' 0.6638888716697693px 1.3277777433395386px 7.369166851043701px 0px #0000001A',
                      }}
                    >
                      {' '}
                      <img src='/uploadQR.png' alt='' className='my-5' />
                    </div>
                  </Col>
                </Row>

                <Row className='mt-3 mb-5'>
                  <Col lg={2}>
                    <button
                      className='w-100'
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#00BF63',
                        borderRadius: '8px',
                        padding: '11px 30px 11px 30px',
                        fontSize: '16px',
                        fontWeight: '500',
                        border: '1px solid #00BF63',
                      }}
                    >
                      Cancel
                    </button>
                  </Col>
                  <Col lg={2}>
                    <button
                      className='border-0 mt-md-0 mt-3 w-100'
                      style={{
                        padding: '11px 30px 11px 30px',
                        backgroundColor: '#00BF63',
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                    >
                      Done
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

export default AddQR;
