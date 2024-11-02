import React from 'react'
import { useState,useRef } from 'react';
import './header.css';
const Header = () => {
  return (
    <div className='header'>
      <div className="headerInner">
      <div className="flex1">
            logo
        </div>
        <div className="flex2">
            <p>Chicago Appliance Repair</p>
            <div className="headerMenu">
        <a href="#about"><span>About us</span></a>
        <a href=""><span>FAQ</span></a>
        <a href=""><span>Gallery</span></a>
        <a href=""><span>Review</span></a>
      </div>
        </div>
        <div className="flex3">
            <span>Call us:</span>
            <hr />
        </div>
      </div>
      
    </div>
  )
}

export default Header