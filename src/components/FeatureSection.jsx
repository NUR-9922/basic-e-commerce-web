import React from 'react'
import { RiTruckLine, RiTextWrap, RiFolderShield2Fill, Ri24HoursLine } from 'react-icons/ri'
function FeatureSection() {
     return (
          <div>
               
               <div className="min-h-32 p-4 bg-white mt-4 px-5 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Feature Card */}
                    <div className="w-full flex gap-3 items-center p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
                         <RiTruckLine className="text-primary text-5xl" />
                         <div className="">
                              <p className="font-semibold text-lg">FREE RETURNS</p>
                              <p className="opacity-75">Within 4 days</p>
                         </div>
                    </div>

                    {/* Feature Card */}
                    <div className="w-full flex gap-3 items-center p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
                         <RiTextWrap className="text-primary text-5xl" />
                         <div className="">
                              <p className="font-semibold text-lg">FREE RETURNS</p>
                              <p className="opacity-75">When you spend $100+</p>
                         </div>
                    </div>


                    {/* Feature Card */}
                    <div className="w-full flex gap-3 items-center p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
                         <RiFolderShield2Fill className="text-primary text-5xl" />
                         <div className="">
                              <p className="font-semibold text-lg">SECURED PAYMENTS</p>
                              <p className="opacity-75">We are officially registered</p>
                         </div>
                    </div>

                    {/* Feature Card */}
                    <div className="w-full flex gap-3 items-center p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
                         <Ri24HoursLine className="text-primary text-5xl" />
                         <div className="">
                              <p className="font-semibold text-lg">SUPPORT 24/7</p>
                              <p className="opacity-75">Ready to help our clients</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default FeatureSection