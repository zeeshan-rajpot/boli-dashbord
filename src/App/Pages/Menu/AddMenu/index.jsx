import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar.jsx';
import SideBar from '../../../Components/Sidebar.jsx';
export const index = () => {
  const [activeButton, setActiveButton] = useState('STARTER');
  const [isActive, setIsActive] = useState(true);
  const [keywordInput, setKeywordInput] = useState('');
  const [data, setData] = useState({
    keywords: ['Hot Chocolate', 'Oreo Stick', 'Cappuccino'],
  }); // Initialize data state with keywords array

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  const addKeyword = () => {
    if (keywordInput.trim() !== '') {
      setData({
        ...data,
        keywords: [...data.keywords, keywordInput],
      });
      setKeywordInput('');
    }
  };

  const removeKeyword = index => {
    const updatedKeywords = [...data.keywords];
    updatedKeywords.splice(index, 1);
    setData({ ...data, keywords: updatedKeywords });
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
                    <Col lg={2} md={3} xs={6}>
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
                    <Col lg={2} md={3} xs={6}>
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
                    <Col lg={2} md={3} xs={6}>
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
                    <Col lg={2} md={3} xs={6}>
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

                    <Col lg={4} md={3} xs={6}>
                      <Link to='/AddNewCategory'>
                        <button
                          className=' shadow w-100'
                          style={{
                            padding: '10px 30px',
                            borderRadius: '8px',
                            border: '1px solid #00BF63',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: '#00BF6314',
                            color: '#00BF63',
                            boxShadow:
                              '2px 4px 17.600000381469727px 0px #0000002B',
                          }}
                          onClick={() => handleButtonClick('NewCategory')}
                        >
                          Add New Category
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </div>

                <Row>
                  <Col lg={4}>
                    <div className='d-flex flex-column justify-content-start align-items-start '>
                      <p
                        className='mb-3'
                        style={{
                          fontSize: '16px',
                          fontWeight: '500',
                          color: '#4C535F',
                        }}
                      >
                        Upload image of Item
                      </p>

                      <div
                        className='w-100 border-0 p-2 d-flex justify-content-center align-items-center'
                        style={{
                          backgroundColor: '#FFFFFF',
                          boxShadow:
                            '1px 2px 11.100000381469727px 0px #0000001A',
                          fontSize: '14px',
                          borderRadius: '8px',
                          fontWeight: '500',
                          color: '#B5B5B5',
                        }}
                      >
                        <img src='/gallery-add.svg' alt='' />

                        <p
                          className=' ms-2 pt-1'
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
                  </Col>
                  <Col lg={4}>
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
                  <Col lg={4}>
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
                  <Col lg={4}>
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                      <div
                        className='d-flex justify-content-center align-items-center'
                        onClick={toggleActive} // Toggle active state when clicked
                        style={{ cursor: 'pointer' }} // Add cursor pointer to indicate it's clickable
                      >
                        <img
                          src={
                            isActive
                              ? '/activeicon.svg'
                              : '/not active icon.svg'
                          }
                          alt=''
                        />{' '}
                        {/* Conditional rendering of the icon */}
                        <p
                          className='ms-2'
                          style={{
                            color: '#A6A6A6',
                            fontSize: '14px',
                            fontWeight: '400',
                          }}
                        >
                          Choose what you want to add
                        </p>
                      </div>
                      <div
                        className='d-flex justify-content-center align-items-center mt-4'
                        onClick={toggleActive} // Toggle active state when clicked
                        style={{ cursor: 'pointer' }} // Add cursor pointer to indicate it's clickable
                      >
                        <img
                          src={
                            isActive
                              ? '/not active icon.svg'
                              : '/activeicon.svg'
                          }
                          alt=''
                        />{' '}
                        {/* Conditional rendering of the icon */}
                        <p
                          className='ms-2'
                          style={{
                            color: '#A6A6A6',
                            fontSize: '14px',
                            fontWeight: '400',
                          }}
                        >
                          Add Ons
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <p
                      className='ms-2'
                      style={{
                        color: '#4C535F',
                        fontSize: '16px',
                        fontWeight: '600',
                      }}
                    >
                      Choose items to add
                    </p>

                    <div className='d-flex flex-column justify-content-start align-items-start w-100 '>
                      <div
                        style={{
                          boxShadow:
                            '1px 2px 11.100000381469727px 0px #0000001A',
                          borderRadius: '8px',
                          backgroundColor: '#FFFFFF',
                        }}
                      >
                        <input
                          className='d-flex  p-1 w-100 justify-content-start align-items-start border-0 '
                          style={{
                            backgroundColor: '#F9F9F9',
                            padding: '8px',
                            borderRadius: '2px',
                            marginBottom: '4px',
                          }}
                          placeholder='Add more Keywords |'
                          value={keywordInput}
                          onChange={e => setKeywordInput(e.target.value)}
                          onKeyPress={e => {
                            if (e.key === 'Enter') {
                              addKeyword();
                            }
                          }}
                          required
                        />
                      </div>

                      <div className='d-flex'>
                        {data.keywords.map((keyword, index) => (
                          <div
                            key={index}
                            className='rounded-5 p-2 me-2 text-center mt-2 d-flex text-nowrap '
                            style={{
                              backgroundColor: '#F9F9F9',
                              color: '#A6A6A6',
                              fontsize: '14px',
                              fontWeight: '400',
                              cursor: 'pointer',
                              padding: '2px',
                              borderRadius: '2px',
                              width: 'auto',
                            }}
                          >
                            {keyword}
                            <img
                              role='button'
                              src='/Cross.svg'
                              alt='Remove'
                              className='ms-3 '
                              onClick={() => removeKeyword(index)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
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
