import { Link } from "react-router-dom";
import "./bookservicehero.css";

const BookServiceHero = () => {
  return (
    <section className="bookContainer paddingofblocks">
      <h2 className="h2Topic">Request Appliance Repair Service Now</h2>

      <ul className="bookFeatures">
        <li>Same-day service available</li>
        <li>Certified & experienced technicians</li>
        <li>Upfront pricing — no hidden fees</li>
      </ul>

      <Link to='/requestPage'>
        <button className="btn">Book a Service Now</button>
      </Link>
    </section>
  );
};

export default BookServiceHero;
