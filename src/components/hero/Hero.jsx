import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
  
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Reliable appliance repairs, fast and handled by certified pros</h1>
        <p className="hero-subtitle">
          Keeping your household appliances in perfect working condition.
        </p>
        <div className="hero-buttons">
          <a href="tel:+17734618902" className="btn yellow">
            Call Now
          </a>
          <Link to="/requestPage" className="btn yellow">
            Schedule Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
