import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';

const index = () => {
  const data = [
    {
      id: 1,
      maindate: '27/02/2024',
      name: 'Thomas Shelby',
      date: '16/02/2024',
      table: 'Table of 1',
      time: '08:00 PM',
    },
    {
      id: 1,
      maindate: '',
      name: 'Thomas Shelby',
      date: '16/02/2024',
      table: 'Table of 1',
      time: '08:00 PM',
    },
    {
      id: 1,
      maindate: '',
      name: 'Thomas Shelby',
      date: '16/02/2024',
      table: 'Table of 1',
      time: '08:00 PM',
    },
    {
      id: 1,
      maindate: '26/02/2024',
      name: 'Thomas Shelby',
      date: '16/02/2024',
      table: 'Table of 1',
      time: '08:00 PM',
    },
    {
      id: 1,
      maindate: '',
      name: 'Thomas Shelby',
      date: '16/02/2024',
      table: 'Table of 1',
      time: '08:00 PM',
    },
    {
      id: 1,
      maindate: '',
      name: 'Thomas Shelby',
      date: '16/02/2024',
      table: 'Table of 1',
      time: '08:00 PM',
    },
    {
      id: 1,
      maindate: '',
      name: 'Thomas Shelby',
      date: '16/02/2024',
      table: 'Table of 1',
      time: '08:00 PM',
    },
    {
      id: 1,
      maindate: '',
      name: 'Thomas Shelby',
      date: '16/02/2024',
      table: 'Table of 1',
      time: '08:00 PM',
    },
  ];
  return (
    <>
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
            <SideBar activetabe='Reservations' />
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
            <Row className='mt-4'>
              <div>
                <div>
                  <div className='m-2 mb-4 pb-3 shadow rounded-3 '>
                    <div className='p-4'>
                      <p
                        className='textColor'
                        style={{ fontSize: '22px', fontWeight: '700' }}
                      >
                        Reservations
                      </p>
                    </div>

                    {/* <p
                        style={{
                          color: '#4C535F',
                          fontSize: '14px',
                          fontWeight: '500',
                        }}
                      >
                        27/02/2024
                      </p>

                      <div
                        className='mt-3 shadow rounded-4 p-3 d-flex justify-content-between align-items-center '
                        style={{ backgroundColor: '#FFFFFF' }}
                      >
                        <p>01.</p>
                        <p>Thomas Shelby</p>
                        <p>16/02/2024</p>
                        <p>Table of 1</p>
                        <p>08:00 PM</p>
                      </div> */}
                    {data.map((item, index) => (
                      <div key={index} className='px-4'>
                        <p
                          className='mt-3'
                          style={{
                            color: '#4C535F',
                            fontSize: '14px',
                            fontWeight: '500',
                          }}
                        >
                          {item.maindate}
                        </p>

                        <div
                          key={index}
                          className='mt-3 shadow rounded-4 p-3 d-flex justify-content-between align-items-center '
                          style={{ backgroundColor: '#FFFFFF' }}
                        >
                          <p
                            className='mt-2'
                            style={{
                              color: '#444444',
                              fontSize: '13px',
                              fontWeight: '400',
                            }}
                          >
                            01.
                          </p>
                          <p
                            style={{
                              color: '#444444',
                              fontSize: '13px',
                              fontWeight: '400',
                            }}
                          >
                            {item.name}
                          </p>
                          <p
                            style={{
                              color: '#444444',
                              fontSize: '13px',
                              fontWeight: '400',
                            }}
                          >
                            {item.date}
                          </p>
                          <p
                            style={{
                              color: '#444444',
                              fontSize: '13px',
                              fontWeight: '400',
                            }}
                          >
                            {item.table}
                          </p>
                          <p
                            style={{
                              color: '#444444',
                              fontSize: '13px',
                              fontWeight: '400',
                            }}
                          >
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
