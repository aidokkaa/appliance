import React from 'react'
import './maps.css';
import Modal from '../modal/Modal';
const Maps = () => {
  const [open,setOpen]=React.useState(false)
  return (
    <div>
     <div className="contGray">
     <div className="mapCont">
        <div className="leftMap">
          <div className="divText">
            <p>Regular maintenance increases the life of your equipment. Book a service with us so that your equipment always works like new!</p>
            <button onClick={()=>setOpen(true)} className='btnSend'>Book now!</button>
            {open &&
               <Modal open = {open} setOpen= {setOpen}/>
              }
          </div>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Maps