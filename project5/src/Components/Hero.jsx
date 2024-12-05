import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen">
        {/* Image */}
        <img
          src="./Images/g1.WEBP"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
          <h1 className="text-2xl lg:text-6xl text-white font-bold mb-4">
            BEST PREMIUM GYM IN DWARKA
          </h1>
          <h2 className="text-xl lg:text-4xl text-orange-600 mb-4 font-bold">
            BY ROHIT KHATRI
          </h2>
          <p className="text-white text-md lg:text-2xl mb-6">
            Start Your Fitness Journey With RK Fitness With Cafe, Steam Rooms, Premium Equipment, Free Coffee, Best Trainers, And Many More.
          </p>
          <button className="text-white p-4 bg-orange-600 rounded-lg">
            CALL NOW
          </button>
        </div>
      </div>
      <div className='relative flex flex-col lg:flex-row items-center justify-around bg-black'>
            <div className='relative w-full lg:w-[500px]'>   
           <img className='w-full h-auto object-cover' src="./Images/e1.JPEG"/>
           <div className='absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4 gap-3'>
               <img className='w-20 lg:w-14 mb-4' src="./Images/g2.PNG"/>
               <h2 className="text-5xl lg:text-3xl text-white font-bold mb-4">
              Best Training
               </h2>
               <p className="text-white text-xl">
                Get Trained With The Best Mentors In The Fitness Industry
                </p>
           </div>
           </div>
           <div className='relative w-full lg:w-[500px]'>   
           <img className='w-full h-auto object-cover' src="./Images/e2.JPEG"/>
           <div className='absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4 gap-3'>
               <img className='w-20 lg:w-14 mb-4' src="./Images/g3.PNG"/>
               <h2 className="text-5xl lg:text-3xl text-white font-bold mb-4">
               Quality Equipment
               </h2>
               <p className="text-white text-xl">
               International Graded Equipments For Your Professional Fitness Journey
                </p>
           </div>
           </div>
           <div className='relative w-full lg:w-[500px]'>   
           <img className='w-full h-auto object-cover' src="./Images/e3.JPEG"/>
           <div className='absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4 gap-3'>
               <img className='w-20 lg:w-14 mb-4' src="./Images/g4.PNG"/>
               <h2 className="text-5xl lg:text-3xl text-white font-bold mb-4">
               YOGA, ZUMBA And Many More
               </h2>
               <p className="text-white text-xl">
               Every Body Is Different That Why Everyone Custome Diet & Workout Plans
                </p>
           </div>
           </div>      
      </div>
    </div>
  );
};

export default Hero;

