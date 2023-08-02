import React from 'react';
import "./Cart.css";
import image from "../image/download.jpeg";

const Cart = () => {
  return (
    <div className='profile'>
        <h1 className='order'>Your Orders</h1>
        <div className='box'>
            <img className = "imgpro" src={image} alt="order-image" />
            </div>
            <div>
            <h2 className='titleorder'>Title</h2>
            <h2 className='quantity'>Quantity</h2>
            <button>Proceed to checkout</button>
            </div>
            </div>
        
  )
}

export default Cart;