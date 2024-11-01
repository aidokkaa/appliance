import React from 'react'
import './about.css'
import Modal from '../modal/Modal'
const About = ({aboutRef}) => {
  const [open,setOpen]=React.useState(false)
  const [close,setClose]=React.useState(false)
  return (
    <div>
      <div ref={aboutRef} className="contGrayAbout">
      <h1 className='h1About'>Our Company</h1>
        <div className="aboutCont">
            <div className="aboutLeft">
                <img src="https://d14ty28lkqz1hw.cloudfront.net/data/org/25318/theme/42390/img/Banner-15.jpg" alt="" />
            </div>
            <div className="aboutRight">
                <p className='p1'>
                Our company has been providing repair services for household appliances in Chicago.
                 We can easily repair: refrigerator, washing machine, TV, vacuum cleaner, dishwasher, water heater, audio equipment, car radio, 
                 oven or any other household appliance .
                </p>
                <p> The Chicago Appliance Repair specialists, due to their professionalism, carry out repairs in the shortest possible time with control on the way to achieving high quality 
                repairs. </p>
                <p className='p2'>The prices of our services are quite reasonable (we keep our pricing policy lower than that of most competitors), and our guarantees are as transparent as possible. In addition to warranty obligations for the work itself, we also provide warranties for components with the help of which household appliances are repaired. Our service center uses only original spare parts or
                high quality parts from certified analogue manufacturers.</p>
                <div onClick={()=>setOpen(true)} className="btnabout">
              <p className='bookS'>
              Book a service</p>
            </div>
            {open &&
               <Modal open = {open} setOpen= {setOpen}/>
              }
            </div>
       
        </div>
       
      </div>
   
    </div>
  )
}

export default About