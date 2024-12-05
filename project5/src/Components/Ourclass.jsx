import React from 'react'

const Ourclass = () => {
  return (
    <div>
    <div className='flex flex-col items-center justify-center mt-20 gap-3 mb-20'>
        <h1 className='text-2xl text-orange-600 font-semibold'>OUR CLASS</h1>
        <h1 className='text-4xl text-white font-bold'>CHOOSE THE PROGRAM</h1>
    </div>
    <div className='relative flex flex-col md:flex-row items-center justify-around'>
    <div className='relative w-full md:w-[1600px]'>   
           <img className='w-full h-auto object-cover' src="./Images/w.WEBP"/>
           <div className='absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4 gap-3'>
               <h2 className="text-5xl lg:text-3xl text-white font-bold mb-4">
               CARDIO TREADMILL
               </h2>
               <button className="text-white p-3 bg-orange-600 rounded-lg">JOIN NOW</button>
           </div>
           </div>
           <div className='relative w-full md:w-[600px] bg-black bg-opacity-50 p-4 gap-3'>   
           <img className='w-full h-auto object-cover' src="./Images/w2.JPEG"/>
           <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Black overlay */}
           </div>
           <div className='relative w-full md:w-[600px]'>   
           <img className='w-full h-auto object-cover' src="./Images/gg3.JPEG"/>
           <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Black overlay */}
           </div>
    </div>
    </div>
  )
}

export default Ourclass
