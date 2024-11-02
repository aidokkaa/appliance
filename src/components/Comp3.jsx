import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { LuRefrigerator } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { GiWashingMachine } from "react-icons/gi";
import { BiSolidWasher } from "react-icons/bi";
import { BiSolidDryer } from "react-icons/bi";
import { MdMicrowave } from "react-icons/md";
import { PiOvenBold } from "react-icons/pi";
import { LuDices } from "react-icons/lu";
import { GiAutoRepair } from "react-icons/gi";
const techItems = [
  {
    itemName:"Refrigerator",
    itemSvg:<LuRefrigerator/>
  },
  {
    itemName:"DishWasher",
    itemSvg: <BiSolidWasher />
  },
  {
    itemName:"Washing",
    itemSvg:<GiWashingMachine />
  },
  {
    itemName:"Dryer",
    itemSvg:<BiSolidDryer/>
  },
  {
    itemName:"Microwave",
    itemSvg:<MdMicrowave/>
  },
  {
    itemName:"Oven",
    itemSvg:<PiOvenBold/>
  },
  {
    itemName:"Ice",
    itemSvg:<LuDices/>
  },
  {
    itemName:"Other",
    itemSvg:<GiAutoRepair/>
  }
];
const Comp3 = ({category,width,setWidth,selectBrand,selectTime,setSelTime,selectedDate,setDate}) => {
  const form = useRef();
 const [user,setUser]=React.useState({
  firstName:'',
  lastName:'',
  email:'',
  phoneNumber: '',
  address:"",
  apartment:'',
  city:'',
  state:'',
  zipCode:''
 })

 const itemCat = techItems[category].itemName;
 const handleChange = (e)=>{
  setUser(prev=>({...prev,[e.target.name]:e.target.value}))
 }
 const sendEmail = (e) => {
  e.preventDefault();
  
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
    e.target.reset()
};
  return (
    <div >
     <form className='formSend' ref={form} onSubmit={sendEmail}>
     <div className="infos">
     <div className="cInfo">
<h2>Contact Information</h2>
      <input required onChange={handleChange} placeholder='First name' name = 'firstName' type="text" />
      <input required onChange={handleChange} placeholder='Last name' name = 'lastName' type="text" />
      <input required onChange={handleChange} placeholder='Email' name = 'email' type="email" />
        <input onChange={handleChange} placeholder = 'phonenumber' name = "phoneNumber" type="number" />
</div>
        <div className="sInfo">
        <h2>Service address</h2>
        <input required type="text" name='itemCat' style={{display:"none"}} value={itemCat} />
        <input required placeholder='Select a brand' style={{display:"none"}} type="text" name='selectBrand' value={selectBrand} />
        <input required type="text" name='selectedDate' style={{display:"none"}} value={selectedDate}/>
        <input required type="text" style={{display:"none"}} value={selectTime} name='selectTime' placeholder='time' />
        <input required onChange={handleChange} placeholder='Address' name = "address" type="text" />
        <input required onChange={handleChange} name = "apartment" type="text" placeholder='Apartment' />
        <input required onChange={handleChange} placeholder='City' name = "city" type="text" />
        <input required onChange={handleChange} placeholder='State' name = "state" type="text" />
        <input required onChange={handleChange} placeholder='Zip Code' name = "zipCode" type="number" />
        </div>
     </div>
  
        <div className="btns">
           <button className='btnPrev' onClick={()=>setWidth(width-50)}>Prev</button>
           <button onClick={()=>alert('Thank you! We will contact with you within 15 minutes!')} className='btnSubmit' type='submit'>Submit</button>
           </div>
     </form>
    </div>
  )
}

export default Comp3

// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { LuRefrigerator } from "react-icons/lu";
// import { FaPhoneAlt } from "react-icons/fa";
// import { HiArrowSmRight } from "react-icons/hi";
// import { GiWashingMachine } from "react-icons/gi";
// import { BiSolidWasher, BiSolidDryer } from "react-icons/bi";
// import { MdMicrowave } from "react-icons/md";
// import { PiOvenBold } from "react-icons/pi";
// import { LuDices } from "react-icons/lu";
// import { GiAutoRepair } from "react-icons/gi";

