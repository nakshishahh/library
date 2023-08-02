import React from 'react';
import "./NavbarCollection.css";
import logo from "../image/download-removebg-preview.png";
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavbarCollection = () => {
  return (
    <>
    <div className='nav'>
        <span >
        <img  className='logo'src={logo} alt='logo' />
        </span>
        <div className='collectionheading'>
        <h1 className='collection'>YOUR   COLLECTIONS!!</h1>
        </div>
        <span className='addbutton'>
        <button className='add'>Add Item</button>
        </span>
        
    </div>
    </>
  )
}

export default NavbarCollection;