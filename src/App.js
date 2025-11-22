import './App.css';
import React from 'react'
import logo from '../src/images/logo4.jpg'
import Services from './components/services/Services';
import Modal from './components/modal/Modal';
import Faq from './components/faq/Faq';
import burger from '../src/images/burger.png';
import Footer from './components/footer/Footer';
function App() {
   const aboutRef = React.useRef(null)
    const faqRef = React.useRef(null)
    const galRef = React.useRef(null)
    const reviewRef = React.useRef(null);
    const [open,setOpen]=React.useState(false)
    const [close,setClose]=React.useState(false)
  return (
    <div className="App">
           <div>
<header className="header">
  <div className="headerInner">
    <div className="flex1">
      <img className="logo" src={logo} alt="Appliance Logo" />
    </div>

    {/* Навигация */}
    <nav className="flex2">
      <ul className="headerMenu">
        <li><a href="#about" onClick={() => aboutRef.current?.scrollIntoView({behavior: 'smooth'})}>About us</a></li>
        <li><a href="#faq" onClick={() => faqRef.current?.scrollIntoView({behavior: 'smooth'})}>FAQ</a></li>
        <li><a href="#gal" onClick={() => galRef.current?.scrollIntoView({behavior: 'smooth'})}>Gallery</a></li>
        <li><a href="#review" onClick={() => reviewRef.current?.scrollIntoView({behavior: 'smooth'})}>Reviews</a></li>
      </ul>
      <button className="btnn" onClick={() => setOpen(true)}>Schedule your service!</button>
    </nav>

    {/* Бургер-меню для мобильных */}
    <div className="burgerDiv" onClick={() => setClose(true)}>
      <img src={burger} alt="Menu" className='burger'/>
    </div>
  </div>
</header>

  {close && 
    <div className="burgerMenu">
    <div onClick={()=>setClose(false)} className="closeMenu">X</div>
    <a href="tel:+17736783568">Call us</a>
    <a onClick={()=>{
        aboutRef.current?.scrollIntoView({
          behavior:'smooth'
        })
      }} href="#about"><span>About us</span></a>
      <a onClick={()=>{
        faqRef.current?.scrollIntoView({
          behavior:'smooth'
        })
      }} href="#faq"><span>FAQ</span></a>
      <a onClick={()=>setOpen(true)} href="#"><span>Schedule your service!</span></a>
      {open &&
               <Modal open = {open} setOpen= {setOpen}/>
              }
      <a onClick={()=>{
        reviewRef.current?.scrollIntoView({
          behavior:'smooth'
        })
      }} href="#review"><span>Reviews</span></a>
    </div>}
            <div onClick={()=>setClose(false)} className="main-section">
            <div className="content">
        <h1 className='welcome'>Welcome to Our Home Appliance Repair Service</h1>
        <p className='offer'>We offer professional repair services for all your home appliances.</p>
      </div>
   
    </div>
    <Services></Services>
        <Faq faqRef = {faqRef}/>
        <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
