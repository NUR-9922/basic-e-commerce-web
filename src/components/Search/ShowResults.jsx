import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'; // Make sure to import the Link component from your router library

function ShowResults() {
     return (
          <div className={` searchbox-results absolute top-12 overflow-hidden  left-0 w-full shadow-md rounded-md  h-72 bg-[#ffff] capitalize`}>
               {/* searchbox results will be shown here */}
               <div className=' w-full  h-full hover:overflow-auto transition-all'>
                    <ul className='flex flex-col transition-all justify-between h-full'>
                         <NavLink to={''}>
                              <li className='flex transition-all items-center  justify-between px-2 h-10 hover:text-white hover:bg-primary cursor-pointer'> <p className='font-[500]'>Adidas shows</p> <i className='ri-arrow-right-s-line '></i> </li>
                         </NavLink>
                         <NavLink to={''}>
                              <li className='flex transition-all items-center  justify-between px-2 h-10 hover:text-white hover:bg-primary cursor-pointer'> <p className='font-[500]'>Adidas shows for men</p> <i className='ri-arrow-right-s-line '></i> </li>
                         </NavLink>
                         <NavLink to={''}>
                              <li className='flex transition-all items-center  justify-between px-2 h-10 hover:text-white hover:bg-primary cursor-pointer'> <p className='font-[500]'>Adidas shows under 5000</p> <i className='ri-arrow-right-s-line '></i> </li>
                         </NavLink>
                         <NavLink to={''}>
                              <li className='flex transition-all items-center  justify-between px-2 h-10 hover:text-white hover:bg-primary cursor-pointer'> <p className='font-[500]'>Adidas shows under 10000</p> <i className='ri-arrow-right-s-line '></i> </li>
                         </NavLink>
                         <NavLink to={''}>
                              <li className='flex transition-all items-center  justify-between px-2 h-10 hover:text-white hover:bg-primary cursor-pointer'> <p className='font-[500]'>Adidas football shows</p> <i className='ri-arrow-right-s-line '></i> </li>
                         </NavLink>
                         <NavLink to={''}>
                              <li className='flex transition-all items-center  justify-between px-2 h-10 hover:text-white hover:bg-primary cursor-pointer'> <p className='font-[500]'>Adidas shows for women</p> <i className='ri-arrow-right-s-line '></i> </li>
                         </NavLink>
                         <NavLink to={''}>
                              <li className='flex transition-all items-center  justify-between px-2 h-10 hover:text-white hover:bg-primary cursor-pointer'> <p className='font-[500]'>Adidas running shows for women</p> <i className='ri-arrow-right-s-line '></i> </li>
                         </NavLink>
                    </ul>
               </div>
          </div>
     )
}

export default ShowResults