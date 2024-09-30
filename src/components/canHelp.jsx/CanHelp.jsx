import React from 'react'
import './canHelp.css'
import { PiOvenBold } from "react-icons/pi";
import { MdLocalLaundryService } from "react-icons/md";
import { BiSolidWasher } from "react-icons/bi";
import { LuRefrigerator } from "react-icons/lu";
const CanHelp = () => {
  return (
    <div className='canHelp'>
        <h1 className='canH' style={{marginTop:"50px"}}>How We Can Help You</h1>
        <div className="helpCont">
            <div className="child">
                <PiOvenBold className='iconC' />
             <h3>Kitchen Repairs</h3>
             <p>We service kitchen appliances.</p>
            </div>
            <div className="child">
                <MdLocalLaundryService className='iconC'/>
                <h3>Laundry Room Repairs</h3>
                <p>We'll fix your laundry appliances.</p>
                </div>
                <div className="child">
                    <BiSolidWasher className='iconC'/>
                 <h3>Dishwasher Repair</h3>
                 <p>We will repair your dishwasher.</p>
                </div>
                <div className="child">
                    <LuRefrigerator className='iconC'/>
                <h3>Refrigerator Repair</h3>
                <p>We perform refrigerator maintenance.</p>
                </div>
        </div>
    </div>
  )
}

export default CanHelp