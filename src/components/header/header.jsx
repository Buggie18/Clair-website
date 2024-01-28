import React from 'react'
import "./header.css";
import Navbar  from '../navbar/navbar.jsx';

const header = () => {
  return (
    <header>
      <div className='wrapper'>
        <Navbar/>
      </div>
    </header>
  )
}

export default header;
