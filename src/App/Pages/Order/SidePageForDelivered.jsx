import React from 'react';
import { Container, Row } from 'react-bootstrap';
const SidePageForDelivered = () => {
  return (
    <div>
      <Container>
        <Row className='text-center'>
          <div className=' mt-3 d-flex justify-content-between align-items-center'>
            <p
              className='my-0 textColor'
              style={{ fontWeight: '600', fontSize: '22px' }}
            >
              Order Details
            </p>
            <p
              className='my-0 textColordull'
              style={{ fontWeight: '400', fontSize: '14px' }}
            >
              Date: 17. 07. 2022
            </p>
          </div>

          <div className='text-start'>
            <p
              className='my-0 textColordull'
              style={{ fontWeight: '500', fontSize: '16px' }}
            >
              Order #010104
            </p>
            <p
              className='my-0 textColordull'
              style={{ fontWeight: '500', fontSize: '14px' }}
            >
              Table No. 10
            </p>
          </div>

          <hr />

          <div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex  justify-content-center align-items-center'>
                <div
                  className='d-flex shadow  justify-content-center align-items-center  bg-white align-items-center'
                  style={{
                    height: '46px',
                    width: '46px',
                    borderRadius: '50%',
                    color: '#00BF63',
                  }}
                >
                  <p
                    className='my-0'
                    style={{ fontSize: '20px', fontWeight: '600' }}
                  >
                    1
                  </p>
                </div>
                <div className='ms-4'>
                  <p
                    className='my-0'
                    style={{ fontWeight: '400', fontSize: '16px' }}
                  >
                    Mixed Ice Cream in Sundae Cup
                  </p>
                </div>
              </div>
              <div>
                <p
                  className='my-0'
                  style={{ fontWeight: '400', fontSize: '18px' }}
                >
                  $12
                </p>
              </div>
            </div>
            <div className='my-3 d-flex justify-content-between align-items-center'>
              <div className='d-flex  justify-content-center align-items-center'>
                <div
                  className='d-flex shadow  justify-content-center align-items-center  bg-white align-items-center'
                  style={{
                    height: '46px',
                    width: '46px',
                    borderRadius: '50%',
                    color: '#00BF63',
                  }}
                >
                  <p
                    className='my-0'
                    style={{ fontSize: '20px', fontWeight: '600' }}
                  >
                    2
                  </p>
                </div>
                <div className='ms-4'>
                  <p
                    className='my-0'
                    style={{ fontWeight: '400', fontSize: '16px' }}
                  >
                    Mixed Ice Cream in Sundae Cup
                  </p>
                </div>
              </div>
              <div>
                <p
                  className='my-0'
                  style={{ fontWeight: '400', fontSize: '18px' }}
                >
                  $12
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className='d-flex justify-content-between align-items-center'>
            <p
              className='my-0 textColordull'
              style={{ fontWeight: '500', fontSize: '20px' }}
            >
              Order fee
            </p>

            <p className='my-0' style={{ fontWeight: '400', fontSize: '18px' }}>
              $19
            </p>
          </div>
          <div className='d-flex my-3 justify-content-between align-items-center'>
            <p
              className='my-0 textColordull'
              style={{ fontWeight: '500', fontSize: '20px' }}
            >
              Discount
            </p>

            <p className='my-0' style={{ fontWeight: '400', fontSize: '18px' }}>
              $3
            </p>
          </div>
          <hr />

          <div className='d-flex my-3 justify-content-between align-items-center'>
            <p
              className='my-0 textColordark'
              style={{ fontWeight: '500', fontSize: '20px' }}
            >
              Total Amount
            </p>

            <p
              className='my-0 textColor'
              style={{ fontWeight: '600', fontSize: '24px' }}
            >
              $16
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default SidePageForDelivered;
