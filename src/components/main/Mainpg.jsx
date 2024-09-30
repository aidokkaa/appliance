import React from 'react'
import './mainpg.css'
import { Link } from 'react-router-dom'
import CanHelp from '../canHelp.jsx/CanHelp'
import Header from '../header/Header'
import Reviews from '../reviews/Reviews'
import Footer from '../footer/Footer'
import Modal from '../modal/Modal';
import { FaPhone } from "react-icons/fa6";
import Faq from '../faq/Faq'
import About from '../about/About';
import Maps from '../maps/Maps';
import Gallery from '../gallery/Gallery'
import Advantages from '../advantages/Advantages'
import logo from '../../image/logo appl.jpg';
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
      <div className="headerInner">
      <div className="flex1">
            <img className='logo' src={logo} alt="" />
        </div>
        <div className="flex2">
            <h3 className='flex2H3'>Chicago Appliance Repair</h3>
            <p>Independently Owned and Operated</p>
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
      </div>
        </div>
        <div className="flex3">
            <span>Call us:</span>
            <hr />
            <h3> <FaPhone className='phone'/><a className='h3A' href="tel:+15712750418">9879098767</a></h3>
        </div>
        <div onClick={()=>setClose(true)} className="burgerDiv">
           <img src={burger} alt="" className='burger'/>
        </div>
      </div>
      
    </div>
  {close && 
    <div className="burgerMenu">
    <div onClick={()=>setClose(false)}  className="closeMenu">X</div>
    <a href="tel:+15712750418">Call us</a>
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
      <a onClick={()=>{
        galRef.current?.scrollIntoView({
          behavior:'smooth'
        })
      }} href="#gal"><span>Gallery</span></a>
      <a onClick={()=>{
        rewRef.current?.scrollIntoView({
          behavior:'smooth'
        })
      }} href="#review"><span>Reviews</span></a>
    </div>}
        <div className="main">
          <div className="mainLeft">
            <h1 >Your Local Appliance Repair Service Experts</h1>
            <div className="marg">
            <p >
            Are you worried about your equipment breaking down? 
            Restoring balance to your home life!</p>
            <h3>Schedule your service!</h3>
            </div>
            <div onClick={()=>setOpen(true)} className="btn">
              <p>
              Book a service</p>
            </div>
              {open &&
               <Modal open = {open} setOpen= {setOpen}/>
              }
          </div>
        </div>
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