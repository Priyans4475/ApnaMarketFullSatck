import Prodinput from 'components/Prodinput'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Addproduct = () => {
    const [name,setname]=useState('');
    const [description,setdescription]=useState('');

    const [richdescription,setrichdescription]=useState('');
    const [images,setprodimage]=useState([]);
    const [brand,setbrand]=useState('');
    const [price,setprice]=useState(0);
    const [category,setcategory]=useState('');
    const [countInStock,setcountInStock]=useState(0);
    const [rating,setrating]=useState(0);
    const [numReview,setnumReview]=useState(0);
    const [isfeatured,setisfeatured]=useState(0);
    const navigate = useNavigate();
    
  return (
    <div className='bg-red-400 px-44 '>
       
        <Prodinput onchange={e=>{setname(e.target.value)}} type={"text"} placeholder={'product name'}/>
        <Prodinput onchange={e=>{setdescription(e.target.value)}} type={"text"} placeholder={'description'}/>
        <Prodinput onchange={e=>{setrichdescription(e.target.value)}} type={"text"} placeholder={'richdescription'}/>
        <Prodinput onchange={e=>{setprodimage(e.target.value)}} type={"text"} placeholder={'images'}/>
        <Prodinput onchange={e=>{setbrand(e.target.value)}} type={"text"} placeholder={'brand'}/>
        <Prodinput onchange={e=>{setprice(e.target.value)}} type={"Number"} placeholder={'price'}/>
        <Prodinput onchange={e=>{setcategory(e.target.value)}} type={"text"} placeholder={'category'}/>
        <Prodinput onchange={e=>{setcountInStock(e.target.value)}}  type={"Number"} placeholder={'countInStock'}/>
        <Prodinput onchange={e=>{setrating(e.target.value)}} type={"Number"} placeholder={'rating '}/>
        <Prodinput onchange={e=>{setnumReview(e.target.value)}} type={"Number"} placeholder={'numReview'}/>
        <Prodinput onchange ={e=>{setisfeatured(e.target.value)}} type={"Boolean"} placeholder={'isfeatured'}/>


        <button  className='bg-green-900 mt-10' onClick={async () => {
  axios.post("http://localhost:3000/api/v1/products", {
    name,
    description,
    richdescription,
    category,
    brand,
    price,
    images,
    countInStock,
    rating,
    numReview,
    isfeatured
  });
  // console.log(response);
//   localStorage.setItem("token", response.data.token)
  navigate("/homepagevthree")
}} >Submit</button>

    </div>
  )
}

export default Addproduct