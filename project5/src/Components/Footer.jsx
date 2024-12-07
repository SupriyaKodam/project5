import React from 'react'
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col  md:flex-row items-start justify-start lg:px-40 mt-20 gap-10 mb-10'>
        
           {/* First column with gym info */}
           <div className='flex flex-col items-start justify-start w-screen md:w-[500px] text-white gap-5'>
              <img src="./Images/RK.PNG" alt="Gym Logo"/> 
              <p className='text-xl'>
                Largest Gym In Dwarka With Premium Graded Equipments With Steam, Cafe, Zumba, Dance, Yoga, Strength, Cardio And Many More
              </p>
              {/* Location with gap */}
              <div className='flex items-center gap-2'>
                <RoomIcon className='text-orange-600 text-lg'/>
                <p className='text-lg'>
                  Dwarka Sector-12a, Plot No. 5, Opposite CNG Pump.
                </p>
              </div>
              {/* Phone number with gap */}
              <div className='flex items-center gap-2'>
                <CallIcon className='text-orange-600 text-2xl'/>
                <p className='text-lg'>
                  +91-8595222191
                </p>
              </div>
              {/* Another location */}
              <div className='flex items-center gap-2'>
                <RoomIcon className='text-orange-600 text-xl'/>
                <p className='text-lg'>
                  Plot No 1, UGF, Block A, A-1, Outer Ring Rd, Shubham Enclave, Sunder Vihar, Paschim Vihar, Delhi, 110063
                </p>
              </div>
              {/* Another phone number */}
              <div className='flex items-center gap-2'>
                <CallIcon className='text-orange-600'/>
                <p className='text-xl'>
                  +919667971209
                </p>
              </div>
           </div>
           
           {/* Second column with Quick Links */}
           <div className='flex flex-col items-start justify-start text-white w-screen md:w-[400px] gap-5'>
            <h1 className='text-2xl font-bold'>QUICK LINKS</h1>
            <p><KeyboardArrowRightIcon className='text-orange-600 text-xl'/>About Us</p>
            <p><KeyboardArrowRightIcon className='text-orange-600 text-xl'/>Contact</p>
           </div>
           
           {/* Third column with Useful Links */}
           <div className='flex flex-col items-start justify-start text-white w-screen md:w-[400px] gap-3'>
            <h1 className='text-2xl font-bold'>USEFUL LINKS</h1>
            <p><KeyboardArrowRightIcon className='text-orange-600 text-xl'/>Location Dwarka Sec 12</p>
            <p><KeyboardArrowRightIcon className='text-orange-600 text-xl'/>Paschim Vihar,Delhi,11063</p>
            <p><KeyboardArrowRightIcon className='text-orange-600 text-xl'/>Rohti Khatri</p>
            <p><KeyboardArrowRightIcon className='text-orange-600 text-xl'/>Sonia Singh Khatri</p>
           </div>
           
           {/* Fourth column with Owner info */}
           <div className='flex flex-col items-start justify-start text-white w-screen md:w-[600px]'>
              <h1 className='text-2xl font-bold mb-3'>ROHITH KHATRI</h1>
              <p>
                Owner of one of India’s largest fitness channels on YouTube, Rohit Khatri is a sports science nutritionist and content creator.
                He is also a fitness instructor and is famous for workout routines on the video-blogging platform. He also conducts online fitness 
                coaching classes and is counted among the top fitness influencers in the country.
                Designed And Developed By OnlineSyndrome: Marketing & Technology Firm.
              </p>
           </div>
        </div>
    </div>
  )
}

export default Footer
