import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';
import { fetchData } from '../api/FetchApi';

const ProductCard = () => {
	return (
		<div className="mt-20">
			{/* heading */}
			<div className="text-center ">
				<h5 className="text-3xl font-bold mb-2 relative inline-block transition-transform  duration-300 cursor-pointer  transform group hover:scale-105">
					Explore Our Recommendations
					{/* line */}
					<div className="w-full flex justify-center items-centers">
						<div className="bg-primary w-32 h-1 duration-300 group-hover:scale-x-[2]"></div>
					</div>
				</h5>
				<p className="text-gray-600 text-sm">Handpicked just for you</p>
			</div>
			{/* popular product components */}
			<ProductCart />
		</div>
	);
};

export default ProductCard;