// const techItems = [
//   { itemName: "Refrigerator", itemSvg: <LuRefrigerator /> },
//   { itemName: "DishWasher", itemSvg: <BiSolidWasher /> },
//   { itemName: "Washing", itemSvg: <GiWashingMachine /> },
//   { itemName: "Dryer", itemSvg: <BiSolidDryer /> },
//   { itemName: "Microwave", itemSvg: <MdMicrowave /> },
//   { itemName: "Oven", itemSvg: <PiOvenBold /> },
//   { itemName: "Ice", itemSvg: <LuDices /> },
//   { itemName: "Other", itemSvg: <GiAutoRepair /> },
// ];

// const Comp3 = ({ category, width, setWidth, selectBrand, selectTime, setSelTime, selectedDate, setDate }) => {
//   const form = useRef();
//   const [user, setUser] = useState({
//     firstName: '', lastName: '', email: '', phoneNumber: '', address: '', apartment: '', city: '', state: '', zipCode: ''
//   });
//   const [errors, setErrors] = useState({});

//   const itemCat = techItems[category].itemName;

//   const handleChange = (e) => {
//     setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(user).forEach((key) => {
//       if (!user[key] && key !== 'phoneNumber') {  // 'phoneNumber' является необязательным
//         newErrors[key] = "Это поле обязательно для заполнения";
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Вернуть true, если ошибок нет
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       emailjs
//         .sendForm('service_lr1yusg', 'template_9cq0fkf', form.current, { publicKey: 'JJsLQIXT5guokDKSf' })
//         .then(
//           () => {
//             alert('Спасибо! Мы свяжемся с вами в течение 15 минут!');
//             console.log('УСПЕХ!');
//           },
//           (error) => {
//             console.log('НЕ УДАЛОСЬ...', error.text);
//           }
//         );
//       e.target.reset();
//       setUser({ firstName: '', lastName: '', email: '', phoneNumber: '', address: '', apartment: '', city: '', state: '', zipCode: '' });
//     } else {
//       alert("Пожалуйста, заполните все обязательные поля.");
//     }
//   };

//   return (
//     <div>
//       <form className='formSend' ref={form} onSubmit={sendEmail}>
//         <div className="infos">
//           <div className="cInfo">
//             <h2>Контактная информация</h2>
//             <input required onChange={handleChange} placeholder='Имя' name='firstName' type="text" />
//             {errors.firstName && <span className="error">{errors.firstName}</span>}
//             <input required onChange={handleChange} placeholder='Фамилия' name='lastName' type="text" />
//             {errors.lastName && <span className="error">{errors.lastName}</span>}
//             <input required onChange={handleChange} placeholder='Email' name='email' type="email" />
//             {errors.email && <span className="error">{errors.email}</span>}
//             <input onChange={handleChange} placeholder='Телефон' name="phoneNumber" type="number" />
//           </div>
//           <div className="sInfo">
//             <h2>Адрес обслуживания</h2>
//             <input required type="text" name='itemCat' style={{ display: "none" }} value={itemCat} />
//             <input required placeholder='Выберите марку' style={{ display: "none" }} type="text" name='selectBrand' value={selectBrand} />
//             <input required type="text" name='selectedDate' style={{ display: "none" }} value={selectedDate} />
//             <input required type="text" style={{ display: "none" }} value={selectTime} name='selectTime' placeholder='время' />
//             <input required onChange={handleChange} placeholder='Адрес' name="address" type="text" />
//             {errors.address && <span className="error">{errors.address}</span>}
//             <input required onChange={handleChange} name="apartment" type="text" placeholder='Квартира' />
//             {errors.apartment && <span className="error">{errors.apartment}</span>}
//             <input required onChange={handleChange} placeholder='Город' name="city" type="text" />
//             {errors.city && <span className="error">{errors.city}</span>}
//             <input required onChange={handleChange} placeholder='Штат' name="state" type="text" />
//             {errors.state && <span className="error">{errors.state}</span>}
//             <input required onChange={handleChange} placeholder='Почтовый индекс' name="zipCode" type="number" />
//             {errors.zipCode && <span className="error">{errors.zipCode}</span>}
//           </div>
//         </div>
//         <div className="btns">
//           <button className='btnPrev' onClick={() => setWidth(width - 50)}>Назад</button>
//           <button className='btnSubmit' type='submit'>Отправить</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Comp3;
