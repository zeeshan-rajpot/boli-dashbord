import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const TableAssignQR = () => {
  return (
    <div>
      <div
        className='d-flex justify-content-between align-items-center my-3 '
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
            boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001C',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
          }}
        >
          #0011
        </button>
      </div>

      <div className='my-3'>
        <p
          style={{
            color: '#4C535F',
            fontSize: '10.62px',
            fontWeight: '400',
          }}
        >
          Assign QR
        </p>

        <div
          className='mt-3 py-4 d-flex justify-content-center align-items-center '
          style={{
            borderRadius: '5.31px',
            backgroundColor: '#FFFFFF',
            boxShadow:
              ' 0.6638888716697693px 1.3277777433395386px 7.369166851043701px 0px #0000001A',
          }}
        >
          <img src='/qr.png' alt='' />
        </div>
        <Row className='my-3'>
          <Col lg={6}>
            <button
              className='w-100'
              style={{
                padding: '7.3px 19.92px 7.3px 19.92px',
                borderRadius: '5.31px',
                backgroundColor: '#FFFFFF',
                border: '0.66px solid #00BF63',
                color: '#00BF63',
                fontSize: '10.62px',
                fontWeight: '500',
              }}
            >
              Delete
            </button>
          </Col>
          <Col lg={6}>
            <button
              className='border-0 w-100'
              style={{
                padding: '7.3px 19.92px 7.3px 19.92px',
                borderRadius: '5.31px',
                color: '#FFFFFF',
                backgroundColor: '#00BF63',
                fontSize: '10.62px',
                fontWeight: '500',
              }}
            >
              Generate PDF
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default TableAssignQR;
