import React, { useEffect } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Fitness from './Fitness';

const Dwarka = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  return (
    <div>
    <div className='relative flex items-center justify-center h-screen mt-40'>
      {/* Background Image */}
      <img src="./Images/w.WEBP" className='absolute inset-0 w-full h-full object-cover opacity-50' />
      
      {/* Content */}
      <div className='absolute flex flex-col gap-10 md:flex-row w-full justify-around'>
        {/* Left Content */}
        <div className='text-white w-full md:w-[500px]'>
          <h1 className='text-xl md:text-5xl font-bold'>DWARAKA'S MOST PREMIUM GYM</h1>
          <p className='mt-4 text-lg'>
            Join the most exclusive gym in Dwarka, equipped with the latest fitness technology and world-class trainers.
          </p>
          <button className="text-white p-3 bg-orange-600 rounded-lg">JOIN NOW</button>
        </div>
        
        {/* Right Content */}
        <div className='text-white flex flex-row '>
          <p className='text-xl font-bold'>HOME</p>
          <KeyboardArrowRightIcon className='text-orange-600'/>
          <p className='text-xl font-bold'>DWARKA RK FITNESS</p>
        </div>
      </div>
    </div>
    <Fitness/>
    </div>
  )
}

export default Dwarka
