import './footer.css';
import { forwardRef } from "react";
const Footer = forwardRef ((props, ref) => {
  return (
    <div ref={ref} className='footer'>
      <div className="footerInner">
        <div className="company">
          <h3 className='footerH'>Ice Appliance Repair</h3>
          <p>Same-day appliance repair</p>
          <p>Licensed & insured technicians</p>
          <p>Serving Chicago & surrounding areas</p>
        </div>
        <div className="contacts">
          <h3 className='footerH'>Contact</h3>
          <b>Our locations:</b>
          <p>922 Davis Street Evanston, IL 60201 United States</p>
          <p>1149 Tower Rd, Schaumburg, IL 60173 United States</p>
          <a href="tel:+17734618902" className="footerLink">
            <b>Phone</b>: +1 (773) 461 89 02 
          </a>
          <a href="mailto:admin@iceappus.com" className="footerLink">
           <b>Email</b>: admin@iceappus.com
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
});

export default Footer;
