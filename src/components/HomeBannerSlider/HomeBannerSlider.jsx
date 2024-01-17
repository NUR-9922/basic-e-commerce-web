import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function HomeBannerSlider() {
   const isLg = useMediaQuery({ minWidth: 992 });
  const bannerData = [
    {
      id: "r3k6wGDgA",
      img: "https://lumia-theme.com/cdn/shop/files/slide-index2.png?v=1678869598&width=1536",
      title: 'Summer Sale',
      desc: 'Up to 50% off',
      btn: 'Shop Now'
    },
    {
      id: "PCoC9J15P",
      img: "https://lumia-theme.com/cdn/shop/files/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.png?v=1668971892&width=1536",
      title: ' big fashion sale',
      desc: 'Up to 80% off',
      btn: 'Shop Now'
    },
    {
      id: "0ZK5d0n9h",
      img: "https://lumia-theme.com/cdn/shop/files/preview_images/c6a650ebcac3473c934eaa783f9ae619.thumbnail.0000000000.jpg?v=1682615782&width=1920",
      title: 'shows for men',
      desc: 'Up to 30% off',
      btn: 'Shop Now'
    },
  ];

  return (
    <div className='relative  capitalize'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={ { clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 3000, }}
        navigation={isLg ? true : false}
        modules={[Navigation, Pagination]}
        className="mySwiper h-fit  "
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id} className='w-full'>
            <div className='relative w-full h-[10rem] md:h-[30rem] lg:h-[30rem]'>
              <img
                className='w-full h-full object-cover object-center max-w-full'
                src={banner.img}
                alt={`Slide ${banner.id}`}
              />
              <div className='absolute inset-0 lg:inset-10 flex flex-col justify-center items-end text-[#ffe066] pr-6'>
                <p className='text-lg md:text-5xl lg:text-7xl font-bold'>{banner.title}</p>
                <p className='text-base md:text-xl mt-3'>{banner.desc}</p>
                <Link to={`/shop/${banner.id}`}>
                  <p className='bg-background w-20 h-8 text-xs md:w-32 md:h-10 text-black cursor-pointer font-semibold hover:text-white hover:bg-primary transition-all  rounded-3xl mt-5 md:mt-10 text-center flex justify-center items-center'>
                    {banner.btn}
                  </p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeBannerSlider