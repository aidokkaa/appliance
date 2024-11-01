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
          <p>Gallery</p>
          <p>Contacts</p>
        </div>
        <div className="contacts">
          <h3 className='footerH'>Contacts</h3>
          <p>1234, Chicago, N Albany Ave</p>
          <p>Phone:123-323-45-65</p>
          <p>Email:appliance@gmail.com</p>
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
      <p>Privacy Policy</p>

      </div>
    </div>

  )
}
export default Footer