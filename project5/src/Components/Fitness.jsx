import React, { useState } from "react";

const Fitness = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
    <div className="flex flex-col md:flex-row items-center justify-around mt-10">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-orange-600 text-4xl font-bold mb-5">FITNESS PARTNER</h1>
        <h1 className="text-white text-6xl font-bold mb-5">MEET OUR TEAM</h1>
        <button className="text-white p-3 bg-orange-600 rounded-lg">JOIN NOW</button>
      </div>

      {/* Image 1 */}
      <div
        className="relative image-container"
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`absolute bottom-0 left-0 w-full transition-all duration-500 bg-black ${
            hoveredIndex === 0 ? "h-full opacity-50" : "h-0 opacity-0"
          }`}
        ></div>
        <img
          src="./Images/f1.JPEG"
          alt="Fitness Image 1"
          className="image w-[500px] transition-all duration-500"
        />
        <div
          className={`absolute bottom-10 left-5 text-white text-3xl font-bold transition-all duration-500 ${
            hoveredIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          Shreya
        </div>
      </div>

      {/* Image 2 */}
      <div
        className="relative image-container"
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`absolute bottom-0 left-0 w-full transition-all duration-500 bg-black ${
            hoveredIndex === 1 ? "h-full opacity-50" : "h-0 opacity-0"
          }`}
        ></div>
        <img
          src="./Images/f2.JPEG"
          alt="Fitness Image 2"
          className="image w-[500px] transition-all duration-500"
        />
        <div
          className={`absolute bottom-10 left-5 text-white text-3xl font-bold transition-all duration-500 ${
            hoveredIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          Rohith
        </div>
      </div>
    </div>
       <div className="relative flex flex-col items-center justify-center mt-20">
          <img src="./Images/f.JPEG" className="h-[700px] w-full opacity-50"/>
          <div className="absolute flex flex-col items-center justify-center text-center gap-3">
               <h1 className="text-orange-600 text-3xl md:text-4xl font-bold">CALL US TODAY</h1>
               <h1 className="text-white text-2xl md:text-6xl font-bold">+91-8595222191</h1>
               <p className="text-white text-md md:text-xl">Join The Best Experience In Your Fitness Journey At Rk Fitness</p>
               <button className='text-white p-3 bg-orange-600 rounded-lg'>JOIN NOW</button>
          </div>
       </div>
    </div>
  );
};

export default Fitness;
