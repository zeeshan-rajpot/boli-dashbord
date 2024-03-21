import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
      };
    
      const validate = (values) => {
        const errors = {};
    
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
    
        if (!values.password) {
          errors.password = 'Password is required';
        }
    
        return errors;
      };
    
      const handleSubmit = async (values, { setSubmitting }) => {
        try {
          const response = await axios.post('https://boli.azurewebsites.net/api/restaurant/login', values);
          const token = response.data.token; // Assuming the token is returned in the response
          localStorage.setItem('token', token);
          console.log(response.data); // Handle the response from the server
          Alert.success('Logged in successfully'); // Display a success message
        } catch (error) {
          console.error('Error:', error); // Log any errors
          Alert.error('Login failed'); // Display an error message
        }
        setSubmitting(false);
      };
  return (
    <>
      <div className='ms-2 d-block d-md-flex  justify-content-around ' style={{height:'100vh'}} >
        <div className=''>
<h1 className='mt-5 d-flex   align-items-center' style={{color:'#00BF63'}}>
    BOLI 
</h1>

<div className='d-flex   align-items-center flex-column mart100' style={{marginTop:'50px'}}>


<Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      >
      {({ isSubmitting }) => (
        <Form>
            <div>
                <h2 className='fw-bold'>Log In</h2>
                <p style={{color:"#667085"}}>Please fill your detail to access your account.</p>
            </div>
          <div className='mt-4'>
            <label htmlFor="email" className='mb-1'>Email</label>
            <br />
            <Field type="email" id="email" name="email" className='border rounded-2 p-2  w-100'  />
            <ErrorMessage name="email" component="div" className="error " />
          </div>
          <div className='mt-3'>
            <label htmlFor="password" className='mb-1'>Password</label>
            <br />
            <Field type="password" id="password" name="password" className='border rounded-2 p-2  w-100 ' />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className='mt-2 d-flex justify-content-between'>
            <div >
            <input type="checkbox" />
            <label htmlFor="checkbox" className='fw-normal ms-1'>Remember me</label>
            </div>
           <p style={{
               color:"#00BF63"
            }}
            className='fw-bold'>Forgot Password?</p>
          </div>
          <div className='mt-2'>
          <button type="submit" disabled={isSubmitting} className='border rounded-2 p-2 w-100' style={{background:'#00BF63', color:"white"}} >Sign In</button>
          </div>
          <div className='text-center mt-2'>
            <p>Don’t have an account? <span style={{
                color :"  #00BF63  "
            }}>Sign up</span></p>
          </div>
        </Form>
      )}
    </Formik>
      </div>


        </div>
        

        <div className='object-contain  d-md-flex d-none  '>
            <img src="/Frame 1.png" alt="" srcset=""  className='w-100 h-auto'/>
        </div>

      </div>
    </>
  )
}

export default Login
