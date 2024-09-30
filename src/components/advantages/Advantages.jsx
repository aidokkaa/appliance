import React from 'react'
import './advantages.css'
import { GiAchievement } from "react-icons/gi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BsPersonCheckFill } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
const Advantages = () => {
  return (
    <div>
      <div className="contGray1">
      <h1 >Our advantages</h1>
        <div className="helpCont">
            <div className="child1">
                < GiAchievement className='iconC' />
             <h3>Professional Staff</h3>
             {/* <p>We service kitchen appliances.</p> */}
            </div>
            <div className="child1">
                <AiOutlineFileProtect className='iconC'/>
                <h3>Guarantee</h3>
                {/* <p>We'll fix your laundry appliances.</p> */}
                </div>
                <div className="child1">
                    <BsPersonCheckFill className='iconC'/>
                 <h3>Residential and Commercial Appliance repair </h3>
                 {/* <p>We will repair your dishwasher.</p> */}
                </div>
                <div className="child1">
                    <GiAutoRepair className='iconC'/>
                <h3>Only original spare parts</h3>
                {/* <p>We perform refrigerator maintenance.</p> */}
                </div>
        </div>
      </div>
       
    </div>
  )
}

export default Advantages