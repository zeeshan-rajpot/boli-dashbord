import React from 'react';

export const TableAssignQR = () => {
  return (
    <div>
      <div
        className='d-flex justify-content-between align-items-center '
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
    </div>
  );
};
export default TableAssignQR;
