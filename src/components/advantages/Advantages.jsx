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
            <svg className='iconC' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M14.94 19.5L12 17.77L9.06 19.5l.78-3.34l-2.59-2.24l3.41-.29L12 10.5l1.34 3.13l3.41.29l-2.59 2.24M20 2H4v2l4.86 3.64a8 8 0 1 0 6.28 0L20 4m-2 11a6 6 0 1 1-7.18-5.88a5.9 5.9 0 0 1 2.36 0A6 6 0 0 1 18 15m-5.37-8h-1.26l-4-3h9.34Z"/></svg>
             <h3>Professional Staff</h3>
            </div>
            <div className="child1">
            <svg className='iconC' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="white" stroke-linejoin="round" stroke-width="4"><path d="M6 9.256L24.009 4L42 9.256v10.778A26.32 26.32 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z"/><path stroke-linecap="round" d="m15 23l7 7l12-12"/></g></svg>
                <h3>Guarantee</h3>
                </div>
                <div className="child1">
                <svg className='iconC' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="white" d="M14 6H1a11.4 11.4 0 0 1 1-4h11a11.4 11.4 0 0 1 1 4M3 7h9v6h-1V8H8v5H3zm1 3h3V8H4z"/></svg>
                 <h3>Residential and Commercial Appliance repair </h3>           
                </div>
                <div className="child1">
                <svg className='iconC' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M22 13.341A6 6 0 0 0 14.341 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-1.658L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513zm4.99 7.866a3 3 0 0 1 0-1.098l-1.014-.585l1-1.732l1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586l1 1.732l-1.014.585a3 3 0 0 1 0 1.098l1.014.585l-1 1.732l-1.014-.586a3 3 0 0 1-.95.55V23h-2v-1.17a3 3 0 0 1-.95-.55l-1.014.586l-1-1.732zM20 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>
                <h3>Only original spare parts</h3>
                </div>
        </div>
      </div>
       
    </div>
  )
}

export default Advantages