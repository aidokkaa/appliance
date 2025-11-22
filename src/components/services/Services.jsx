import React from "react";
import "./Services.css";

const servicesData = [
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="6" width="18" height="12" rx="2"></rect>
      <rect x="6" y="9" width="8" height="6" fill="white"></rect>
      <circle cx="17" cy="12" r="1" fill="white"></circle>
      <circle cx="17" cy="15" r="1" fill="white"></circle>
    </svg>
, title: "Refrigerators" },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
  <rect x="4" y="3" width="16" height="18" rx="2"></rect>
  <circle cx="12" cy="12" r="5" fill="white"></circle>
  <circle cx="12" cy="12" r="1" fill="white"></circle>
</svg>
, title: "Washing Machines" },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
  <rect x="4" y="3" width="16" height="18" rx="2"></rect>
  <rect x="7" y="8" width="10" height="2" fill="white"></rect>
  <circle cx="9" cy="15" r="1" fill="white"></circle>
  <circle cx="12" cy="15" r="1" fill="white"></circle>
  <circle cx="15" cy="15" r="1" fill="white"></circle>
</svg>
, title: "Dishwashers" },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
  <rect x="6" y="9" width="12" height="6" fill="white"></rect>
</svg>
, title: "Microwaves" },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="3" width="16" height="18" rx="2"></rect>
    <circle cx="12" cy="12" r="5" fill="white"></circle>
    <circle cx="12" cy="12" r="1" fill="white"></circle>
    <rect x="6" y="16" width="12" height="2" fill="white"></rect>
  </svg>, title: "Dryers" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1">
  {/* Основные линии снежинки */}
  <line x1="12" y1="5" x2="12" y2="19"></line>
  <line x1="5" y1="12" x2="19" y2="12"></line>
  <line x1="7" y1="7" x2="17" y2="17"></line>
  <line x1="7" y1="17" x2="17" y2="7"></line>

  {/* Веточки снежинки */}
  <line x1="12" y1="5" x2="10" y2="7"></line>
  <line x1="12" y1="5" x2="14" y2="7"></line>
  <line x1="12" y1="19" x2="10" y2="17"></line>
  <line x1="12" y1="19" x2="14" y2="17"></line>

  <line x1="5" y1="12" x2="7" y2="10"></line>
  <line x1="5" y1="12" x2="7" y2="14"></line>
  <line x1="19" y1="12" x2="17" y2="10"></line>
  <line x1="19" y1="12" x2="17" y2="14"></line>
</svg>


, title: "Ice Machines" },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
  <rect x="6" y="9" width="12" height="6" fill="white"></rect>
  <circle cx="9" cy="16" r="1" fill="white"></circle>
  <circle cx="15" cy="16" r="1" fill="white"></circle>
</svg>
, title: "Ovens" },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
  <circle cx="8" cy="10" r="1" fill="white"></circle>
  <circle cx="16" cy="10" r="1" fill="white"></circle>
  <circle cx="8" cy="14" r="1" fill="white"></circle>
  <circle cx="16" cy="14" r="1" fill="white"></circle>
</svg>
, title: "Cooktops" },
  { icon: "💨", title: "Vent Hoods" },
  { icon: "🔥", title: "Stoves / Ranges" },
  { icon: "♨️", title: "Warmer Drawers" },
  { icon:  <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="5" y="6" width="14" height="12" rx="2"></rect>
      <circle cx="12" cy="12" r="3" fill="white"></circle>
    </svg>, title: "Garbage Disposals" },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
  <rect x="6" y="8" width="12" height="8" fill="white"></rect>
  <circle cx="17" cy="11" r="1" fill="white"></circle>
  <circle cx="17" cy="14" r="1" fill="white"></circle>
</svg>
, title: "Freezers" },
  { icon: "❄️", title: "Range" },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor">
  <rect x="4" y="5" width="16" height="14" rx="2"></rect>
  <rect x="7" y="8" width="10" height="8" fill="white"></rect>
  <circle cx="17" cy="12" r="1" fill="white"></circle>
  <circle cx="17" cy="15" r="1" fill="white"></circle>
</svg>

, title: "Wine Coolers" },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <h2>Our Services</h2>
          <p className="services-description">
            We repair all major household appliances fast and professionally.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
        <div className="service-wrapper">
  <div className="service-card">
    <div className="service-icon">{service.icon}</div>
  </div>
  <div className="service-title">{service.title}</div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
