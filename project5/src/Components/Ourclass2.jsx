import React from 'react';

const Ourclass2 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-around">
        {/* First image with a black overlay */}
        <div className="relative">
          <img className="w-[500px] h-[500px]" src="./Images/I.JPEG" alt="Class 1" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Black overlay */}
        </div>

        {/* Second image with a black overlay */}
        <div className="relative">
          <img className="w-[600px] h-[500px]" src="./Images/I1.JPEG" alt="Class 2" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Black overlay */}
        </div>

        {/* Third image with a black overlay */}
        <div className="relative">
          <img className="w-[600px] h-[500px]" src="./Images/I2.JPEG" alt="Class 3" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
            <h1 className='text-3xl text-white font-bold'>INTERNATIONAL GRADED EQUIPMENTS</h1>
            <button className='text-white p-4 bg-orange-600 rounded-lg'>JOIN NOW</button>
            </div> {/* Black overlay */}
        </div>
      </div>
    </div>
  );
}

export default Ourclass2;
