import React from 'react'
import './faq.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Faq = ({faqRef}) => {
    const [openHeight,setOpenHeight]=React.useState(false);
    const [openHeight1,setOpenHeight1]=React.useState(false);
    const [openHeight4,setOpenHeight4]=React.useState(false);
    const [openHeight3,setOpenHeight3]=React.useState(false);
    const [openHeight5,setOpenHeight5]=React.useState(false);
    const [arrowUp,setUrrowUp]=React.useState(false)
    const openWindow =()=>{
        setOpenHeight(!openHeight)
    }
    const openWindow1 =()=>{
        setOpenHeight1(!openHeight1)
    }
    const openWindow3 =()=>{
        setOpenHeight3(!openHeight3)
    }
    const openWindow4 =()=>{
        setOpenHeight4(!openHeight4)
    }
    const openWindow5 =()=>{
        setOpenHeight5(!openHeight5)
    }
  return (
    <div>
       
       <div ref={faqRef} className="mCont">
       <h1 className='h1'>
        Frequently Asked Questions
        </h1>
       <div className="faqCont">
         <div className="faqItem" onClick={openWindow}>
            <div className="question">
            <h3 className='qText'>What does our company do?</h3>
            {openHeight ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow}/>
            }
            </div>
            {
                openHeight &&
                <p className = 'pText' >A home appliance repair technician specializes in diagnosing and troubleshooting various household appliances, such as refrigerators, washing machines, microwave ovens, vacuum cleaners, and other appliances, regardless of brand.</p>
            }
         </div>
         <div className="faqItem" onClick={openWindow1}>
            <div className="question">
            <h3 className='qText'>What guarantees do you give?</h3>
            {openHeight1 ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow1}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow1}/>
            }
            </div>
            {
                openHeight1 &&
                <p className = 'pText'> We provide guarantees for work performed
                     from 6 months to 3 years</p>
            }
         </div>
         <div className="faqItem" onClick={openWindow4}>
            <div className="question">
           <h3 className='qText'>
           How is the repair going?</h3>
           {openHeight4 ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow4}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow4}/>
            }
            </div>
            {
                openHeight4 &&
               <p className = 'pText'>
                1) The master comes to the house.

2) Conducts diagnostics.

3) After diagnosis, the technician will announce the cost of the work and only then begin the repair.

4) After the repair, the master will check the quality of the work and issue a guarantee.
               </p>
            }
         </div>
       
        </div>
       </div>
    </div>
  )
}

export default Faq