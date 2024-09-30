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
         <div className="faqItem">
            <div className="question">
            <h3 className='qText'>What does our company do?</h3>
            {openHeight ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow}/>
            }
            </div>
            {
                openHeight &&
                <p className = 'pText' >A home appliance repair technician specializes in diagnosing and troubleshooting various household appliances such as refrigerators, 
                    washing machines, microwave ovens, vacuum cleaners and others, regardless of brand.</p>
            }
         </div>
         <div className="faqItem">
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
         <div className="faqItem">
            <div className="question">
            <h3 className='qText'>Do I need to provide any documents when handing over for repairs?</h3>
            {openHeight3 ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow3}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow3}/>
            }
            </div>
            {
                openHeight3 &&
                <p className = 'pText'>When filling out a service request, you must have a warranty card and relevant documents for the equipment</p>
            }
         </div>
         <div className="faqItem">
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
         <div className="faqItem">
            <div className="question">
            <h3 className='qText'>Should I repair or replace my existing appliance?</h3>
            {openHeight5 ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow5}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow5}/>
            }
            </div>
            {
                openHeight5 &&
                <p className = 'pText'>If you are comparing having your existing machine repaired or replacing it with a machine that is comparable in price with what you paid for your machine 10 or so years ago, you will not be making a valid comparison. The equipment is neither similar in quality nor durability for the same price. If you were to merely replace your existing household appliance with one that costs about what you paid a decade ago, you'll be repairing or junking the new machine every three to four years. You'll either have to pay more up front for a new, high-quality machine that will give you another 10 years of trouble-free operation or you pay less
                 up front for a low-end machine and then pay-as-you-go for repairs.</p>
            }
         </div>
        </div>
       </div>
    </div>
  )
}

export default Faq