import React from 'react'
import './footer.css';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerInner">
        <div className="company">
          <h3 className='footerH'>Company</h3>
          <p>About Company</p>
          <p>Services</p>
          <p>Contacts</p>
        </div>
        <div className="contacts">
          <h3 className='footerH'>Contacts</h3>
          <p>4617 North Lawndale Ave</p>
          <p>Phone:+1 773 678 35 68</p>
          <p>Email:smartappliance01@gmail.com</p>
        </div>
        <div className="social">
          <span className='iconF'><FaWhatsappSquare/></span>
          <span className='iconF'><FaInstagramSquare /></span>
          <span className='iconF'><FaFacebook/></span>
        </div>
      </div>
      <hr />
      <div className="rights">
    <span> 2024. </span>
      <span>All rights reserved</span>
      <a style={{textDecoration:"none"}} href="https://www.privacypolicies.com/live/21dde6a6-73bc-4d83-b956-72a9cfc8027b"><p>Privacy Policy</p></a>

      </div>
    </div>

  )
}
export default Footer