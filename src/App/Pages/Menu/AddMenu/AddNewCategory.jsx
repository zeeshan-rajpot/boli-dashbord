import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../../Components/Navbar.jsx';
import SideBar from '../../../Components/Sidebar.jsx';
import { baseUrl } from '../../../Components/constants.jsx';

export const AddNewCategory = () => {
  const [textData, setTextData] = useState({
    categoryName: '',
  });

  const handleDoneClick = async () => {
    try {
      const formData = new FormData();
      formData.append('name', textData.categoryName);

      console.log('Form Data:', formData);

      console.log('Category Name:', textData.categoryName); // Log category name

      const response = await axios.post(
        `${baseUrl}/api/restaurant/addCategory`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log('hello');
      console.log(response.data.message);
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleApiError = error => {
    if (error.response) {
      console.error('API Error Status:', error.response.status);
      console.error('API Error Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }
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
                      <div style={{ width: '45%' }}>
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
                        onChange={e => {
                          console.log('Input Value:', e.target.value);
                          setTextData({
                            ...textData,
                            categoryName: e.target.value,
                          });
                        }}
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
                      onClick={handleDoneClick}
                    >
                      Add New Category
                    </button>
                  </Col>
                  <Col lg={8}></Col>
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
