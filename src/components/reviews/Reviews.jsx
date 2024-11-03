import React from 'react'
import './reviews.css'
import './flickity.css'
import Flickity from 'react-flickity-component';
import star from '../../image/star.png'
const Reviews = ({rewRef}) => {
  const flickityOptions = {
    initialIndex: 2
}
  return (
    <div className='reviewsDiv' ref={rewRef}>
      <h1 style={{marginTop:"10px"}}>Read What Our Customers Have to Say</h1>
      <div className='stars'>
        <img className='star' src={star} alt="" />
        <img className='star' src={star} alt="" />
        <img className='star' src={star} alt="" />
        <img className='star' src={star} alt="" />
        <img className='star' src={star} alt="" />
      </div>
<Flickity 
      className={'carousel'}
      elementType={'div'} 
      options={flickityOptions} 
      disableImagesLoaded={false} 
      reloadOnUpdate 
      static 
    >
      <div style={{boxShadow:"5px 5px 5px 5px gray",borderRadius:"10px", padding:"10px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"250px",minHeight:"280px",margin:"70px"}} >
      <img style={{width:"50px", borderRadius:"50%",margin:"20px",height:'50px'}} src="https://amobit.com/wp-content/uploads/2018/12/adminin-100x100.jpg" alt="" />
                <p style={{fontSize:"14px"}}>"I contacted him because the Electrolux electric oven was not heating up. The operator accepted the order and the next day, at the agreed time, the polite and competent master arrived. The control unit was dismantled, repairs were promptly carried out at the
                   service center, and again promptly installed back at the agreed time. The oven is working!"</p>
                   <br />
                   <p style={{fontSize:"14px"}}>Bridget P.</p>
                </div>
                <div style={{boxShadow:"5px 5px 5px 5px gray",borderRadius:"10px", padding:"10px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"250px",minHeight:"280px",margin:"70px"}} >
      <img style={{width:"50px", borderRadius:"50%",margin:"20px",height:'50px'}} src="https://thinklike.ru/wp-content/uploads/2018/12/katerina_kantovskaya_new.jpg" alt="" />
                <p style={{fontSize:"14px"}}>We had a Bosch washing machine repaired. They arrived very promptly at a time convenient for us. He completed the work and helped his wife install the car in place) gave all the necessary recommendations for the care and safety of household appliances! I recommend the master!</p>
                   <br />
                   <p style={{fontSize:"14px"}}>Ariana S.</p>
                </div>
                <div style={{boxShadow:"5px 5px 5px 5px gray",borderRadius:"10px", padding:"10px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"70px",minHeight:"280px",width:"250px"
                }} className="rClass">
                  <img style={{width:"50px", borderRadius:"50%",margin:"20px",height:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtjbXv6_MU_LPrdAGJslYX_meOqI9PBdbfw&s" alt="" />
                  <p style={{fontSize:"14px"}}>"The built-in microwave oven is broken. We decided to call at home; we waited 5 days. And I found the guys and brought them an hour before closing. Word by word - 
                    30 minutes and they re-soldered and, at the same time, solved a long-term jamb - the twisters became loose.Not for speed but for quality and professionalism👏💪"</p>
                    <br />
                    <p style={{fontSize:"14px"}}>Savannah M.</p>
                </div>
                <div style={{boxShadow:"5px 5px 5px 5px gray",borderRadius:"10px", padding:"10px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"70px",width:"250px",height:"280px"}} className="rClass">
                <img style={{width:"50px", borderRadius:"50%",margin:"20px",height:'50px'}} src="https://opalubka-prokat.ru/wp-content/uploads/2019/07/d7a332411e14769f300879cf8b1d4da6_L.jpg" alt="" />
                <p style={{fontSize:"14px"}}>" The washing machine has broken down. Based on reviews on the Internet, 
                I called this service. The next day, at the appointed time, Master arrived. 
                Very polite and knowledgeable about his business."</p>
                <br />
                <p style={{fontSize:"14px"}}>Kevin P.
               </p>
                </div>
                <div style={{boxShadow:"5px 5px 5px 5px gray",borderRadius:"10px", padding:"10px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"70px",width:"250px",height:"280px"}} className="rClass">
                <img style={{width:"50px", borderRadius:"50%",margin:"20px",height:'50px'}} src="https://img.freepik.com/free-photo/medium-shot-senior-couple-walking-together-park_23-2149454996.jpg" alt="" />
                  <p style={{fontSize:"14px"}}>
                  "I contacted about the washing machine, the master arrived at the appointed time, determined the cause of the breakdown, everything suited me, 
                  he took me and two days later he picked up an almost new one. I recommend this service, well done guys!!!"</p>
                  <br />
                  <p style={{fontSize:"14px"}}>Sarah J.</p>
                </div>
    </Flickity>
    </div>
  )
}

export default Reviews