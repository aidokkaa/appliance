import React from 'react'
import './canHelp.css'
const CanHelp = () => {
  return (
    <div className='canHelp'>
        <h1 className='canH' style={{marginTop:"50px"}}>How We Can Help You</h1>
        <div className="helpCont">
            <div className="child">
            <svg className='iconC' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M4.268 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-.268a2 2 0 0 1-3.464 0H7.732a2 2 0 0 1-3.464 0M4 6v12h16V6zm2 6h12v4H6zm0-4h5v2H6zm4 5v1h4v-1zm4-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"/></svg>
             <h3 className='itemh3'>Kitchen Repairs</h3>
             <p className='itemh3'>We service kitchen appliances.</p>
            </div>
            <div className="child">
            <svg className='iconC' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 50 50"><path fill="white" d="M6 11v33.74C6 46.21 7.237 48 8.76 48h33.218C43.497 48 45 46.21 45 44.74V11zm19.46 26.776c-5.86 0-10.611-4.594-10.611-10.263S19.6 17.25 25.46 17.25s10.611 4.594 10.611 10.263c0 5.67-4.751 10.263-10.611 10.263M41.978 1H8.76C7.237 1 6 2.033 6 3.505V9h39V3.505C45 2.033 43.497 1 41.978 1M19 7H8V3h11zm19.146-.28c-1.249 0-2.258-.979-2.258-2.188c0-1.207 1.009-2.186 2.258-2.186s2.261.979 2.261 2.186c-.001 1.208-1.012 2.188-2.261 2.188"/></svg>
                <h3 className='itemh3'>Laundry Room Repairs</h3>
                <p className='itemh3'>We'll fix your laundry appliances.</p>
                </div>
                <div className="child">
                <svg className='iconC' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m11 16H6V8h12zm-3.33-4.67c.02.7-.26 1.38-.76 1.88a2.7 2.7 0 0 1-3.82 0c-.5-.5-.78-1.18-.76-1.88c.07-.71.3-1.39.67-2c.37-.83.81-1.6 1.33-2.33l.67-1c1.79 2.59 2.67 4.36 2.67 5.33"/></svg>
                 <h3 className='itemh3'>Dishwasher Repair</h3>
                 <p className='itemh3'>We will repair your dishwasher.</p>
                </div>
                <div className="child">
                <svg className='iconC' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipSRefrigerator0"><g fill="none" stroke-linejoin="round" stroke-width="4"><rect width="28" height="36" x="9" y="4" fill="#fff" stroke="#fff" rx="2"/><path stroke="#000" stroke-linecap="round" d="M9 22h28"/><path stroke="#fff" stroke-linecap="round" d="M9 20v4m28-4v4"/><path stroke="#000" stroke-linecap="round" d="M15 29v4m0-22v4"/><path stroke="#fff" stroke-linecap="round" d="M33 40v4m-20-4v4"/></g></mask></defs><path fill="white" d="M0 0h48v48H0z" mask="url(#ipSRefrigerator0)"/></svg>
                <h3 className='itemh3'>Refrigerator Repair</h3>
                <p className='itemh3'>We perform refrigerator maintenance.</p>
                </div>
        </div>
    </div>
  )
}

export default CanHelp