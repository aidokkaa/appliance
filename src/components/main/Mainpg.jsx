import React from 'react'
import './mainpg.css'
import CanHelp from '../canHelp.jsx/CanHelp'
import Reviews from '../reviews/Reviews'
import Footer from '../footer/Footer'
import Modal from '../modal/Modal';
import Faq from '../faq/Faq'
import About from '../about/About';
import Maps from '../maps/Getintouch';
import Gallery from '../gallery/Gallery'
import Brands from '../brands/Brands'
import Advantages from '../advantages/Advantages'
import logo from '../../image/logolast.jpg'
import video from '../../image/electric.mov'
import burger from '../../image/burger.png'
const Mainpg = () => {
  const aboutRef = React.useRef(null)
  const faqRef = React.useRef(null)
  const galRef = React.useRef(null)
  const rewRef = React.useRef(null);
  const [open,setOpen]=React.useState(false)
  const [close,setClose]=React.useState(false)
  return (
    <div>
      <div className='header'>
      <div class="ribbon"><span className='spanRmain'>Have time to book!</span>
      <span className='spanR'>50% discount!</span>
     <svg style={{fontSize:"25px"}} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#f5b03e" d="M16.4 31.73s-6.45.51-7.31 1.96c-.87 1.45-.92 3.68-.92 6.13c0 2.46-.1 8.1-.1 8.1l1.54 3.31s.29 42.19.29 43.5c0 1.3 0 2.89 1.88 3.9s49.66 24.09 51.15 24.71c2.25.93 3.32.58 3.32.58l53.09-88.79s-.17-2.43-2.38-3.01c-1.27-.32-100.56-.39-100.56-.39"/><path fill="#e07f14" d="M65.68 60.92c-.81 2.23-.44 25.29-.3 42.06c.14 16.76-.43 20.23 0 20.81s1.6.02 4.91-1.45c6.15-2.72 35.69-17.34 37.86-18.64s7.47-3.99 8.34-5.44s1.34-14.94 1.63-25.77c.29-10.84.58-19.51.58-19.51l1.3-3.9s-.28-10.54-.33-11.7c-.09-1.92-.3-2.91-.79-2.67c-.7.33-6.54 5.12-22 12.64c-9.71 4.71-30.64 12.03-31.2 13.57"/><path fill="#fdd717" d="M65.82 11.21c-4.33-.2-16.18 6.65-27.6 10.4S9.56 32.9 9.41 33.34c-.14.43 6.94 3.6 11.46 5.77c5.37 2.57 25.87 12.28 29.62 13.87c3.76 1.59 12.72 5.31 14.16 5.2c2.02-.14 21.1-7.66 30.78-12.28s21.78-11.78 21.94-13.52c.07-.78-17.8-7.45-26.71-11.48c-17.2-7.79-21.67-9.54-24.84-9.69"/><path fill="#e37d14" d="M8.12 49.77c.15 1.88 1.18 2.55 3.8 3.69s52.15 26.87 53.29 26.87s1.48-4.08.23-3.97c-.68.06-16.95-7.67-32.15-15.39C20.39 54.43 8.04 47.9 8.04 47.9z"/><path fill="#ba5e0d" d="M120.01 48.99S67.12 75.89 66.6 76.15s-1.35.17-1.35.17l-.04 4.01s.49.11 1.04-.06c.32-.1 52.23-26.97 52.46-27.05s1.23-.68 1.44-1.95c.18-1.02-.14-2.28-.14-2.28"/><path fill="#af0f1b" d="m28.86 97.42l10.35 15.4l4.53 1.55s.37-16.8.52-29.25c.21-18.19.13-34.78.39-35.72c.43-1.59 20.56-8.12 20.56-8.12S87.95 48.41 88.67 50c.32.7.07 12.48 0 26.21c-.09 17.34-.06 37.36-.06 37.36s2.35-.01 2.63-.88c.29-.87 1.45-7.58 1.45-7.58l8.82-58.79l4.48-5.78l-6.22-11.84l-25.52-12.56l-8.77 1.97l-9.49-1.45l-30.1 21.63l3.51 7.12l8.61 4.39z"/><path fill="#dc0d28" d="M91.28 49.39c-.55 1.21-.23 63.56-.23 63.56s2.75-1.52 6.29-3.22c3.52-1.69 6.05-2.74 6.27-3.62s.61-62.54.61-62.54z"/><path fill="#ff2a23" d="M41.35 48.1c.33.36-.21 65.06-.88 65.21c-.53.13-12.58-5.25-12.58-5.8s.97-62.38.97-62.38S40.37 47 41.35 48.1m23.88-33.85c-3.33 0-7.01.95-8.08 3.74s-1.31 6.94-1.31 10.04c0 2.97-.48 10.57 8.67 10.45s9.42-3.51 9.56-10.99c.12-6.24-.71-9.27-1.54-10.57c-.74-1.17-3.2-2.67-7.3-2.67"/><path fill="#fcc9d2" d="M59.94 29.69c2.08.12 2.97-4.45 4.57-6.95c1.6-2.49 3.27-4.16 2.67-5.46c-.49-1.08-4.84-1.43-7.19 1.84c-1.65 2.31-1.94 10.46-.05 10.57"/><path fill="#ff2a23" d="M73.33 16.42s2.95 3 3.72 8.88s-.12 10.45-.12 10.45s14.66-.44 19.72.53c4.99.97 6.73 3.17 6.73 4.77s-3.28 2.89-6.61 2.65s-5.58-.42-6 .42s.18 2.14 4.81 2.49c4.63.36 9.98-.3 11.64-6.06s1.72-15.74 1.13-22.93s-1.89-11.3-5.11-12.86c-3.39-1.63-11.88-1.9-19.9 2.61s-10.01 9.05-10.01 9.05"/><path fill="#fcc9d2" d="M89.94 9.58c-1.04-1.34-4.39-1.3-6.18.77c-1.9 2.2-2.32 10.57.12 11.05c2.76.54 2.26-3.98 4.28-6.77c1.98-2.73 2.79-3.74 1.78-5.05"/><path fill="#ff2a23" d="M56.38 16.71S45.15 3.62 32.32 3.82c-7.72.12-9.68 4.57-10.1 6.41s-3.62 20.14.65 30.05S36 47.62 37.39 47.3c1.78-.42 5.57-1.72 5.21-3.09s-12.95 3.56-13.07-2.08s8.91-6.24 13.07-6.36s11.29.83 11.29.83s-1.25-6.83-.42-11.7s2.91-8.19 2.91-8.19"/><path fill="#fcc9d2" d="M28.88 8.57c-1.6 1.66-2.26 11.23-1.25 15.98s1.9 6.77 3.98 6.36c1.74-.35 2.79-9.67 3.62-12.95c.89-3.5 3.09-7.22 2.2-8.85c-1.36-2.5-6.88-2.27-8.55-.54"/></svg>
      </div>
      <div className="headerInner">
      <div className="flex1">
            <img style={{width:"160px",height:"160px"}} className='logo' src={logo} alt="" />
        </div>
        <div className="flex2">
            <div className="headerMenu">
        <a onClick={()=>{
          aboutRef.current?.scrollIntoView({
            behavior:'smooth'
          })
        }} href="#about"><span className='spanH'>About us</span></a>

        <a onClick={()=>{
          faqRef.current?.scrollIntoView({
            behavior:'smooth'
          })
        }} href="#faq"><span className='spanH'>FAQ</span></a>
        <a onClick={()=>{
          galRef.current?.scrollIntoView({
            behavior:'smooth'
          })
        }} href="#gal"><span className='spanH'>Gallery</span></a>
        <a onClick={()=>{
          rewRef.current?.scrollIntoView({
            behavior:'smooth'
          })
        }} href="#review"><span className='spanH'>Reviews</span></a>
        <span className='spanH'>Reviews</span>
        <div onClick={()=>setOpen(true)} className="btnn">
              <p style={{fontSize:"14px"}} className='bookS'>
              Schedule your service!</p>
            </div>
            {open &&
               <Modal open = {open} setOpen= {setOpen}/>
              }
      </div>
        </div>
        <div  onClick={()=>setOpen(true)} className="book">
          Book service
        </div>
        {open &&
               <Modal open = {open} setOpen= {setOpen}/>
              }
        <div onClick={()=>setClose(true)} className="burgerDiv">
           <img src={burger} alt="" className='burger'/>
        </div>
      </div>
      
    </div>
  {close && 
    <div className="burgerMenu">
    <div onClick={()=>setClose(false)}  className="closeMenu">X</div>
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
        rewRef.current?.scrollIntoView({
          behavior:'smooth'
        })
      }} href="#review"><span>Reviews</span></a>
    </div>}
            <div className="main-section">
      <div className="bg-main">
      <video className="background-video"  autoPlay muted loop playsInline>
        <source src={video} media="(min-width: 500px)" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className='welcome'>Welcome to Our Home Appliance Repair Service</h1>
        <p className='offer'>We offer professional repair services for all your home appliances.</p>
      </div>
      </div>
    </div>
    <Brands></Brands>
    <CanHelp/>
   
        <About aboutRef = {aboutRef}/>
        <Faq faqRef = {faqRef}/>
        <Advantages/>
        <div style={{padding:"60px"}} className="reviews">
        <Reviews rewRef = {rewRef}></Reviews>
        </div>
        <Gallery galRef={galRef}/>
        <Maps></Maps>
        <Footer></Footer>
    </div>
  )
}

export default Mainpg