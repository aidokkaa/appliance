import React from 'react'
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
  ]
const Comp1 = ({width,setWidth,selectBrand,setSelectBrand,category,setCategory}) => {
  const itemCat = techItems[category].itemName;
  const [isCategClick,setIsCategClick]=React.useState(false);
  console.log(isCategClick)
  const [errText,setErrText]=React.useState('');
  const [erSelText,setErrSelText]=React.useState('');
  const btnNext =(e)=>{
    e.preventDefault()
    if(isCategClick && selectBrand){
      setWidth(width+50)
    }
    else{
      setWidth(width+0);
      setErrText('Please, select the type of service and brand*')
    }
  }
  console.log(itemCat);
  const onClickCat=(index)=>{
    setIsCategClick(true)
     setCategory(index)
  }
  return (
    <div>
       <h2 className='help'>How can we help you?</h2>
       <p className='selectP'>Select a service below *:</p>
       <p className='pReq'>* indicates a required field</p>
       <div className="techItems">
          {
            techItems.map((item,i)=>(
              <>
              <div onClick={()=>onClickCat(i)} className= {category===i ? 'item activeIndex' : 'item'}>
              <p className='svg'>{item.itemSvg}</p>
              <p className='itemName'>{item.itemName}</p>
              </div>
              </>
            ))
          }
       </div>
      
       <div className="servInfoForm">
         <p>What is brand of the appliance *?</p>
          <form action="">
          <select required onChange={(e)=>setSelectBrand(e.target.value)} name="" id="">
          <option value='Select a brand'>Select a brand</option>
           <option value="SubZero">SubZero</option>
            <option value="Jenn Air">Jenn Air</option>
            <option value="ElectroLux">ElectroLux</option>
            <option value="Dakor">Dakor</option>
            <option value="Viking Professional">Viking Professional</option>
            <option value="Wolf">Wolf</option>
            <option value="Miele">Miele</option>
            <option value="Frigidaire">Frigidaire</option>
            <option value="Whirlpool">Whirlpool</option>
            <option value="Haier">Haier</option>
            <option value="Rational">Rational</option>
            <option value="Maytag">Maytag</option>
            <option value="Samsung">Samsung</option>
            <option value="KitchenAid">KitchenAid</option>
           </select>
           <p className='errText'> {errText}</p>
           <div className="btns1">
           <button className='btnNext' onClick={btnNext}>Next</button>
           </div>
          </form>
       </div>
    </div>
  )
}

export default Comp1