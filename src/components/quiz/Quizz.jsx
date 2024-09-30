import React from 'react'
import './quiz.css'
import { FaPhoneAlt } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
const Quizz = () => {
  return (
    <div>
       <div className="quizDiv">
       <p>
        How can we help you?</p>
        <p>
        In case of emergency, call us by phone:</p>
      <p>  <span><FaPhoneAlt/> </span>  <span> 77899878998</span></p>
       </div>
       <div className="progress">
         <div className="circle"></div>
       </div>
       <div className="info">
        <div className="span">
        <span>Service
        Information</span>
        </div>
       <div className="span">
       <span>Schedule
          Day/Time</span>
       </div>
        <div className="span">
        <span>Contact
        Information</span>
        </div>
       </div>
      
       <div className="form">
          <form action="">
          <p>Select service below:</p>
            <div className="inputs">
            <div className="checkBox">
              <input type="radio" name="" id="lkl" />
              <label htmlFor="lkl">Refrigerator</label>
              </div>
              <div className="checkBox">
              <input type="radio" name="" id="DishWasher" />
              <label htmlFor="lkl">DishWasher</label>
              </div>
              <div className="checkBox">
              <input type="radio" name="" id="Microwave" />
              <label htmlFor="lkl">Microwave</label>
              </div>
              <div className="checkBox">
              <input type="radio" name="" id="Oven" />
              <label htmlFor="lkl">Oven</label>
              </div>
              <h2>Services Information</h2>
              <p>Tell us more about the appliance and the issue you are having.</p>
              <textarea placeholder='Describe your problem' name="" id=""></textarea>
              <p>What is brand of the appliance?*</p>
               <select name="" id="">
                <option value="">Select one of this</option>
                <option value="">Toshiba</option>
                <option value="">Samsung</option>
                <option value="">Nokia</option>
               </select>
               <div className="nextBtn">
               <button >Next <HiArrowSmRight /></button>
               </div>
   
            </div>

          </form>
       </div>
    </div>
  )
}

export default Quizz