import React from "react";
import refrig from '../../images/refrig (2).svg'
import washmash from '../../images/washmash.svg'
import microw from '../../images/microwave.svg'
import dish from '../../images/dishwash.svg'
import freezer from '../../images/freezer.svg'
import ice from '../../images/ice (2).svg'
import dry from '../../images/dry.svg'
import disposal from '../../images/disposal.svg'
import drawer from '../../images/drawer.svg'
import range from '../../images/range.svg'
import cooktop from '../../images/cooktop.svg'
import oven from '../../images/oven.svg'
import vent from '../../images/vent.svg'
import "./Services.css";
import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";

const servicesData = [
  { icon: refrig, title: "Refrigerators" },
  { icon:washmash, title: "Washing Machines" },
  { icon: dish, title: "Dishwashers" },
  { icon: microw, title: "Microwaves" },
  { icon: dry, title: "Dryers" },
  { icon: ice, title: "Ice Machines" },
  { icon: oven, title: "Ovens" },
  { icon:cooktop, title: "Cooktops" },
  { icon: vent, title: "Vent Hoods" },
  { icon: range, title: "Stoves / Ranges" },
  { icon: drawer, title: "Warmer Drawers" },
  { icon: disposal, title: "Garbage Disposals" },
  { icon: freezer, title: "Freezers" }
];

const Services = forwardRef((props, ref) => {
  const navigate = useNavigate()
  const navToRequest=()=>{
    
    navigate('/requestPage')
  }
  return (
    <section ref={ref} className="services-section paddingofblocks">
      <div className="services-container width">
        <div className="services-header">
          <h2 className="h2Topic">Our Services Include:</h2>
          <p className="services-description">
            We repair all major household appliances fast and professionally.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
        <div key={index} className="service-wrapper">
  <div onClick={()=>
       navigate('/requestPage', {
          state: { serviceTitle: service.title }
        })
  } className="service-card">
    <img className="service-icon" src={service.icon} alt="" />
  </div>
  <div className="service-title">{service.title}</div>
</div>


          ))}
        </div>
      </div>
    </section>
  );
});

export default Services;



// ⭐ Вариант 4 (коротко, современно)

// Book Your Appliance Repair
// Speed. Skill. Straightforward pricing. Get your appliance back on track today.

// Book Now
// ✔ Same-Day Service Options
// ✔ Certified Repair Experts
// ✔ Transparent Pricing
// ✔ Warranty Included
