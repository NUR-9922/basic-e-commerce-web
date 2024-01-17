import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function CategorySection() {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
        setLoading(false); // Set loading to false when data is received
        console.log(categoryData);
      });
  }, []);

  return (
    <div>
      {loading ? (
        // Show loader while data is being fetched
        <div className="flex justify-center items-center h-screen">
           <CircularProgress />
        </div>
      ) : (
        // Show data once it is received
        <div className='grid bg-white capitalize px-2 md:px-5 mt-2 grid-cols-3 md:grid-cols-4 lg:flex p-2 justify-between xl:grid-cols-7 gap-4'>
          {categoryData.map((item, index) => (
            <NavLink to={`/category/${item?.id}`} key={index} className='hover:opacity-80 transition'>
              <div key={index} className='cursor-pointer p-2 flex flex-col items-center justify-evenly gap-2'>
                <div className='w-16 h-16 sm:w-20 sm:h-20  rounded-full'>
                  <img className='w-full h-full object-cover rounded-full' src={item?.image} alt="" />
                </div>
                <p className='text-center font-[400] text-[10px] sm:text-base '>{item?.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySection;
