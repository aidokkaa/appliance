import './footer.css';
import { FaWhatsappSquare, FaInstagramSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerInner">
        <div className="company">
          <h3 className='footerH'>Ice Appliance Repair</h3>
          <p>Same-day appliance repair</p>
          <p>Licensed & insured technicians</p>
          <p>Serving Chicago & surrounding areas</p>
        </div>
        <div className="contacts">
          <h3 className='footerH'>Contacts</h3>
          <p>922 Davis Street</p>
          <a href="tel:+17734618902" className="footerLink">
            Phone: +1 (773) 461 89 02 
          </a>
          <a href="mailto:iceappusa@gmail.com" className="footerLink">
           admin@iceappus.com
          </a>
        </div>
        <div className="social">
          <a
            href="#"
            className='iconF'
          >
            <FaInstagramSquare />
          </a>

          <a
            href="#"
            className='iconF'
          >
            <FaFacebook />
          </a>
        </div>

      </div>

      <hr />

      <div className="rights">
        <span>© 2025.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
