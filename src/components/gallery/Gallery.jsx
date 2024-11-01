import React from 'react'
import './galery.css'
import gallery1 from '../../image/gallery1.jpg'
import gallery2 from '../../image/gallery2.jpg'
import gallery3 from '../../image/gallery3.jpg'
const Gallery = ({galRef}) => {
  return (
    <div ref={galRef}>
        <div  className="galleryCont">
          <h1>Gallery</h1>
            <div className="gallery">
                <div className="gItem">
                <img src="https://s3-media0.fl.yelpcdn.com/bphoto/bMlabKxjuXisMBPExezreg/1000s.jpg" alt="" />
                </div>
                <div className="gItem">
                <img src={gallery3} alt="" />
                </div>
                <div className="gItem">
                <img src="https://static.homeguide.com/assets/images/content/homeguide-repair-technician-fixing-a-refrigerator-and-freezer.jpg" alt="" />
                </div>
                <div className="gItem">
                <img src="https://www.appliancerepairschicago.org/__static/fdefbef5d30c54d21c6e908d688569e9/11753_11.jpg" alt="" />
                </div>
                <div className="gItem">
                <img src={gallery2} alt="" />
                </div>
                <div className="gItem">
                <img src="https://media-content.angi.com/cc3bc25d-d89b-4437-ab6d-cdbb69bf3394.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery