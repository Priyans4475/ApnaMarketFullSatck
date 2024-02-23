import React from 'react'

const Card = () => {
  return (
    <div class="w-64 h-70 bg-white shadow-lg rounded-lg flex-shrink-0 m-4">  
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg  ">
      <img class="w-full" src="img2.jpeg" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Redmi 8</div>
        <p class="text-gray-700 text-base">
          4.4/5 | 30 Reviews
        </p>
        <div className='m-2 text-green-500'>In Stock</div>
      <div className='m-2 font-bold'>Rs 10,999 / Price</div>     
      <div> 
        <button className='px-3 py-1 m-2 rounded-full bg-black text-white'>Add to cart</button>
      </div> 
      </div>
      
      
    </div>
  </div>
  )
}

export default Card