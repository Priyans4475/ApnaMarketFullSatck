import Prodinput from 'components/Prodinput'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Placeorders = () => {
    const [orderItems,setorderitems]=useState('');
    const [shippingAddress1,setshippingAddress1]=useState('');
    const [shippingAddress2,setshippingAddress2]=useState('');
    const [city,setcity]=useState('');
    const [zip,setzip]=useState('');
    const [country,setcountry]=useState('');
    const [phone,setphone]=useState('');
    const [status,setstatus]=useState('');
    const [totalPrice,settotalPrice]=useState('');
    const [user,setuser]=useState('');
    const navigate=useNavigate();

  return (
    <div>
        <Prodinput type={"text"} placeholder={'orderItems'}/>
        <Prodinput type={"text"} placeholder={'shippingAddress1'}/>
        <Prodinput type={"text"} placeholder={'shippingAddress2'}/>
        <Prodinput type={"text"} placeholder={'city'}/>
        <Prodinput type={"text"} placeholder={'zip'}/>
        <Prodinput type={"text"} placeholder={'country'}/>
        <Prodinput type={"text"} placeholder={'phone'}/>
        <Prodinput type={"text"} placeholder={'status'}/>
        <Prodinput type={"Number"} placeholder={'totalPrice'}/>
        <Prodinput type={"text"} placeholder={'user'}/>
        
        <button onClick={async () => {
  axios.post("http://localhost:3000/api/v1/orders", {
    orderItems,
    shippingAddress1,
    shippingAddress2,
    city,
    zip,
    country,
    phone,
    status,
    totalPrice,
    user



   
  });
  // console.log(response);
//   localStorage.setItem("token", response.data.token)
  navigate("/homepagevthree")
}} className='bg-red-500 m-8'>ADD</button>
    </div>
  )
}

export default Placeorders