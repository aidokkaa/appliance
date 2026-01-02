import '../header/header.css';
import { useState } from 'react';
import logo from '../../images/icelogo.jpg';
import burger from '../../images/burger.svg';
import { Link } from 'react-router-dom';

export default function Header({ aboutRef, faqRef, serviceRef, reviewRef, setOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Функция прокрутки с закрытием мобильного меню
  const scrollTo = (ref) => {
    setMenuOpen(false); // закрываем меню первым
    setTimeout(() => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // задержка для плавного закрытия overlay
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="topBar">
        <span>Monday-Sunday, 9 AM–6 PM</span>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="headerInner">
          <Link to='/'>
            <img src={logo} className="logoHeader" alt="Smart Appliance Repair" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav">
            <ul className="menu">
              <li onClick={() => scrollTo(aboutRef)}>About us</li>
              <li onClick={() => scrollTo(faqRef)}>FAQ</li>
              <li onClick={() => scrollTo(serviceRef)}>Services</li>
              <li onClick={() => scrollTo(reviewRef)}>Reviews</li>
            </ul>

            <Link to='/requestPage'>
              <button className="cta" onClick={() => setOpen(true)}>
                Schedule service
              </button>
            </Link>
          </nav>

          {/* BURGER ICON */}
          <div className="burger" onClick={() => setMenuOpen(true)}>
            <img src={burger} alt="Menu" />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobileMenu">
          <div className="close" onClick={() => setMenuOpen(false)}>✕</div>

          <a href="tel:+17734618902">Call us</a>

          {/* Скролл к секциям */}
          <span onClick={() => scrollTo(aboutRef)}>About us</span>
          <span onClick={() => scrollTo(faqRef)}>FAQ</span>
          <span onClick={() => scrollTo(serviceRef)}>Services</span>
          <span onClick={() => scrollTo(reviewRef)}>Reviews</span>

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
