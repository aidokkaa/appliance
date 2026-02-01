import '../header/header.css';
import { useState } from 'react';
import logo from '../../images/icelogo.jpg';
import burger from '../../images/burger.svg';
import { Link,useLocation } from 'react-router-dom';

export default function Header({ aboutRef, faqRef, serviceRef, setOpen, contactRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isRequestPage = location.pathname === "/requestPage";
  const scrollTo = (ref) => {
    setMenuOpen(false); 
    setTimeout(() => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };

  return (
    <>
      <div className="topBar">
        <span>Monday-Sunday, 9 AM–6 PM</span>
      </div>
      <header className="header">
        <div className="headerInner">
          <Link to='/'>
            <img src={logo} className="logoHeader" alt="ICE Appliance Repair" />
          </Link>
     {
      !isRequestPage && (
             <nav className="nav">
            <ul className="menu">
              <li onClick={() => scrollTo(aboutRef)}>About us</li>
              <li onClick={() => scrollTo(faqRef)}>FAQ</li>
              <li onClick={() => scrollTo(serviceRef)}>Services</li>
              <li onClick={() => scrollTo(contactRef)}>Contacts</li>
            </ul>

            <Link to='/requestPage'>
              <button className="cta" onClick={() => setOpen(true)}>
                Schedule service
              </button>
            </Link>
          </nav>
      )
     }
          {
            !isRequestPage && (
              <div className="burger" onClick={() => setMenuOpen(true)}>
            <img src={burger} alt="Menu" />
          </div>
            )
          }
          
        </div>
      </header>
      {menuOpen && (
        <div className="mobileMenu">
          <div className="close" onClick={() => setMenuOpen(false)}>✕</div>

          <a href="tel:+17734618902">Call us</a>
          <span onClick={() => scrollTo(aboutRef)}>About us</span>
          <span onClick={() => scrollTo(faqRef)}>FAQ</span>
          <span onClick={() => scrollTo(serviceRef)}>Services</span>
          <span onClick={() => scrollTo(contactRef)}>Contact</span>

          <Link to='/requestPage'>
            <button className="mobileCTA" onClick={() => {
              setMenuOpen(false);
              setOpen(true);
            }}>
              Schedule service
            </button>
          </Link>
        </div>
      )}
    </>
  );
}