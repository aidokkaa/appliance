import React from 'react';
import './brands.css';
import bosh from '../../image/bosh.jpg';
import frigid from '../../image/frigidaire.jpg';
import kg from '../../image/kg.jpg';
import jennair from '../../image/jennair.jpg';
import maytag from '../../image/maytag.jpg';
import samsung from '../../image/samsung.jpg';
import wolf from '../../image/wolf.jpg';
import viking from '../../image/viking.jpg';
import kitchen from '../../image/kitchenaid.jpg';
import subzero from '../../image/subzero.jpg';
import miele from '../../image/miele.jpg';
import ge from '../../image/ge.jpg';
import rational from '../../image/rational.jpg';
import wirpool from '../../image/wirpool.jpg';
import haier from '../../image/haier.jpg';

const Brands = () => {
  const brandImages = [
    kg, haier, bosh, subzero, jennair, frigid, kitchen, maytag, samsung,
    miele, wolf, viking, ge, rational, wirpool, haier
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {brandImages.map((image, index) => (
          <img src={image} alt={`Brand ${index}`} className="marquee-item" key={`brand-${index}`} />
        ))}
      </div>
      <div className="marquee">
        {brandImages.map((image, index) => (
          <img src={image} alt={`Brand ${index}`} className="marquee-item" key={`brand-copy-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
