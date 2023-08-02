import React from 'react';
import "./Add.css";

const Add = () => {
  return (
    <div className='addpage'>
      <div className='addbox'>
    <h1>Add Book</h1>
    <hr className='line'></hr>
    <div className='adddiv'>
   <label className='addimage'>Insert Image</label>
        <input type='file' id='choose-file' name='choose-file' />
       
        <label htmlFor='addText'>Add Description</label>
        <input type='text' placeholder='Describe Here' />
        <label htmlFor='authorname'>Author: </label>
        <input type='text' />
        <label htmlFor="addgenre">Genre:</label>
        <input type='text' />
        <label htmlFor='addlocation'>Add location</label>
        <input type='text' />
        <label htmlFor='addbuy-sell'>Buy/sell</label>
        <input type='text' />
    </div>
    </div>
    </div>
   
  )
}

export default Add;