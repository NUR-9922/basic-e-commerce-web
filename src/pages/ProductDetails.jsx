import React, { useEffect, useState } from 'react';
import BreadcrumbsComponents from "../components/BreadcrumbsComponents";
import { CircularProgress, Tooltip } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedBtn, setSelectedBtn] = useState("s");
  const handleClick = (btn) => {
    setSelectedBtn(btn);
  };
  const sizes = ['s', 'm', 'l', 'xl', 'xxl'];


  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch data from the API
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Update the state with the fetched data
        setProduct(data);
        setLoading(false);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
  }, []);





  // handle click of pictures
  const [currentImg, setCurrentImg] = useState(undefined)
  const handleProductImage = (src) => {
    setCurrentImg(src);
  };
  return (
    <div className="px-4 sm:px-8 lg:px-16 pt-4">
      {/* Breadcrumbs */}
      <BreadcrumbsComponents />

      {loading ? (
        <div className='flex justify-center items-center mt-[-5rem] w-full h-screen'>
          <CircularProgress />
        </div>
      ) : (
        <div className="flex-col md:flex-row flex w-full mt-5">
          {/* Image Section (Left Part) */}
          <div className="flex flex-col-reverse justify-end lg:justify-start lg:flex-row gap-2 w-full lg:w-1/2">
            <div className="flex flex-row lg:flex-col w-[120px] gap-2  ">
              {product?.images?.map((image, i) => (
                <img
                  key={i}
                  onClick={() => handleProductImage(image)}
                  className="rounded-lg bg-slate-300 w-[100px] h-[100px] md:w-[120px] md:h-[120px]  cursor-pointer hover:opacity-80 transition"
                  src={image}
                  alt={product?.title}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-col gap-2  w-[400px] h-[400px] bg-white">
              <img
                className="rounded-lg   w-[400px] h-[400px] cursor-pointer hover:opacity-80 transition"
                src={currentImg || (product?.images && product.images[0])}
                alt=""
              />
            </div>
          </div>
          {/* Product Details Section (Right Part) */}
          <div className="flex flex-col w-full lg:w-1/2 px-4 lg:px-8 mt-4 lg:mt-0">
            {/* Sub Heading */}
            <h1 className="text-xl text-gray-500">{product?.category?.name}</h1>

            {/* Heading */}
            <h1 className="text-3xl font-semibold mb-2">{product?.title}</h1>

            {/* Product Price */}
            <p className="block text-lg font-semibold text-gray-700 mb-1">
              $100.99 <span className="text-red-800 font-semibold">49% off</span>
            </p>
            <p className="text-3xl font-bold text-primary mb-4">${product?.price}</p>

            {/* Select Size */}
            <div>
              <p className="text-lg text-gray-700 mb-2">Select Size</p>
              <div className="flex gap-2 mb-4">
                {sizes.map((btn, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(btn)}
                    className={`w-10 h-10 flex justify-center items-center text-white cursor-pointer ${selectedBtn === btn ? 'bg-accent shadow-lg' : 'bg-secondary'} rounded-full transition duration - 300 hover: bg- accent`}
                  >
                    {btn}
                  </div>
                ))}
              </div>
              <p className="text-red-800 font-bold">Only 2 products left</p>
            </div>

            {/* total items to cart  */}
            <div className='flex gap-2 mt-5 selection:not-sr-only'>
              <Tooltip title="Add more quantity">
                <p onClick={() => setQuantity(quantity == 10 ? 10 : quantity + 1)} className='text-lg bg-primary cursor-pointer text-white px-5 rounded-sm'>+</p>
              </Tooltip>
              <p className='text-lg bg-[#51b351] text-white px-5 rounded-sm'>{quantity}</p>
              <Tooltip title="Remove quantity">
                <p onClick={() => setQuantity(quantity == 1 ? 1 : quantity - 1)} className='text-lg bg-primary cursor-pointer text-white px-5 rounded-sm'>-</p>
              </Tooltip>
            </div>
            {/* showing max limit quantity */}
            <p className='text-red-800 text-xs font-semibold mt-1'>{quantity === 10 ? ('max quantity 10') : ""}</p>

            {/* Wishlist or Add to Cart Buttons */}
            <div className="flex flex-col sm:flex-row md:gap-4 mt-4">
              <button className="py-2 px-8 bg-secondary text-white rounded-md hover:bg-primary transition duration-300 mb-2 sm:mb-0">
                <i className="ri-heart-3-fill mr-2"></i>Wishlist
              </button>

              <button className="py-2 px-8 bg-primary text-white rounded-md hover:bg-accent transition duration-300">
                <i className="ri-shopping-cart-fill mr-2"></i>Add to Cart
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-6">
              <p className="text-lg font-semibold mb-2">Product Details</p>
              <p className="text-gray-600">{product?.description}</p>
            </div>

            {/* Reviews (Placeholder) */}
            <div className="mt-6">
              <p className="text-lg font-semibold mb-2">Product Reviews</p>
              {/* Add your logic for displaying reviews here */}
              <p className="text-gray-600">No reviews yet. Be the first one to review!</p>
            </div>
          </div>
        </div>
      )}




    </div>
  );
};

export default ProductDetail;
