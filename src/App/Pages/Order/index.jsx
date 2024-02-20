import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import New from './OrderTabbarPages/New.jsx';
import Delivered from './OrderTabbarPages/Delivered.jsx';
import Process from './OrderTabbarPages/Process.jsx';
import SideContentForNew from './SidePageForNew.jsx';
import SideContentForDelivered from './SidePageForDelivered.jsx';
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
          <Row className='mt-4'>
            <Navbar />
          </Row>
          <Row
            className='my-0 my-md-4 m-0 m-md-2 shadow p-0 p-md-2'
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <Col md={4} xs={12} lg={4} className='my-2 '>
              <button
                className={`ms-3 border-0 shadow rounded-3 px-3 p-2  ${
                  activeTab === 'new' ? 'buttonbg' : ''
                }`}
                style={{
                  backgroundColor: activeTab === 'new' ? '#00BF63' : '#ffff',
                  color: activeTab === 'new' ? '#ffff' : '#00BF63',
                }}
                onClick={() => handleTabClick('new')}
              >
                New
              </button>
              <button
                className={`border-0 ms-3 shadow rounded-3 px-3 p-2  ${
                  activeTab === 'inProcess' ? 'buttonbg' : ''
                }`}
                style={{
                  backgroundColor:
                    activeTab === 'inProcess' ? '#00BF63' : '#ffff',
                  color: activeTab === 'inProcess' ? '#ffff' : '#00BF63',
                }}
                onClick={() => handleTabClick('inProcess')}
              >
                In Process
              </button>
              <button
                className={`border-0 ms-3 shadow rounded-3 px-3 p-2  ${
                  activeTab === 'delivered' ? 'buttonbg' : ''
                }`}
                style={{
                  backgroundColor:
                    activeTab === 'delivered' ? '#00BF63' : 'white',
                  color: activeTab === 'delivered' ? 'white' : '#00BF63',
                }}
                onClick={() => handleTabClick('delivered')}
              >
                Delivered
              </button>

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
