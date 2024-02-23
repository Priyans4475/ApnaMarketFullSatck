import React from 'react'
import { Link } from 'react-router-dom'
// import '../assets/img1.jpg'
const Front = () => {
  return (
    <div className='flex p-3' >
        <div >
        <img class=" object-fill h-100 w-50%" src="img1.jpg" alt="Your Image"/>
        </div>
       <div className='bg-pinky-1 h-100 w-1/2'>
          <div className='flex flex-col  items-start mt-80 ml-20  '>
             <div className='text-lg font-serif text-gray-300 opacity-70' >
              BEST SELLER
              </div>
                <div className='text-6xl tracking-wider mt-20 text-white font-mono'>
                 Discover Your Perfect Score, Just a Click Away
               </div>
                       <div className='flex mt-20 text-gray-200'>
                          <div className='text-lg mr-5'>
                           GET 25% OFF    
                          </div>
                        <div className='text-lg ml-8'>
                          Free Shipping
                         </div>
                    </div>
             <Link className='mt-20 bg-white px-14 py-3 rounded-full  text-sm font-bold flex items-center ' to={'/homepagevthree'}>
             <div> Sell Collection </div>
             <div className='ml-3'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
             </div>
             

              
              </Link>
          </div>
        </div>        
    </div>
  )
}

export default Front