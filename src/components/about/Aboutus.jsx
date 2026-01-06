import './aboutus.css';
import { forwardRef } from "react";
import photoAppliance from '../../images/erikoven.jpeg'
import photoErik from '../../images/refri.jpeg';

const AboutUs = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about-section paddingofblocks ">
      <h2 className='h2Topic'>About Us</h2>
      <div className="about-inner width">
        <div className="about-flex">
          {/* Фотографии */}
          <div className="about-gallery">
            <div className="photo-wrapper">
              <img className="top-photo" src={photoErik} alt="Technician working" />
              <img className="bottom-photo" src={photoAppliance} alt="Appliance repair" />
            </div>
          </div>

          {/* Текст */}
          <div className="about-text">
            <p className="full-text">
              We are a professional home appliance repair service specializing in refrigerators, freezers, ovens, and other major household appliances.
              Our technicians provide accurate diagnostics, reliable repairs, and honest service using quality parts and professional tools.
              Every appliance is carefully tested after repair to ensure safe and long-lasting performance.
            </p>
            <p className="short-text">
             Our small team of skilled technicians loves keeping your home running smoothly.

From fixing a fridge to repairing an oven, we treat every appliance as if it were our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
})

export default AboutUs;
