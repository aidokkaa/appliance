import React from 'react'
import './maps.css';
const Maps = () => {
  return (
    <div>
     <div className="contGray">
     <div className="mapCont">
        <div className="leftMap">
         <h2 className='hText'>Chicago Appliance Repair</h2>
         <p className='pLeft'>Chicago Appliance Repair technicians 
            serve the city of Chicago and its suburbs:</p>
            <div className="flexMap">
          <div className="one">
            <p>Naperville</p>
            <p>Naperville</p>
            <p>Naperville</p>
            <p>Naperville</p>
          </div>
          <div className="two">
          <p>Naperville</p>
            <p>Naperville</p>
            <p>Naperville</p>
            <p>Naperville</p>
          </div>
          {/* <div className="three">
          <p>Naperville</p>
            <p>Naperville</p>
            <p>Naperville</p>
            <p>Naperville</p>
          </div> */}
        </div>
        </div>
      
        <div className="rightMap">
        <iframe className='frame'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.996744636709!2d-87.72295212405133!3d41.95740497123315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcdbe9cd2cfb5%3A0x35fd5f9912ce9fff!2sN%20Lawndale%20Ave%2C%20Illinois!5e0!3m2!1sru!2sus!4v1724367670072!5m2!1sru!2sus"
         width="600" 
        height="450" 
        style={{border:'0'}} 
        allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Maps