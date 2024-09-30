import React from 'react'
import { useState,useRef } from 'react';
import './header.css';
import { FaPhone } from "react-icons/fa6";
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
            {/* <h3> <FaPhone className='phone'/><a href="tel:+15712750418">9879098767</a></h3> */}
        </div>
      </div>
      
    </div>
  )
}

export default Header