import {React,useState} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const[sidebarOpen,setSidebarOpen]=useState(false);
    const toggleSidebar =() =>{
        setSidebarOpen(!sidebarOpen);
    };

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <div className='hidden lg:flex flex-row items-center justify-around w-full h-16 bg-black border-2 border-white'>
          <div className='flex flex-row gap-8'>
             <p className='text-white'><CallIcon className='text-orange-600'/>+919667971209</p>
             <p className='text-white'><EmailIcon className='text-orange-600'/>rkfitnessdwarka@gmail.com</p>
             <p className='text-white'><WatchLaterIcon className='text-orange-600'/>Mon-Sun:5.00 AM-11.00 PM</p>
          </div>
          <div className='flex flex-row gap-8'>
              <FacebookIcon className='text-white'/>
              <InstagramIcon className='text-white'/>
              <SubscriptionsOutlinedIcon className='text-white'/>
          </div>
      </div>
      <div className='hidden lg:flex flex-row items-center justify-around h-20 w-full bg-black'>
        <div className=''>
            <img className='' src="./Images/RK.PNG"/>
        </div>
        <div className='flex flex-row gap-5 font-semibold'>
            <button className='text-white'>HOME</button>
            <button className='text-white'>DWARKA</button>
            <button className='text-white'>PASCHIM VIHAR</button>
            <button className='text-white'>ABOUT US</button>
            <button className='text-white'>CONTACT</button>
            <button className='text-white p-3 bg-orange-600 rounded-lg'>CALL NOW</button>
        </div>
      </div>
      {/*nAVBAR FOR MEDIUM AND SMALL SCREENS */}
      <div className='lg:hidden flex items-center justify-between h-20 w-full bg-black px-4'>
        <div>
            <img className='' src="./Images/RK.PNG"/>
        </div>
        <div>
            <MenuIcon
            className='text-white text-4xl cursor-pointer'
            onClick={toggleSidebar}/>
        </div>
      </div>
      {/*sidebar*/}
      <div className={`fixed top-0 left-0 h-full w-64 bg-black z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        {/*sidebar header*/}
        <div className='flex justify-between items-center p-4'>
        <img className='' src="./Images/RK.PNG"/>
        <CloseIcon
        className='text-white text-3xl cursor-pointer'
        onClick={toggleSidebar}/>
        </div>
        {/*sidebar menu*/}
        <div className="flex flex-col gap-5 mt-10 ml-4 font-semibold">
          <button className="text-white">HOME</button>
          <button className="text-white">DWARKA</button>
          <button className="text-white">PASCHIM VIHAR</button>
          <button className="text-white">ABOUT US</button>
          <button className="text-white">CONTACT</button>
          <button className="text-white p-3 bg-orange-600 rounded-lg">CALL NOW</button>
        </div>
      </div>
         {/* Overlay to close sidebar */}
       {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
          ></div>
         )}
    </div>
  )
}

export default Navbar
