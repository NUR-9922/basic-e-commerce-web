import React from 'react'

function SelectOneSection() {
     return (
          <div className='w-full relative mt-8  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
               <div className=' '>
                    <div className='w-full  bg-white rounded-lg overflow-hidden group'>
                         <div className='w-full relative  bg-gradient-to-b cursor-pointer rounded-lg transition duration-500'>
                              <img className=' hover:scale-105 transition-all duration-500 h-full object-cover rounded-lg object-top' src="https://lumia-theme.com/cdn/shop/files/category-02.png?v=1677655197&width=405" alt="" />
                              <p className=' absolute group-hover:right-10 right-[-5rem] top-5 transition-all  text-white font-semibold'>Men</p>
                         </div>
                         <div>
                              
                         </div>
                    </div>
               </div>
               <div className='col-span-1 md:col-span-2 lg:col-span-1'>
                    <div className='w-full  bg-white rounded-lg overflow-hidden group'>
                         <div className='w-full relative  bg-gradient-to-b cursor-pointer rounded-lg transition duration-500'>
                              <img className=' hover:scale-105 transition-all duration-500 h-full object-cover rounded-lg object-top' src="https://lumia-theme.com/cdn/shop/files/category-01_6e022e00-a7b9-4d9f-8b57-fabda36afc4e.png?v=1664377618&width=405" alt="" />
                              <p className=' absolute group-hover:right-10 right-[-5rem] top-5 transition-all  text-white font-semibold'>Women</p>
                         </div>
                         <div>
                              
                         </div>
                    </div>
               </div>
               <div className='col-span-1 md:col-span-2 lg:col-span-1'>
                    <div className='w-full  bg-white rounded-lg overflow-hidden group'>
                         <div className='w-full relative  bg-gradient-to-b cursor-pointer rounded-lg transition duration-500'>
                              <img className=' hover:scale-105 transition-all duration-500 h-full object-cover rounded-lg object-top' src="https://lumia-theme.com/cdn/shop/files/category-03.png?v=1664530414&width=405" alt="" />
                              <p className=' absolute group-hover:right-10 right-[-5rem] top-5 transition-all  text-white font-semibold'>Kids</p>
                         </div>
                         <div>
                              
                         </div>
                    </div>
               </div>
               <div className='col-span-1 md:col-span-2 lg:col-span-1'>
                    <div className='w-full  bg-white rounded-lg overflow-hidden group'>
                         <div className='w-full relative  bg-gradient-to-b cursor-pointer rounded-lg transition duration-500'>
                              <img className='hover:scale-105 transition-all duration-500  h-full object-cover rounded-lg object-top' src="https://lumia-theme.com/cdn/shop/files/category-04.png?v=1669380333&width=405" alt="" />
                              <p className=' absolute group-hover:right-10 right-[-5rem] top-5 transition-all  text-white font-semibold'>Shows</p>
                         </div>
                         <div>
                              
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default SelectOneSection