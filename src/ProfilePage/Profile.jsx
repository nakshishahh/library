import React from 'react';
import "./Profile.css";
import image from "../image/download.jpeg";

const Profile = () => {
  return (
    <div className='profile'>
        <h1 className='order'>Your Orders</h1>
        <div className='box'>
            <img className = "imgpro" src={image} alt="order-image" />
            </div>
            <div>
            <h2 className='titleorder'>Title</h2>
            <h2 className='quantity'>Quantity</h2>
            </div>
            </div>
        
  )
}

export default Profile;