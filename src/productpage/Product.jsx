import React from 'react';
import "./Product.css";
import image from "../image/download.jpeg";

const Product = () => {
  return (
    <div className='product'>
        <div>
          <img className='product-img' src={image} alt='product image' />
        </div>
        <div className='content'>
            <h1 className='title'>Title</h1>
            <h2 className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem deserunt voluptatum tenetur sapiente error pariatur? Tempora fuga magni adipisci? Fugiat necessitatibus dicta eius veritatis modi, quam accusamus fugit debitis voluptate, quia dolore! Quas libero repellendus deleniti odio! Illo non ratione unde eveniet minima voluptas, cum dicta dolorum iure eum blanditiis enim nobis sapiente quia! Molestias tempore adipisci dignissimos molestiae vero!</h2>
           <div className='mvp'>
             <span className='genre'> Genre: fiction</span>
            <span className='authorp'>Author: Sophia Hill</span>
            <span className='location'>Location: India</span>
            </div>
            <div className='button-div'>
           <button className='cartp'>Add to cart</button>
            
            </div>

        </div>
    </div>
  )
}

export default Product;