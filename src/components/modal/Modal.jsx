import React from 'react'
import './modal.css'
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../../image/logolast.jpg'
import Comp1 from '../Comp1';
import Comp2 from '../Comp2';
import Comp3 from '../Comp3';
const components = [
  <Comp1/>,
  <Comp2/>,
  <Comp3/>
]
const Modal = ({open,setOpen}) => {
  const [selectedDate,setDate]=React.useState(null)
  const [step,setStep] = React.useState(0)
  const [selectBrand,setSelectBrand] = React.useState('')
  console.log(selectBrand)
  const [selectTime,setSelTime]=React.useState('')
  console.log(selectTime)
  const selComp = components[step]
  const [width,setWidth] = React.useState(0);
  const [category,setCategory]=React.useState(0);
  return (
    <div>
        <div className="overlay" onClick={()=>setOpen(false)}>
           <div  className='modal' onClick={e=>e.stopPropagation()}>
            <div onClick ={()=>setOpen(false)} className="close">
              <h2>x</h2>
            </div>
            <div className="width">
            <div className="top">
              <div className="logoModal">
                <img className='logoModal' src={logo} alt="" />
              </div>
              <div className="call">
                <p className='callP'>In case of emergency, call us by phone:</p>
                <b><a style={{textDecoration:"none"}} href="tel:+17736783568"><p className='num'> <FaPhoneAlt /> +1 773 678 35 68</p></a></b>
              </div>
            </div>
       <div className="center">
       <div className="progress" >
         <div className="circle" style={{width:`${width}%`}}></div>
       </div>
       <div className="info">
        <div className="span">
        <span>Service
        Info</span>
        </div>
       <div className="span">
       <span>Schedule
          Day/Time</span>
       </div>
        <div className="span">
        <span>Contact
        Info</span>
        </div>
       </div>
       </div>
        {
        width===0 &&
        (<Comp1 category = {category} setCategory={setCategory} selectBrand = {selectBrand} setSelectBrand={setSelectBrand} width = {width} setWidth = {setWidth}/>)
        }
        {
          width===50 &&
          (<Comp2 selectedDate={selectedDate} setDate={setDate}  selectTime = {selectTime} setSelTime = {setSelTime} width = {width} setWidth = {setWidth}/>)
        }
          {
          width===100 &&
          (<Comp3 category = {category} selectedDate={selectedDate} setDate={setDate}  selectTime = {selectTime} setSelTime = {setSelTime} width = {width} setWidth = {setWidth} selectBrand = {selectBrand}/>)
        }
            </div>
           </div>
        </div>       
    </div>
  )
}

export default Modal