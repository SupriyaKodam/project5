import React from 'react'

const Test = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-3/4 mx-auto'>
        <h1 className='text-orange-600 text-3xl mt-20 font-bold mb-10'>OUR TRSTIMONIALS</h1>
        <div className='flex flex-col md:flex-row items-center justify-around gap-5 mt-5'>
            <div className='flex flex-col w-screen md:w-[500px] lg:w-[600px]'>
            <h1 className='text-4xl text-white font-bold'>HIGHEST RATED GYM</h1>
            <p className='text-white text-lg'>Rk Fitness Gym Is One Of The Largest Gym In Dwarka And Most Reviewed Gym Of Delhi</p>
            </div>
            <div>
                <img className="w-[600px]" src="./Images/U.JPEG"/>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Test
