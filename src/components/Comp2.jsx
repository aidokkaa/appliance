import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Comp2 = ({selectedDate,setDate,width,setWidth,selectTime,setSelTime}) => {
  const [errTextDate,setErrTextDate]=React.useState('');
  const next=()=>{
    if(!selectTime && selectedDate===null){
      setErrTextDate('Please, select the date and time that suits you! ')}
      else{
        setWidth(width+50)
      }
  }
  return (
    <div>
     <div className="title">
     <h2 >Schedule Date and Time</h2>
      <p className='titleP'>To request service, please select your preferred appointment date and time below. 
        For emergency 
        service please immediately call us for assistance.</p>
     </div>
<form action="">
<div className="select">
      <DatePicker required
      className='picker' 
      selected={selectedDate} 
      value={selectedDate}
      placeholderText='Select a date'
      onChange={date=>setDate(date)}
      minDate={new Date()}
      customInput={
        <input type="text" className="picker" placeholder="Select a date" />
    }/>
      <br />
      <select required onChange={(e)=>setSelTime(e.target.value)} name="" id="">
        <option value="select">Select a time</option>
        <option value="8-11am">8am - 11am</option>
        <option value="9am - 12am">9am - 12am</option>
        <option value="10am - 1pm">10am - 1pm</option>
        <option value="11am - 2pm">11am - 2pm</option>
        <option value="12am - 3pm">12am - 3pm</option>
        <option value="1pm - 4pm">1pm - 4pm</option>
        <option value="2pm - 5pm">2pm - 5pm</option>
        <option value="3pm - 6pm">3pm - 6pm</option>
      </select>
      </div>
     <p className='errText'> {errTextDate}</p>
      <br />
      <div className="btns">
           <button className='btnPrev' onClick={()=>setWidth(width-50)}>Prev</button>
           <button className='btnNext' onClick={next}>Next</button>
           </div>
</form>
      
    </div>
  )
}

export default Comp2