import React, { useState } from 'react';
import './faq.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = ({ faqRef }) => {
  const faqs = [
    {
      question: "What does our company do?",
      answer: "A home appliance repair technician specializes in diagnosing and troubleshooting various household appliances..."
    },
    {
      question: "What guarantees do you give?",
      answer: "We provide guarantees for work performed from 45 days and above."
    },
    {
      question: "How is the repair going?",
      answer: `1) The master comes to the house.
2) Conducts diagnostics.
3) After diagnosis, the technician will announce the cost of the work and only then begin the repair.
4) After the repair, the master will check the quality of the work and issue a guarantee.`
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={faqRef} className="mCont">
      <h1 className='h1'>Frequently Asked Questions</h1>
      <div className="faqCont">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="faqItem"
            onClick={() => toggleFaq(index)}
          >
            <div className="question">
              <h3 className='qText'>{item.question}</h3>
              {openIndex === index ? 
                <IoIosArrowUp className='iconFaq rotate' /> : 
                <IoIosArrowDown className='iconFaq' />}
            </div>
            <div className={`faqAnswer ${openIndex === index ? 'open' : ''}`}>
              <p className='pText'>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
