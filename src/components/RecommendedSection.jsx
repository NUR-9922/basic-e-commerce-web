import React, { useEffect, useRef, useState } from 'react';
import { fetchData } from '../api/FetchApi';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { Favorite } from '@mui/icons-material';

function RecommendedSection({ categoryId }) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [relatedProducts, setRelatedProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetchData('https://api.escuelajs.co/api/v1/products');
				setProducts(response.slice(0, 32));
				setLoading(false);
				setRelatedProducts(products.filter((product) => product.category.id === categoryId));
			} catch (error) {
				// Handle error
			}
		};

		fetchProducts();
	}, []);

	// when i click right arrow my recommended section will scroll
	const recommended1 = useRef(null);
	const recommended2 = useRef(null);
	const handleScrollRight = (num) => {
		const recommendedRef = num === 1 ? recommended1 : recommended2;
		const maxScrollLeft = recommendedRef.current.scrollWidth - recommendedRef.current.clientWidth;

		if (recommendedRef.current.scrollLeft + recommendedRef.current.offsetWidth >= maxScrollLeft) {
			recommendedRef.current.scrollLeft = 0;
		} else {
			recommendedRef.current.scrollLeft += recommendedRef.current.offsetWidth;
		}
	};

	return (
		<div className="w-full overflow-hidden h-[70%] bg-white items-center justify-center">
			<h1 className="text-3xl font-bold text-gray-800 mb-4 capitalize px-5 pt-10 mt-10">related Products</h1>
			<div className="relative">
				<div ref={recommended1} className="recommended1 snap-x snap-mandatory relative overflow-x-auto flex overflow-y-hidden">
					{loading
						? [...Array(8)].map((_, index) => (
								<div
									key={index}
									className="animate-pulse w-80 flex-shrink-0 bg-white p-3 h-auto rounded-lg overflow-hidden border border-gray-200"
								>
									<div className="w-full h-64 bg-gray-200 rounded-t-lg"></div>
									<div className="flex justify-between mt-3">
										<div className="w-2/3 h-4 bg-gray-200"></div>
										<div className="w-1/3 h-4 bg-gray-200"></div>
									</div>
									<div className="flex items-center justify-between mt-2">
										<div className="w-1/2 h-4 bg-gray-200"></div>
										<div className="w-1/2 h-4 bg-gray-200"></div>
									</div>
									<div className="absolute top-5 right-[-2rem] duration-500 group-hover:right-5">
										<Tooltip title="Add to Wishlist">
											<span className="text-xl text-gray-500 cursor-pointer hover:text-primary">
												<Favorite />
											</span>
										</Tooltip>
									</div>
								</div>
						  ))
						: relatedProducts.map((product) => (
								<div
									key={product.id}
									className="group snap-always snap-start flex-shrink-0 bg-white ml-2 p-3 h-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105 overflow-hidden border border-gray-200"
								>
									<Link to={`/product/${product.id}`}>
										<div className="w-full relative h-64 overflow-hidden rounded-t-lg">
											<img
												className="w-full h-full object-top object-cover"
												src={product.images}
												alt={product.title}
												onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
											/>
											<div className="absolute top-2 right-2">
												<span className="text-2xl text-gray-500 cursor-pointer hover:text-primary">
													<i className="far fa-heart"></i>
												</span>
												<span className="ml-2 text-2xl text-gray-500 cursor-pointer hover:text-primary">
													<i className="far fa-bookmark"></i>
												</span>
											</div>
										</div>
									</Link>
									<div className="flex mt-3 justify-between">
										<p className="w-44 h-10 text-sm font-semibold">{product.title}</p>
										<p>
											<sup className="text-xs text-gray-500 line-through mr-2">$200</sup>${product.price}
										</p>
									</div>
									<div className="w-full flex items-center justify-between mt-2">
										<div className="flex text-yellow-400">
											<i className="ri-star-fill"></i>
											<i className="ri-star-fill"></i>
											<i className="ri-star-fill"></i>
											<i className="ri-star-fill"></i>
											<i className="ri-star-fill"></i>
										</div>
										<button className="bg-primary cartAnimation text-white py-2 px-4 rounded-lg">
											<span>Add to Cart</span> <i className="ri-shopping-cart-2-line ml-2"></i>
										</button>
									</div>
									<div className="absolute top-5 right-[-2rem] duration-500 group-hover:right-5">
										<Tooltip title="Add to Wishlist">
											<span className="text-xl text-gray-500 cursor-pointer hover:text-primary">
												<Favorite />
											</span>
										</Tooltip>
									</div>
								</div>
						  ))}
				</div>
				<div onClick={() => handleScrollRight(1)} className=" customCenter flex items-center justify-center bg-white rounded-full p-2 z-[10]">
					{/* right arrow in svg miui*/}
					<svg xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</div>
			</div>
			<h1 className="text-3xl font-bold text-gray-800 mb-4 capitalize px-5 pt-10">products</h1>
			<div className="relative">
				<div ref={recommended2} className="recommended2 snap-x snap-mandatory relative overflow-x-auto flex overflow-y-hidden">
					{products.map((product) => (
						<div
							key={product.id}
							className="group snap-always snap-start ml-2 flex-shrink-0 bg-white p-3 h-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105 overflow-hidden border border-gray-200"
						>
							<Link to={`/product/${product.id}`}>
								<div className="w-full relative h-64 overflow-hidden rounded-t-lg">
									<img
										className="w-full h-full object-top object-cover"
										src={product.images}
										alt={product.title}
										onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
									/>
									<div className="absolute top-2 right-2">
										<span className="text-2xl text-gray-500 cursor-pointer hover:text-primary">
											<i className="far fa-heart"></i>
										</span>
										<span className="ml-2 text-2xl text-gray-500 cursor-pointer hover:text-primary">
											<i className="far fa-bookmark"></i>
										</span>
									</div>
								</div>
							</Link>
							<div className="flex mt-3 justify-between">
								<p className="w-44 h-10 text-sm font-semibold">{product.title}</p>
								<p>
									<sup className="text-xs text-gray-500 line-through mr-2">$200</sup>${product.price}
								</p>
							</div>
							<div className="w-full flex items-center justify-between mt-2">
								<div className="flex text-yellow-400">
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
								</div>
								<button className="bg-primary cartAnimation text-white py-2 px-4 rounded-lg">
									<span>Add to Cart</span> <i className="ri-shopping-cart-2-line ml-2"></i>
								</button>
							</div>
							<div className="absolute top-5 right-[-2rem] duration-500 group-hover:right-5">
								<Tooltip title="Add to Wishlist">
									<span className="text-xl text-gray-500 cursor-pointer hover:text-primary">
										<Favorite />
									</span>
								</Tooltip>
							</div>
						</div>
					))}
				</div>
				<div onClick={() => handleScrollRight(2)} className=" customCenter flex items-center justify-center bg-white rounded-full p-2 z-[10]">
					{/* right arrow in svg miui*/}
					<svg xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</div>
			</div>
		</div>
	);
}

export default RecommendedSection;
