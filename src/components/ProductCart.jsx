import React, { useEffect, useState } from 'react'

import { Favorite } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


function ProductCart() {
     const [products, setProducts] = useState([]);

     useEffect(() => {
          // Fetch data from the API
          fetch('https://api.escuelajs.co/api/v1/products')
               .then((res) => res.json())
               .then((data) => {
                    // Update the state with the fetched data
                    setProducts(data.splice(0, 49));
               })
               .catch((error) => {
                    console.error('Error fetching data:', error);
               });
     }, []);

     return (
          <div className='w-full grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
               {/* Product Card */}
               {products?.map((product) => (
                    <div key={product.id} className='w-full group bg-white p-3 h-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105 overflow-hidden border border-gray-200'>
                         <Link to={`/product/${product.id}`}>
                              <div className='w-full relative h-64 bg-[#eef7fb] overflow-hidden rounded-t-lg'>
                                   <img className='w-full h-full object-top object-cover' src={product.images} alt={product.title} />
                                   <div className='absolute top-2 right-2'>
                                        {/* Wishlist and Save Icons */}
                                        <span className='text-2xl text-gray-500 cursor-pointer hover:text-primary'>
                                             <i className='far fa-heart'></i> {/* Heart icon for Wishlist */}
                                        </span>
                                        <span className='ml-2 text-2xl text-gray-500 cursor-pointer hover:text-primary'>
                                             <i className='far fa-bookmark'></i> {/* Bookmark icon for Save */}
                                        </span>
                                   </div>
                              </div>
                         </Link>
                         <div className='flex mt-3 justify-between'>
                              <p className='w-44 text-sm font-semibold'>{product.title}</p>
                              <p><sup className='text-xs text-gray-500 line-through mr-2'>$200</sup>${product.price}</p>
                         </div>
                         {/* Star Rating and add to cart button */}
                         <div className='w-full flex items-center justify-between mt-2'>
                              <div className='flex text-yellow-400'>
                                   <i className='ri-star-fill'></i>
                                   <i className='ri-star-fill'></i>
                                   <i className='ri-star-fill'></i>
                                   <i className='ri-star-fill'></i>
                                   <i className='ri-star-fill'></i>
                              </div>
                              <button className='bg-primary cartAnimation text-white py-2 px-4 rounded-lg'>
                                   <span>Add to Cart</span> <i className='ri-shopping-cart-2-line ml-2'></i>
                              </button>
                         </div>
                         {/* hover effect cart */}
                         <div className='absolute top-5 right-[-2rem] duration-500 group-hover:right-5'>
                              <Tooltip title="Add to Wishlist">
                                   <span className='text-xl text-gray-500 cursor-pointer hover:text-primary'>
                                        {/* <FavoriteIcon /> */}
                                        <Favorite />
                                   </span>
                              </Tooltip>

                         </div>
                    </div>
               ))}

               {/* Add more product cards as needed */}
          </div>


     )
}

export default ProductCart