import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
     // category data 
 
     const categoryData = [
          {
               id: 'men',
               name: "men",
               subcategory: [
                    {
                         Image: "./public/assets/categoryMen-images/img-1.png",
                         name: "Casual Shirts",
                         id: "casualShirts",

                    },
                    {
                         Image: "./public/assets/categoryMen-images/img-2.png",
                         name: "Formal Wear",
                         id: "formalWear",
                    },
                    {
                         Image: "./public/assets/categoryMen-images/img-2.png",
                         name: "Suits",
                         id: "suits",
                    },
                    {
                         Image: "./public/assets/categoryMen-images/img-3.png",
                         name: "Jeans",
                         id: "jeans",
                    },
                    {
                         Image: "./public/assets/categoryMen-images/img-4.png",
                         name: "T-Shirts",
                         id: "tshirts",
                    },
                    {
                         Image: "./public/assets/categoryMen-images/img-5.png",
                         name: "Trousers",
                         id: "trousers",
                    },
                    {
                         Image: "./public/assets/categoryMen-images/img-6.png",
                         name: "Jackets",
                         id: "jackets",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Sweatshirts",
                         id: "sweatshirts",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Sweaters",
                         id: "sweaters",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Blazers",
                         id: "blazers",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Coats",
                         id: "coats",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Dresses",
                         id: "dresses",
                    }
               ]
          },
          {
               id: 'women',
               name: "women",
               subcategory: [
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Dresses",
                         id: "dresses",
                    },
                    // use unflash images for image
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Tops",
                         id: "tops",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Trousers",
                         id: "trousers",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Skirts",
                         id: "skirts",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Jackets",
                         id: "jackets",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Sweaters",
                         id: "sweaters",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Swimwear",
                         id: "girl-swimwear",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Blazers",
                         id: "girl-blazers",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Jeans",
                         id: "girl-jeans",
                    }
               ]
          },
          {
               id: 'kids',
               name: "kids",
               subcategory: [
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Boys",
                         id: "boys",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Girls",
                         id: "girls",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Infants",
                         id: "infants",
                    },
               ]
          },
          {
               id: 'home',
               name: "home",
               subcategory: [
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Bedding",
                         id: "bedding",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Furniture",
                         id: "furniture",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Decor",
                         id: "decor",
                    },
               ]
          },
          {
               id: 'beauty',
               name: "beauty",
               subcategory: [
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Makeup",
                         id: "makeup",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Skincare",
                         id: "skincare",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Hair Care",
                         id: "haircare",
                    },
               ]
          },
          {
               id: 'beauty',
               name: "beauty",
               subcategory: [
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Makeup",
                         id: "makeup",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Skincare",
                         id: "skincare",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Hair Care",
                         id: "haircare",
                    },
               ]
          },
          {
               id: 'beauty',
               name: "beauty",
               subcategory: [
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Makeup",
                         id: "makeup",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Skincare",
                         id: "skincare",
                    },
                    {
                         Image: "https://via.placeholder.com/150",
                         name: "Hair Care",
                         id: "haircare",
                    },
               ]
          }

     ]
     return (
          <div className="container mx-auto mt-8 px-5">
               <h1 className="text-3xl font-bold mb-4 text-primary">All Categories</h1>
               {categoryData?.map((category) => (
                    <div key={category.id} className="mb-8">
                         <h2 id={category.id} className="text-2xl font-bold mb-4 text-secondary">
                              {category.name}
                         </h2>
                         <div id={category?.id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {category.subcategory?.map((subcategory) => (
                                   <div key={subcategory.id} className="border p-1 rounded-md flex cursor-pointer">
                                        <div className='w-32 h-32 mr-5'>
                                             <img className='w-full object-center object-fill h-full' src={subcategory.Image} alt="" />
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                             <p className='text-2xl  font-semibold'>{subcategory.name}</p>
                                             {/* button */}
                                             <Link className='bg-secondary text-white w-24 h-10 flex pl-2 items-center rounded' to={`/category/${subcategory.id}`}>
                                                  Explore
                                             </Link>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default CategoryPage;
