import '../../components/contactSection/cntctSection.css'
import { Link } from 'react-router-dom';
const ContactSection = () => {
  return (
    <section className="contact-section">
      <video
        className="bg-video"
        src="/videos/oven.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="overlay"></div>
      <div className="container">
        <div className="left">
          <h2>Need your appliance repaired?</h2>
          <div className="decor-line"></div>
          <p>No hidden fees. Fast and reliable service.</p>
          <span className="cta-subtext">Same-day service. Certified technicians. Warranty included.</span>
        </div>
        <Link className='link' to='/requestPage'>
        <div className="right">
          <button className='btn yellow'>Book a service now</button>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
