import React from 'react';

export const Upcomming = () => {
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
    <div>
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
  );
};
export default Upcomming;
