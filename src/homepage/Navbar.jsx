import React from 'react';
import "./Navbar.css";
import logo from "../image/download-removebg-preview.png";
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <span >
        <img  className='logo'src={logo} alt='logo' />
        </span>
        <span className='categories'>
        <span className='adv'>Adventures</span>
        <span className='fic'>fictional</span>
        <span className='non-fic'>Non-fictional</span>
        <span className='sport'>Sports</span>
        </span>
        <span className='icons'>
        <span className='icon1'><Person2Icon/></span>
        <span className='icon2'><FavoriteBorderIcon/></span>
        <span className='icon3'><ShoppingCartIcon/></span>
        </span>
        <button className='sell'>Sell</button>
        
    </div>
    </>
  )
}

export default Navbar;