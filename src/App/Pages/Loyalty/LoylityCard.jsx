import React from 'react';

const LoylityCard = ({ Image, points, Name }) => {
  return (
    <div>
      <div className='bg-white shadow rounded-4   mt-4'>
        <div className='w-100'>
          <img
            src={Image}
            alt=''
            className='w-100'
            style={{
              objectFit: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px 15px 15px 15px ',
            }}
          />
        </div>
        <div className='ms-2 py-2'>
          <p style={{ color: '#424242', fontSize: '16px', fontWeight: '400' }}>
            {Name}
          </p>
          <p style={{ color: '#00BF63', fontSize: '18px', fontWeight: '500' }}>
            {points} pts
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoylityCard;
