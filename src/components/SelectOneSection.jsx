import React from 'react';
import image1 from '../assets/menWomenCateogryImages/image-1.png';
import image2 from '../assets/menWomenCateogryImages/image-2.png';
import image3 from '../assets/menWomenCateogryImages/image-3.png';
import image4 from '../assets/menWomenCateogryImages/image-4.webp';
function SelectOneSection() {
	return (
		<div className="w-full relative mt-8  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<div className=" ">
				<div className="w-full  bg-white rounded-lg overflow-hidden group">
					<div className="w-full relative  bg-gradient-to-b cursor-pointer rounded-lg transition duration-500">
						<img className=" hover:scale-105 transition-all duration-500 h-full object-cover rounded-lg object-top" src={image1} alt="" />
						<p className=" absolute group-hover:right-10 right-[-5rem] top-5 transition-all  text-white font-semibold">Men</p>
					</div>
					<div></div>
				</div>
			</div>
			<div className="col-span-1 md:col-span-2 lg:col-span-1">
				<div className="w-full  bg-white rounded-lg overflow-hidden group">
					<div className="w-full relative  bg-gradient-to-b cursor-pointer rounded-lg transition duration-500">
						<img className=" hover:scale-105 transition-all duration-500 h-full object-cover rounded-lg object-top" src={image2} alt="" />
						<p className=" absolute group-hover:right-10 right-[-5rem] top-5 transition-all  text-white font-semibold">Women</p>
					</div>
					<div></div>
				</div>
			</div>
			<div className="col-span-1 md:col-span-2 lg:col-span-1">
				<div className="w-full  bg-white rounded-lg overflow-hidden group">
					<div className="w-full relative  bg-gradient-to-b cursor-pointer rounded-lg transition duration-500">
						<img className=" hover:scale-105 transition-all duration-500 h-full object-cover rounded-lg object-top" src={image3} alt="" />
						<p className=" absolute group-hover:right-10 right-[-5rem] top-5 transition-all  text-white font-semibold">Kids</p>
					</div>
					<div></div>
				</div>
			</div>
			<div className="col-span-1 md:col-span-2 lg:col-span-1">
				<div className="w-full  bg-white rounded-lg overflow-hidden group">
					<div className="w-full relative  bg-gradient-to-b cursor-pointer rounded-lg transition duration-500">
						<img className="hover:scale-105 transition-all duration-500  h-full object-cover rounded-lg object-top" src={image4} alt="" />
						<p className=" absolute group-hover:right-10 right-[-5rem] top-5 transition-all  text-white font-semibold">Shows</p>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default SelectOneSection;
