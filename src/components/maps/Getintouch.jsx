import React from 'react'
import './maps.css';
import holod from '../../image/holod.mp4'
const Maps = () => {
  return (
    <div>
     <div className="contGray">
     <div className="mapCont">
        <div className="leftMap">
         <h1 className='hText'>Get in touch</h1>
         <form className='formTouch'>
          <input placeholder='Your name' type="text" />
          <input placeholder='Phone number' type="text" />
          <textarea placeholder='Message' name="" id=""></textarea>
          <button onClick={()=>alert('We will contact you soon!')} className='btnSend'>Send</button>
         </form>
        </div>
        <div className="rightMap">
        <video 
        className="frame" 
        width="600" 
        height="450" 
        autoPlay 
        loop 
        muted
      >
        <source src={holod} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Maps