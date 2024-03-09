import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchData } from '../../api/FetchApi';

function CategorySection() {
	const [categoryData, setCategoryData] = useState([]);
	const [loading, setLoading] = useState(true); // State to manage loading status

	useEffect(() => {
		const fetchDataAndDoSomething = async () => {
			try {
				const response = await fetchData('https://api.escuelajs.co/api/v1/categories');
				setCategoryData(response);
				setLoading(false); // Set loading to false when data is received
			} catch (error) {
				// Handle error
			}
		};

		fetchDataAndDoSomething();
	}, []);

	return (
		<div>
			{loading ? (
				// Show loading skeleton while data is being fetched
				<div className="grid bg-white capitalize px-2 md:px-5 mt-2 grid-cols-3 md:grid-cols-4 lg:flex p-2 justify-between xl:grid-cols-7 gap-4">
					{[...Array(10)].map((_, index) => (
						<div key={index} className="cursor-pointer p-2 flex flex-col items-center justify-evenly gap-2 animate-pulse">
							<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-300"></div>
							<div className="w-16 h-4 sm:w-20 bg-gray-300"></div>
						</div>
					))}
				</div>
			) : (
				// Show data once it is received
				<div className="grid bg-white capitalize overflow-x-auto px-2 md:px-5 mt-2 grid-cols-3 md:grid-cols-4 lg:flex p-2 justify-between xl:grid-cols-7 gap-4">
					{categoryData.map((item, index) => (
						<NavLink to={`/category/${item?.id}`} key={index} className="hover:opacity-80 transition">
							<div key={index} className="cursor-pointer p-2 flex flex-col items-center justify-evenly gap-2">
								<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full">
									<img
										className="w-full h-full object-cover rounded-full"
										src={item?.image}
										onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
										alt={item?.name}
									/>
								</div>
								<p className="text-center font-[400] text-[10px] sm:text-base ">{item?.name}</p>
							</div>
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
}

export default CategorySection;
