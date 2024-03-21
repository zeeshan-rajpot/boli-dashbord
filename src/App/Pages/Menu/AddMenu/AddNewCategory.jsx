import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../../Components/Navbar.jsx';
import SideBar from '../../../Components/Sidebar.jsx';
export const AddNewCategory = () => {
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
                <div className='my-3'>
                  <p
                    style={{
                      color: '#00BF63',
                      fontSize: '22px',
                      fontWeight: '600',
                    }}
                  >
                    Add Category
                  </p>
                </div>

                <Row className='d-flex flex-column justify-content-start align-items-start '>
                  <Row className='d-flex justify-content-between align-items-center '>
                    <Col lg={4}>
                      <p
                        className='my-0 my-2'
                        style={{
                          color: '#4C535F',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                      >
                        New Category
                      </p>
                    </Col>
                    <Col lg={1} className='text-end'>
                      <div role='button' style={{ width: '45%' }}>
                        <p
                          className='my-0'
                          style={{
                            color: '#00BF63',
                            fontSize: '16px',
                            fontWeight: '500',
                            borderBottom: '1px solid #00BF63',
                          }}
                        >
                          Add
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <input
                        type='text'
                        className='w-100 border-0 p-2 rounded-2  shadow '
                        placeholder='Name'
                      />
                    </Col>
                    <Col lg={8}></Col>
                  </Row>
                </Row>

                <Row>
                  <Col lg={4}>
                    <button
                      className=' shadow w-100 mt-4'
                      style={{
                        padding: '10px 30px',
                        borderRadius: '8px',
                        border: '1px solid #00BF63',
                        fontSize: '14px',
                        fontWeight: '500',
                        backgroundColor: '#00BF6314',
                        color: '#00BF63',
                        boxShadow: '2px 4px 17.600000381469727px 0px #0000002B',
                      }}
                      onClick={() => handleButtonClick('NewCategory')}
                    >
                      Add New Category
                    </button>
                  </Col>
                  <Col lg={8}></Col>
                </Row>

                <Row className='my-5'>
                  <Col>
                    <p
                      style={{
                        color: '#4C535F',
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                    >
                      Added Categories
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col lg={5}>
                    <div
                      className='p-3 mb-3'
                      style={{
                        borderRadius: '8px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                      }}
                    >
                      <p
                        style={{
                          color: '#4C535F',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                        className='my-0'
                      >
                        STARTER
                      </p>
                    </div>
                  </Col>
                  <Col lg={5}></Col>
                  <Col lg={1}>
                    <div className='d-flex' role='button'>
                      <img src='/Trash Bin.svg' alt='' className='me-2' />
                      <button
                        className=' d-flex bg-transparent '
                        style={{
                          color: '#FD342A',
                          borderTop: '0px',
                          borderLeft: '0px',
                          borderRight: '0px',
                          fontSize: '16px',
                          fontWeight: '500',
                          borderBottom: '1px solid #FD342A',
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </Col>

                  <Col lg={5}>
                    <div
                      className='p-3 mb-3'
                      style={{
                        borderRadius: '8px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                      }}
                    >
                      <p
                        style={{
                          color: '#4C535F',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                        className='my-0'
                      >
                        MAIN
                      </p>
                    </div>
                  </Col>
                  <Col lg={5}></Col>
                  <Col lg={1}>
                    <div className='d-flex' role='button'>
                      <img src='/Trash Bin.svg' alt='' className='me-2' />
                      <button
                        className=' d-flex bg-transparent '
                        style={{
                          color: '#FD342A',
                          borderTop: '0px',
                          borderLeft: '0px',
                          borderRight: '0px',
                          fontSize: '16px',
                          fontWeight: '500',
                          borderBottom: '1px solid #FD342A',
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </Col>

                  <Col lg={5}>
                    <div
                      className='p-3 mb-3'
                      style={{
                        borderRadius: '8px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                      }}
                    >
                      <p
                        style={{
                          color: '#4C535F',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                        className='my-0'
                      >
                        DESSERT
                      </p>
                    </div>
                  </Col>
                  <Col lg={5}></Col>
                  <Col lg={1}>
                    <div className='d-flex' role='button'>
                      <img src='/Trash Bin.svg' alt='' className='me-2' />
                      <button
                        className=' d-flex bg-transparent '
                        style={{
                          color: '#FD342A',
                          borderTop: '0px',
                          borderLeft: '0px',
                          borderRight: '0px',
                          fontSize: '16px',
                          fontWeight: '500',
                          borderBottom: '1px solid #FD342A',
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div
                      className='p-3 mb-3'
                      style={{
                        borderRadius: '8px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                      }}
                    >
                      <p
                        style={{
                          color: '#4C535F',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                        className='my-0'
                      >
                        DRINK
                      </p>
                    </div>
                  </Col>
                  <Col lg={5}></Col>
                  <Col lg={1}>
                    <div className='d-flex' role='button'>
                      <img src='/Trash Bin.svg' alt='' className='me-2' />
                      <button
                        className=' d-flex bg-transparent '
                        style={{
                          color: '#FD342A',
                          borderTop: '0px',
                          borderLeft: '0px',
                          borderRight: '0px',
                          fontSize: '16px',
                          fontWeight: '500',
                          borderBottom: '1px solid #FD342A',
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={8}></Col>
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
                      Back
                    </button>
                  </Col>
                  <Col lg={2}>
                    <button
                      className='border-0 w-100'
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
export default AddNewCategory;
