import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { fetchData } from '../api/FetchApi';
import { ItemsContext } from '../context/Items';

function ProductCart() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { items, setItems } = useContext(ItemsContext);
	// console.log(items);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetchData('https://api.escuelajs.co/api/v1/products');
				setProducts(response.slice(0, 32));
				setLoading(false); // Set loading to false when data is received
			} catch (error) {
				console.error('api calling error in product component', error);
			}
		})();
	}, []);
	const handelAddToCart = (product) => {
		const existingItem = items.filter((item) => item.id == product.id);
		if (existingItem.length > 0) {
			setItems(
				items.map((item) => {
					if (item.id == product.id) {
						return {
							...item,
							quantity: item.quantity + 1,
						};
					}
					return item;
				})
			);
			console.log('existing item');
		} else {
			console.log('new item');
			setItems([...items, { ...product, quantity: 1 }]);
		}
	};

	return (
		<div className="w-full grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{loading
				? // Show loading skeleton while data is being fetched
				  [...Array(8)].map((_, index) => (
						<div key={index} className="animate-pulse bg-white p-3 h-auto rounded-lg overflow-hidden border border-gray-200">
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
				: // Show product cards once data is fetched
				  products.map((product) => (
						<div
							key={product.id}
							className="group bg-white p-3 h-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105 overflow-hidden border border-gray-200"
						>
							<Link to={`/product/${product.id}`}>
								<div className="w-full relative h-64 overflow-hidden rounded-t-lg">
									<img
										className="w-full h-full object-top object-cover"
										src={product.images}
										alt={product.title}
										onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
										loading="lazy"
										width={300}
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
								<p className="w-44 text-sm font-semibold">{product.title}</p>
								<p>
									<sup className="text-xs text-gray-500 line-through mr-2">$200</sup>${product.price}
								</p>
							</div>
							<div className="w-full flex items-center justify-between mt-2">
								<div className="flex text-yellow-400">
									{Array(5)
										.fill()
										.map((_, index) => (
											<i key={index} className="ri-star-fill"></i>
										))}
								</div>
								<button onClick={() => handelAddToCart(product)} className="bg-primary cartAnimation text-white py-2 px-4 rounded-lg">
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
	);
}

export default ProductCart;
