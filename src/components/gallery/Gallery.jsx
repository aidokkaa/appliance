import React from 'react'
import './galery.css'
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
                <img src="https://static.wixstatic.com/media/76cfd0_f11d7674f9784889b02546a43fd5de7e~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_640,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/76cfd0_f11d7674f9784889b02546a43fd5de7e~mv2_d_5472_3648_s_4_2.jpg" alt="" />
                </div>
                <div className="gItem">
                <img src="https://static.homeguide.com/assets/images/content/homeguide-repair-technician-fixing-a-refrigerator-and-freezer.jpg" alt="" />
                </div>
                <div className="gItem">
                <img src="https://www.appliancerepairschicago.org/__static/fdefbef5d30c54d21c6e908d688569e9/11753_11.jpg" alt="" />
                </div>
                <div className="gItem">
                <img src="https://wilshirerefrigeration.com/wp-content/uploads/2020/05/Service-technician-refrigerator-appliance-repair.jpg" alt="" />
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