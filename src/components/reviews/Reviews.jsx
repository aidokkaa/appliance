import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import "../reviews/review.css";

const reviews = [
 {
  name: "Melinda",
  text: `Fast, clear, professional, and best of all—affordable.They even gave me a 50% off coupon for the next service call (hopefully I won’t need it too soon!). Highly recommend.`,
  date: "6 month ago"
}
,
  { name: "Davi Davenport", text: `Two thumbs up and five stars across the board! Thank you again, you’ve definitely earned my business.`, date: "8 month ago" },
  { name: "Karen Levin", text: `I will continue to use Smart Appliance Repair for all my appliance repair needs and highly recommend them. Very reasonably priced, too!`, date: "2 month ago" },
  { name: "Michael D.", text: "Great experience from start to finish.", date: "May 2025" },
  { name: "Tania Ramirez", text: `The team is very professional, knowledgeable and so easy to work with. They solved my washer/ dryer problem with ease. Their pricing is very fair too!`, date: "1 month ago" },
  { name: "Vanessa Smith", text: `They were fast, courteous, explained everything clearly and cleaned up after themselves. Would highly recommend!`, date: "1 month ago" },
  { name: "Linda W.", text: "Technician was friendly and professional.", date: "February 2025" },
  { name: "Tom Brady.", text: `I’ve used Smart Appliance Repair for all my older Sub-Zero repairs. They’ve done great work, quickly and on budget. I highly recommend them…`, date: "6 month ago" },
];

const Reviews = forwardRef((props, ref)=> {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

const maxIndex = reviews.length - visibleCards;
useEffect(() => {
  const updateVisibleCards = () => {
    if (window.innerWidth <= 480) setVisibleCards(1);
    else if (window.innerWidth <= 768) setVisibleCards(2);
    else if (window.innerWidth <= 1024) setVisibleCards(3);
    else setVisibleCards(4);
  };

  updateVisibleCards();
  window.addEventListener("resize", updateVisibleCards);
  return () => window.removeEventListener("resize", updateVisibleCards);
}, []);


useEffect(() => {
  const interval = setInterval(nextSlide, 4000);
  return () => clearInterval(interval);
}, []);


const nextSlide = () => {
  setSlideIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
};

const prevSlide = () => {
  setSlideIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
};
  return (
    <section ref={ref} className="reviews-section">
      {/* <h2 className="reviews-title h2Topic">Customer Reviews</h2> */}
<div className="google-rating-block">
  <div className="google-rating-card">
    <div className="rating-main">
  
      <span className="rating-number">5.0</span>
      <span className="rating-star">★</span>
      <span className="rating-text">Google Rating</span>
    </div>

    <p className="rating-subtext">
      We’re proud to hold a perfect rating — thanks to customers who trust us every day.
    </p>
  </div>
</div>

      <div className="carousel-container">
        <button className="arrow" onClick={prevSlide}>‹</button>
     <div className="reviews-row-wrapper">
  <div
    className="reviews-row"
    style={{
      transform: `translateX(-${slideIndex * (100 / visibleCards)}%)`,
    }}
  >
    {reviews.map((item, index) => (
      <div className="review-card" key={index}>
        <div className="review-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="#4285F4" d="M23.86 12.27c0-.81-.07-1.42-.16-2.05H12v3.88h6.84c-.14 1.01-.9 2.53-2.59 3.55l-.02.13 3.7 2.87.26.03c2.41-2.22 3.8-5.49 3.8-8.41z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.94-3.06c-1.06.74-2.48 1.26-4.01 1.26-3.08 0-5.7-2.02-6.63-4.82l-.12.01-3.82 2.96-.04.12C3.38 21.47 7.39 24 12 24z" />
            <path fill="#FBBC05" d="M5.37 14.48c-.24-.74-.38-1.53-.38-2.34 0-.81.14-1.6.37-2.34l-.01-.16-3.87-3-.13.06C.48 8.45 0 10.17 0 12.14c0 1.97.48 3.69 1.36 5.44l4.01-3.1z" />
            <path fill="#EA4335" d="M12 4.77c1.76 0 2.95.76 3.62 1.39l2.64-2.57C16.94 1.93 14.96 1 12 1 7.39 1 3.38 3.53 1.36 6.93l4 3.1C6.3 6.8 8.92 4.77 12 4.77z" />
          </svg>

          <div className="review-name">
            <p className="name">{item.name}</p>
            <svg
              className="verified-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path fill="#1a73e8" d="M12 2l2.5 2.5L18 5l.5 3.5L21 12l-2.5 3.5L18 19l-3.5.5L12 22l-2.5-2.5L6 19l-.5-3.5L3 12l2.5-3.5L6 5l3.5-.5L12 2z" />
              <path fill="#fff" d="M10.2 13.6l-2-2 1.1-1.1 1.4 1.4 3.6-3.6 1.1 1.1z" />
            </svg>
          </div>
        </div>

        <div className="stars">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <p className="text">"{item.text}"</p>
        <p className="date">{item.date}</p>
      </div>
    ))}
  </div>
</div>

        <button className="arrow right" onClick={nextSlide}>›</button>
      </div>
 {/* <div className="btnReviews">
  <button className="btn">See all reviews</button>
</div> */}

    </section>
  );
})
export default Reviews


