import React, { useContext, useEffect, useState } from 'react';
import { ItemsContext } from '../context/Items';
import { Link } from 'react-router-dom';

function Cart() {
	const { items, setItems } = useContext(ItemsContext);
	const [total, setTotal] = useState();
	useEffect(() => {
		window.scrollTo(0, 0);
		setTotal(items.reduce((acc, item) => acc + item.price * item.quantity, 0));
	}, [items]);
	// console.log(items.quantity);
	return (
		<div className="bg-background flex justify-center items-center mt-10">
			<div className="max-w-7xl w-full px-6">
				{/* Cart Items */}

				<h1 className="text-3xl font-bold text-center mb-10">Cart Items</h1>
				{items.length === 0 ? (
					<>
						<h1 className="text-3xl font-bold text-center ">No items in cart 😒</h1>
						{/* make this go back button */}
						<Link to={'/'} className="text-center bg-blue-400 text-white p-2 flex items-center justify-center">
							Click here to shop more
						</Link>
					</>
				) : (
					<div className="flex flex-col md:flex-row justify-between">
						<div className="flex flex-col w-full md:w-1/2 gap-5 mb-6 md:mb-0">
							{items.map((item) => (
								<div className="rounded-lg bg-white shadow-md p-6">
									<div className="flex flex-col md:flex-row justify-between lg:items-center mb-6">
										<Link to={`/product/${item.id}`}>
											<img
												src={item.images[0]}
												alt="product-image"
												onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
												className="w-full rounded-lg md:w-40 cursor-pointer"
											/>
										</Link>
										<div className="md:ml-4 md:flex md:w-full md:justify-between">
											<div className="mt-5 md:mt-0 ">
												<Link to={`/product/${item.id}`}>
													<h2 className="text-lg cursor-pointer font-bold text-gray-900">{item.title}</h2>
												</Link>
												<p className="mt-1 text-xs text-gray-700">Size: 36EU - 4US</p>
											</div>
											<div className="mt-4 flex justify-between space-x-6 md:block md:space-y-6 md:mt-0">
												<div className="flex items-center border-gray-100">
													<button
														onClick={() => {
															setItems((prevItems) =>
																prevItems.map((prevItem) => {
																	if (prevItem.id === item.id && prevItem.quantity > 1) {
																		return { ...prevItem, quantity: prevItem.quantity - 1 };
																	}
																	return prevItem;
																})
															);
														}}
														className="rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
													>
														-
													</button>
													<input
														className="h-8 w-12 border bg-white text-center text-sm outline-none"
														type="number"
														value={item.quantity || 1}
														min="1"
													/>
													<button
														onClick={() => {
															setItems((prevItems) =>
																prevItems.map((prevItem) => {
																	if (prevItem.id === item.id && prevItem.quantity <= 9) {
																		return { ...prevItem, quantity: prevItem.quantity + 1 };
																	}
																	return prevItem;
																})
															);
														}}
														className="rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
													>
														+
													</button>
												</div>
												<div className="flex items-center space-x-4">
													<p className="text-sm">${item.price}</p>
													<svg
														onClick={() => setItems(items.filter((i) => i.id !== item.id))}
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="currentColor"
														className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
													>
														<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
													</svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="flex flex-col w-full md:w-1/3 gap-5">
							<div className="rounded-lg bg-white shadow-md p-6">
								<div className="flex pb-5 justify-between items-center">
									<p>Subtotal</p>
									<p>${total}</p>
								</div>
								<div className="flex justify-between items-center">
									<p>Shipping</p>
									<p>Free</p>
								</div>
								<hr className="my-2 w-full h-1" />
								<div className="flex justify-between items-center">
									<p className="font-semibold">Total</p>
									<p>${total}</p>
								</div>
							</div>
							<button className="w-full bg-blue-500 text-white py-2 rounded-lg">Checkout</button>
							<Link to={'/'}>
								<button className="w-full bg-blue-500 text-white py-2 rounded-lg">Continue Shopping</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Cart;
