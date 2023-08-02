import React from 'react';
import "./Signup.css";
import Signin from './Signin';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className='wholes'>
    <div className='containers'>
    <h1>Welcome to the News App!</h1>
    <hr className='lines'></hr>
    <form className='forms'>
    <div className='names'>
        <label  htmlFor="names">Name</label>
        <input type="names"  placeholder="Enter your name" />
        </div>
      <div className='emails'>
        <label  htmlFor="emails">Email</label>
        <input type="emails"  placeholder="Enter your email" />
        </div>
        <div className='passwords'>
        <label htmlFor="passwords">password</label>
        <input type="passwords"  placeholder='Enter your password' />
        </div>
        <div className='mobile'>
        <label htmlFor="mobile">Mobile No</label>
        <input type="number"  placeholder='Enter your Mobile Number' />
        </div>
        <div className='aadhar'>
        <label htmlFor="aadhar">Aadhar No</label>
        <input type="number"  placeholder='Enter your Adhar Card Number' />
        </div>
        <button className='registers'>Submit</button>
    </form>
    If already Signed up . <Link to = "/" >Click Here</Link>
    </div>
    </div>
    
  )
}

export default Signup;