import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './table.css';
import { baseUrl } from '../../Components/constants.jsx';
const RegisteredTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }

        const response = await fetch(
          `${baseUrl}/api/restaurant/getCustomers`, // Replace 'your-get-api-endpoint' with your actual API endpoint
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Network response was not ok: ${errorMessage}`);
        }

        const jsonData = await response.json();
        setData(jsonData.customers); // Assuming your API response is an array of objects similar to the 'data' array
        console.log(jsonData.customers);
     
      } catch (error) {
        console.error('API Error:', error.message);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>No data found.</div>;
  }

  return (
    <div className='px-5'>
      <Table responsive>
        <thead>
          <tr>
            <th className='tablehead'>No</th>
            {/* <th className='tablehead text-nowrap '>Profile Image</th> */}
            <th className='tablehead'>Name</th>
            <th className='tablehead'>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={index}>
              <td className='tabledata'>{index + 1}</td>
              {/* <td className='tabledata'>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    overflow: 'hidden',
                    borderRadius: '50%',
                  }}
                >
                  <img
                    src={val.Image}
                    alt='Profile'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </td> */}
              <td className='tabledata'>{val.name}</td>
              <td className='tabledata'>{val.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RegisteredTable;
