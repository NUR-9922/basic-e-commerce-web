import React from 'react'
import { NavLink } from 'react-router-dom'

function CategorySection() {

  const categoryData = [
    {
      image: './public/assets/categoryImages/img-1.jpg',
      name: 'Mobile & Tablets',
      id: 'mobile_tablets'
    },
    {
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Electronics',
      id: 'electronics'
    },
    {
      image: './public/assets/categoryImages/img-2.jpg',
      name: 'Home & Kitchen',
      id: 'home&kitchen'
    },
    {
      image: './public/assets/categoryImages/img-3.avif',
      name: 'Men Fashion',
      id: 'menFashion'
    },
    {
      
      image: './public/assets/categoryImages/img-4.avif',
      name: 'Women Fashion',
      id: 'womenFashion'
    },
    {

      image: './public/assets/categoryImages/img-5.jpg',
      name: 'Beauty',
      id: 'beauty'
    },
    {

      image: 'https://cdn.vectorstock.com/i/1000x1000/51/29/grocery-products-icons-vector-39835129.webp',
      name: 'grocery',
      id: 'grocery'
    }

  ]

  return (
<div className='grid bg-white capitalize px-2 md:px-5 mt-2 grid-cols-3 md:grid-cols-4 lg:flex p-2 justify-between xl:grid-cols-6 gap-4'>
  {categoryData.map((item, index) => (
    <NavLink to={`/category/${item.id}`} key={index} className='hover:opacity-80 transition'>
      <div key={index} className='cursor-pointer p-2 flex flex-col items-center justify-evenly gap-2'>
        <div className='w-16 h-16 sm:w-20 sm:h-20  rounded-full'>
          <img className='w-full h-full object-cover rounded-full' src={item.image} alt="" />
        </div>
        <p className='text-center font-[400] text-[10px] sm:text-base '>{item.name}</p>
      </div>
    </NavLink>
  ))}
</div>



  )
}

export default CategorySection