import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import Delivered from './OrderTabbarPages/Delivered.jsx';
import New from './OrderTabbarPages/New.jsx';
import Process from './OrderTabbarPages/Process.jsx';
import SideContentForDelivered from './SidePageForDelivered.jsx';
import SideContentForNew from './SidePageForNew.jsx';
import SideContentForProcess from './SidePageForProcess.jsx';
const Index = () => {
  const [activeTab, setActiveTab] = useState('new');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };
  return (
    <Container fluid className='h-100'>
      <Row>
        <Col
          xs={2}
          md={2}
          className='text-center p-0 shadow '
          style={{
            backgroundColor: '#FFFFFF',
            height: '100vh',
            overflowY: 'hidden',
          }}
        >
          <SideBar activetabe='Orders' />
        </Col>
        <Col
          md={10}
          xs={10}
          className='custom-scrollbar'
          style={{ height: '100vh', overflowY: 'auto' }}
        >
          <Row>
            <Navbar />
          </Row>
          <Row
            className='my-0 my-md-4 m-0 m-md-2 shadow p-0 p-md-2'
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <Col md={4} xs={12} lg={4} className='my-2 '>
              <Row>
                <Col lg={4} md={4} xs={6}>
                  <button
                    className={`border-0 w-100  shadow rounded-3 px-3 p-2  ${
                      activeTab === 'new' ? 'buttonbg' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === 'new' ? '#00BF63' : '#FFFFFF',
                      color: activeTab === 'new' ? '#FFFFFF' : '#222222',
                    }}
                    onClick={() => handleTabClick('new')}
                  >
                    New
                  </button>
                </Col>
                <Col lg={4} md={4} xs={6}>
                  <button
                    className={`border-0 w-100 px-2 shadow rounded-3 p-2  ${
                      activeTab === 'inProcess' ? 'buttonbg' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === 'inProcess' ? '#00BF63' : '#FFFFFF',
                      color: activeTab === 'inProcess' ? '#FFFFFF' : '#222222',
                    }}
                    onClick={() => handleTabClick('inProcess')}
                  >
                    In Process
                  </button>
                </Col>
                <Col lg={4} md={4} xs={12}>
                  <button
                    className={`border-0 w-100 mt-3 mt-md-0 shadow rounded-3 px-3 p-2  ${
                      activeTab === 'delivered' ? 'buttonbg' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === 'delivered' ? '#00BF63' : '#FFFFFF',
                      color: activeTab === 'delivered' ? '#FFFFFF' : '#222222',
                    }}
                    onClick={() => handleTabClick('delivered')}
                  >
                    Delivered
                  </button>
                </Col>
              </Row>

              <div>
                {activeTab === 'new' && (
                  <div>
                    <New />
                  </div>
                )}
                {activeTab === 'inProcess' && (
                  <div>
                    <Process />
                  </div>
                )}
                {activeTab === 'delivered' && (
                  <div>
                    {' '}
                    <Delivered />
                  </div>
                )}
              </div>
            </Col>
            <Col md={8} xs={12} lg={8}>
              {/* Side content */}
              {activeTab === 'new' && (
                <div>
                  <SideContentForNew />
                </div>
              )}
              {activeTab === 'inProcess' && (
                <div>
                  <SideContentForProcess />
                </div>
              )}
              {activeTab === 'delivered' && (
                <div>
                  {' '}
                  <SideContentForDelivered />
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
