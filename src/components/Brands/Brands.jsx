import '../Brands/brands.css'
import { useState } from 'react'
import admiral from '../../images/brands/admiral.png'
import thor from '../../images/brands/Thor.jpg'
import whirlpool from '../../images/brands/whirlpool.jpg'
import amana from '../../images/brands/amana.jpg'
import asko from '../../images/brands/asko.png'
import blomberg from '../../images/brands/blomberg.png'
import samsung from '../../images/brands/samsung.jpg'
import lg from '../../images/brands/kg.jpg'
import maytag from '../../images/brands/maytag.jpg'
import bosch from '../../images/brands/bosch.jpg'
import frigidaire from '../../images/brands/frigidaire.jpg'
import ge from '../../images/brands/ge.jpg'
import electrolux from '../../images/brands/electrolux.png'
import miele from '../../images/brands/miele.jpg'
import viking from '../../images/brands/viking.jpg'
import subzero from '../../images/brands/subzero.jpg'
import thermador from '../../images/brands/thermador.png'
import kitchenaid from '../../images/brands/kitchenaid.jpg'
import haier from '../../images/brands/haier.jpg'
import maxx from '../../images/brands/maxx.avif'
import bertazzoni from '../../images/brands/bertazzoni.jpg'

const Brands = () => {
  const brands = [
    { name: "Sub-Zero", src: subzero },
    { name: "Bertazzoni", src: bertazzoni },
    { name: "Samsung", src: samsung },
    { name: "Sub-Zero", src: subzero },
    { name: "Whirlpool", src: whirlpool },
    { name: "Sub-Zero", src: subzero },
    { name: "Amana", src: amana },
    { name: "Thor", src: thor },
    { name: "Asko", src: asko },
    { name: "Samsung", src: samsung },
    { name: "Sub-Zero", src: subzero },
    { name: "Blomberg", src: blomberg },
    { name: "Samsung", src: samsung },
    { name: "LG", src: lg },
    { name: "Sub-Zero", src: subzero },
    { name: "Maytag", src: maytag },
    { name: "Samsung", src: samsung },
    { name: "Bosch", src: bosch },
    { name: "Frigidaire", src: frigidaire },
    { name: "GE", src: ge },
    { name: "Sub-Zero", src: subzero },
    { name: "Electrolux", src: electrolux },
    { name: "Miele", src: miele },
    { name: "Samsung", src: samsung },
    { name: "Viking", src: viking },
    { name: "Sub-Zero", src: subzero },
    { name: "Thermador", src: thermador },
    { name: "Sub-Zero", src: subzero },
    { name: "KitchenAid", src: kitchenaid },
    { name: "Haier", src: haier },
    { name: "Maxx", src: maxx }
  ]

  const itemsPerSlide = 6
  const [index, setIndex] = useState(0)

  const maxIndex = Math.ceil(brands.length / itemsPerSlide) - 1

  const next = () => {
    setIndex(prev => (prev < maxIndex ? prev + 1 : 0))
  }

  const prev = () => {
    setIndex(prev => (prev > 0 ? prev - 1 : maxIndex))
  }

  const visibleBrands = brands.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  )

  return (
 <section className="brands-section paddingofblocks">
  {/* <h2 className='h2Topic'>Brands We Service</h2> */}
      <div className="brands-marquee">
        <div className="brands-track">
          {[...brands, ...brands].map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={brand.src} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands



// две ленты
{/* <section className="brands-section">
  <div className="brands-marquee marquee-left">
    <div className="brands-track">
      {[...brands, ...brands].map((b, i) => (
        <div className="brand-item" key={i}>
          <img src={b.src} alt={b.name} />
        </div>
      ))}
    </div>
  </div>

  <div className="brands-marquee marquee-right">
    <div className="brands-track">
      {[...brands, ...brands].map((b, i) => (
        <div className="brand-item" key={i}>
          <img src={b.src} alt={b.name} />
        </div>
      ))}
    </div>
  </div>
</section> */}
