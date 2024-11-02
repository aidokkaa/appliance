import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Comp3 = () => {
  const form = useRef();
  const [errText,setErrText]=React.useState('');
  const [user,setUser]=React.useState({
  firstName:'',
  phoneNumber: '',
  zipCode:''
 })

 const handleChange = (e)=>{
  setUser(prev=>({...prev,[e.target.name]:e.target.value}))
 }
 const sendEmail = (e) => {
  e.preventDefault();
  if(user.firstName && user.phoneNumber && user.zipCode){
    emailjs
    .sendForm('service_lr1yusg', 'template_9cq0fkf', form.current, {
      publicKey: 'JJsLQIXT5guokDKSf',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    e.target.reset();
    alert('Thank you! We will contact you within 15 minutes!')
  }else{
    setErrText('Try again')
  }
};
  return (
    <div >
     <form className='formSend' ref={form} onSubmit={sendEmail}>
     <div className="infos">
     {/* <div className="cInfo"> */}
<h2>Make appointment</h2>
{/* <p className='pReq'>* indicates a required field</p> */}
<div className="servInfoForm">
           <input required placeholder='Your name *' onChange={handleChange} name = 'firstName'  type="text" />
           <input  placeholder='Zip Code *' onChange={handleChange}  name = "zipCode" type="number" />
           <input required placeholder='Phone number *'onChange={handleChange}  name = "phoneNumber" type="number" />
            <input type="text" placeholder='Description of the problem' />
            <br />
          <span className='problems'>(not cooling, strange noises, water leaks etc.)</span>
       {/* </div>  */}
       </div>
     </div>
        <p className='errText'> {errText}</p>
           <button className='btnSubmit' type='submit'>Submit</button>
     </form>
    </div>
  )
}

export default Comp3
