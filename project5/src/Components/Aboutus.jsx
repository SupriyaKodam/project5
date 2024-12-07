import React from 'react'
import ReactPlayer from 'react-player/youtube'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from 'react';

const Aboutus = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
},[]);
  return (
    <div>
    <div className='flex flex-col lg:flex-row items-center justify-around bg-black mt-20'>
    <div className='flex flex-col md:ml-3 items-start justify-start w-screen lg:w-1/2 gap-y-3'>
        <h1 className='text-orange-600 text-4xl font-bold'>About Us
        </h1>
        <h1 className='text-6xl text-white font-bold'>Welcome to RK FITNESS</h1>
        <h1 className='text-2xl font-serif text-orange-600'>Best Premium Fitness Gym In Dwarka</h1>
        <p className='text-white text-xl'>Owner of one of India’s largest fitness channels on YouTube, Rohit Khatri is a sports science nutritionist and content creator. He is also a fitness instructor and is famous for workout routines on the video-blogging platform. He also conducts online fitness coaching classes and is counted among the top fitness influencers in the country.</p>
        <p className='text-white mt-4'><CheckCircleIcon className='text-orange-600 mr-2'/>import CheckCircleIcon from '@mui/icons-material/CheckCircle';</p>
        <p className='text-white mb-4'><CheckCircleIcon className='text-orange-600 mr-2'/>Largest Gym In Dwarka With The Best Trainers And International Graded Equipments
        Watch</p>
        <button className='text-white p-4 bg-orange-600 rounded-lg'>Watch NOW</button>
    </div>
    <div className='flex flex-col items-start justify-start gap-8'>
      <ReactPlayer url="https://www.youtube.com/watch?v=C1C_jSkBh4Y&t=4s"controls={true} width='100%'
          />
      <div className=''>
      <img className='w-full max-w-full lg:w-[650px] lg:max-w-[650px]' src="./Images/d.JPEG"/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Aboutus
