import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import TableAssignQR from './TableAssignQR.jsx';
import { Link } from 'react-router-dom';
export const index = () => {
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
            <SideBar activetabe='QR' />
          </Col>
          <Col
            md={10}
            xs={10}
            className='custom-scrollbar'
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <NavBar />
            </Row>

            <Row
              className='m-2'
              style={{
                // overflowY: 'auto',
                // height: '100vh',
                backgroundColor: '#FFFFFF',
                boxShadow: '2px 4px 71.80000305175781px 0px #0000000F',
              }}
            >
              <div className='p-3 d-flex justify-content-between align-items-center '>
                <p
                  style={{
                    color: '#00BF63',
                    fontSize: '22px',
                    fontWeight: '600',
                  }}
                >
                  QR codes
                </p>
                <Link to='/AddNewQr'>
                  <button
                    className='border-0'
                    style={{
                      backgroundColor: '#FFFFFF',
                      boxShadow: ' 2px 4px 17.600000381469727px 0px #0000002B',
                      padding: '10px 30px 10px 30px',
                      color: '#00BF63',
                      fontSize: '14px',
                      borderRadius: '8px',
                      fontWeight: '500',
                    }}
                  >
                    Add New
                  </button>
                </Link>
              </div>

              <Row className='my-4'>
                <Col lg={3} md={3} xl={3} xs={6}>
                  <TableAssignQR />
                </Col>
                <Col lg={3} md={3} xl={3} xs={6}>
                  <TableAssignQR />
                </Col>
                <Col lg={3} md={3} xl={3} xs={6}>
                  <TableAssignQR />
                </Col>
                <Col lg={3} md={3} xl={3} xs={6}>
                  <TableAssignQR />
                </Col>
                <Col lg={3} md={3} xl={3} xs={6}>
                  <TableAssignQR />
                </Col>
                <Col lg={3} md={3} xl={3} xs={6}>
                  <TableAssignQR />
                </Col>
                <Col lg={3} md={3} xl={3} xs={6}>
                  <TableAssignQR />
                </Col>
                <Col lg={3} md={3} xl={3} xs={6}>
                  <TableAssignQR />
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
