// Signin.js
import React from 'react';
import "./Signin.css"; // Import the external CSS file for styling
import { Box } from '@mui/material';
import Signup from './Signup';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
    <div className='whole'>
      <div className='container'>
        <h1>Welcome Back!</h1>
        <hr className='line'></hr>
        <form className='form'>
          <div className='email'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className='password'>
            <label htmlFor="password">password</label>
            <input type="password" placeholder='Enter your password' />
          </div>
          <button className='logins'>Submit</button>
        </form>
        If not already signed up. <Link to="/signup">Click Here</Link>
      </div>
    </div>
    </>
  );
};

export default Signin;
