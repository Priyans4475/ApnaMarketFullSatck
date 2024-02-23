import React from 'react'
import Card from '../components/Card'
import Newbtn from '../components/Newbtn'

const Newarrival = () => {
  return (
    <div>
      <div className='text-4xl flex justify-center m-10 font-bold'>
        New Arrivals
      </div>
      <div className='flex justify-center'>
        <Newbtn title={"Best Sellers"}/>
        
        <Newbtn title={"New arrivals"}/>
        <Newbtn title={"Sales"}/>
      </div>
      <div class="flex  px-2 mx-3 overflow-x-auto ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}

export default Newarrival