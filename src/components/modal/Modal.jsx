import './modal.css'
import logo from '../../images/icelogo.jpg'
import Comp3 from '../Comp3';
const components = [
  <Comp3/>
]
const Modal = ({open,setOpen}) => {
  return (
    <div>
        <div className="overlay" onClick={()=>setOpen(false)}>
           <div  className='modal' onClick={e=>e.stopPropagation()}>
            <div onClick ={()=>setOpen(false)} className="close">
              <h2>x</h2>
            </div>
            <div className="width">
            <div className="top">
              <div className="logoModal">
                <img className='logoModal' src={logo} alt="" />
              </div>
              <div className="call">
                <p className='callP'>In case of emergency, call us by phone:</p>
                <b><a style={{textDecoration:"none"}} href="tel:+17736783568"><p className='num'> +1 773 678 35 68</p></a></b>
              </div>
            </div>
          <Comp3  />       
            </div>
           </div>
        </div>       
    </div>
  )
}

export default Modal