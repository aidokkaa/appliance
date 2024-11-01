import React, { useEffect, useRef } from 'react';
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
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const imagesCount = marquee.children.length; // Количество изображений
    const totalWidth = imagesCount * 80; // Задайте ширину в зависимости от gap между элементами
    let position = window.innerWidth;

    const animate = () => {
      position -= 1; // Скорость анимации
      if (position < -totalWidth) {
        position = window.innerWidth; // Сброс позиции
      }
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee" ref={marqueeRef}>
        <img src={kg} alt="Icon 3" className="marquee-item" />
        <img src={haier} alt="Icon 3" className="marquee-item" />
        <img src={wirpool} alt="Icon 3" className="marquee-item" />
        <img src={bosh} alt="Icon 1" className="marquee-item" />
        <img src={subzero} alt="Icon 1" className="marquee-item" />
        <img src={jennair} alt="Icon 3" className="marquee-item" />
        <img src={frigid} alt="Icon 2" className="marquee-item" />
        <img src={kitchen} alt="Icon 3" className="marquee-item" />
        <img src={maytag} alt="Icon 3" className="marquee-item" />
        <img src={samsung} alt="Icon 3" className="marquee-item" />
        <img src={miele} alt="Icon 3" className="marquee-item" />
        <img src={wolf} alt="Icon 3" className="marquee-item" />
        <img src={viking} alt="Icon 3" className="marquee-item" />
        <img src={ge} alt="Icon 3" className="marquee-item" />
        <img src={rational} alt="Icon 3" className="marquee-item" />
        <img src={haier} alt="Icon 3" className="marquee-item" />
      </div>
    </div>
  );
};

export default Brands;
