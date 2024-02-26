import Prodinput from 'components/Prodinput'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Addcategory = () => {
    const [name,setname]=useState('');
    const [icon,seticon]=useState('');
    const [color,setcolor]=useState('')
    const navigate=useNavigate();
  return (
    <div>
        <Prodinput onchange={e=>{setname(e.target.value)}}type={'text'} placeholder={'categoryname'} />
        <Prodinput onchange={e=>{seticon(e.target.value)}} type={'text'} placeholder={'icon'} />
        <Prodinput  onchange={e=>{setcolor(e.target.value)}} type={'text'} placeholder={'color'} />

        <button onClick={async () => {
  axios.post("http://localhost:3000/api/v1/categories", {
    name,
    icon,
    color
   
  });
  // console.log(response);
//   localStorage.setItem("token", response.data.token)
  navigate("/homepagevthree")
}} className='bg-red-500 m-8'>ADD</button>

    </div>
  )
}

export default Addcategory