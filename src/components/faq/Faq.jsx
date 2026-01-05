import React, { useState } from "react";
import "./faq.css";
import { forwardRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FaqSchema from "./FaqSchema";

const Faq = forwardRef((props, ref) => {
  const faqs = [
    {
      question: "Do you offer same-day appliance repair?",
      answer:
        "Yes, we offer same-day appliance repair in most cases. Our technicians carry common parts and tools, which allows us to complete many repairs during the first visit."
    },
    {
      question: "How much does appliance repair cost?",
      answer:
        "The cost of appliance repair depends on the type of appliance, the issue, and required parts. After diagnostics, we provide a clear upfront estimate before starting any repair."
    },
    {
      question: "Is there a diagnostic fee?",
      answer:
        "Yes, a diagnostic fee may apply. If you proceed with the repair, the diagnostic cost is often applied toward the total repair price."
    },
    {
      question: "Do you provide a warranty on appliance repairs?",
      answer:
        "Yes, we provide a warranty on both labor and replaced parts. Warranty terms typically start from 50 days, depending on the type of repair."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FaqSchema faqs={faqs} />
      <section ref={ref} className="mCont">
        <h1 className="h2Topic">Frequently Asked Questions</h1>

        <div className="faqCont">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="faqItem"
              onClick={() => toggleFaq(index)}
            >
              <div className="question">
                <h3 className="qText">{item.question}</h3>
                {openIndex === index ? (
                  <IoIosArrowUp className="iconFaq" />
                ) : (
                  <IoIosArrowDown className="iconFaq" />
                )}
              </div>

              <div className={`faqAnswer ${openIndex === index ? "open" : ""}`}>
                <p className="pText">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
})

export default Faq;
