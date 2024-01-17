import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Mobile_tablet = () => {
  // Sample data for Trending Offers, Mobile Carts, and Additional Banners
  const trendingOffers = [
    {
      id: 1,
      name: 'Product A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    // Add more trending offers as needed
  ];

  const topMobile = [
    {
      mobileBrandName: 'apple',
      mobiles: [
        {
          id: 'IryxhN',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'ySKnz45R1I',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'I4iTi5WL6Yy1JmHh',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VAyHZWBqhGOceIY',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: '2ebXLa',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'zcqBrmQ1tjkTlDxTu',
          name: 'Mobile 91',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Ji2vetPcE',
          name: 'Mobile 19',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VyAHAZqRwlSowcyU',
          name: 'Mobile 27',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Oxq5VG4AzCQ',
          name: 'Mobile 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HrjNyDCNZjIOms',
          name: 'Mobile 99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HIb8a8FYtv6JuyGu',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'kfJKY1DwSpg3zBUM8Lg',
          name: 'Mobile 51',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'WNfTtYid9YEomGuK5N',
          name: 'Mobile 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'p4iRJhSEp1EX6xYPEY',
          name: 'Mobile 50',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'DzniM',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'wWeUOJrPN9sFv',
          name: 'Mobile 32',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'LDyrz30aiK0cy',
          name: 'Mobile 36',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
      ]
    },
    {
      mobileBrandName: 'poco',
      mobiles: [
        {
          id: 'IryxhN',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'ySKnz45R1I',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'I4iTi5WL6Yy1JmHh',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VAyHZWBqhGOceIY',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: '2ebXLa',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'zcqBrmQ1tjkTlDxTu',
          name: 'Mobile 91',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Ji2vetPcE',
          name: 'Mobile 19',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VyAHAZqRwlSowcyU',
          name: 'Mobile 27',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Oxq5VG4AzCQ',
          name: 'Mobile 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HrjNyDCNZjIOms',
          name: 'Mobile 99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HIb8a8FYtv6JuyGu',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'kfJKY1DwSpg3zBUM8Lg',
          name: 'Mobile 51',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'WNfTtYid9YEomGuK5N',
          name: 'Mobile 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'p4iRJhSEp1EX6xYPEY',
          name: 'Mobile 50',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'DzniM',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'wWeUOJrPN9sFv',
          name: 'Mobile 32',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'LDyrz30aiK0cy',
          name: 'Mobile 36',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
      ]
    },
    {
      mobileBrandName: 'samsung',
      mobiles: [
        {
          id: 'IryxhN',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'ySKnz45R1I',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'I4iTi5WL6Yy1JmHh',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VAyHZWBqhGOceIY',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: '2ebXLa',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'zcqBrmQ1tjkTlDxTu',
          name: 'Mobile 91',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Ji2vetPcE',
          name: 'Mobile 19',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VyAHAZqRwlSowcyU',
          name: 'Mobile 27',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Oxq5VG4AzCQ',
          name: 'Mobile 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HrjNyDCNZjIOms',
          name: 'Mobile 99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HIb8a8FYtv6JuyGu',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'kfJKY1DwSpg3zBUM8Lg',
          name: 'Mobile 51',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'WNfTtYid9YEomGuK5N',
          name: 'Mobile 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'p4iRJhSEp1EX6xYPEY',
          name: 'Mobile 50',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'DzniM',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'wWeUOJrPN9sFv',
          name: 'Mobile 32',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'LDyrz30aiK0cy',
          name: 'Mobile 36',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
      ]
    },
    {
      mobileBrandName: 'realme',
      mobiles: [
        {
          id: 'IryxhN',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'ySKnz45R1I',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'I4iTi5WL6Yy1JmHh',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VAyHZWBqhGOceIY',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: '2ebXLa',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'zcqBrmQ1tjkTlDxTu',
          name: 'Mobile 91',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Ji2vetPcE',
          name: 'Mobile 19',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VyAHAZqRwlSowcyU',
          name: 'Mobile 27',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Oxq5VG4AzCQ',
          name: 'Mobile 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HrjNyDCNZjIOms',
          name: 'Mobile 99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HIb8a8FYtv6JuyGu',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'kfJKY1DwSpg3zBUM8Lg',
          name: 'Mobile 51',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'WNfTtYid9YEomGuK5N',
          name: 'Mobile 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'p4iRJhSEp1EX6xYPEY',
          name: 'Mobile 50',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'DzniM',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'wWeUOJrPN9sFv',
          name: 'Mobile 32',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'LDyrz30aiK0cy',
          name: 'Mobile 36',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
      ]
    },
    {
      mobileBrandName: 'infnix',
      mobiles: [
        {
          id: 'IryxhN',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'ySKnz45R1I',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'I4iTi5WL6Yy1JmHh',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VAyHZWBqhGOceIY',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: '2ebXLa',
          name: 'Mobile 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'zcqBrmQ1tjkTlDxTu',
          name: 'Mobile 91',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Ji2vetPcE',
          name: 'Mobile 19',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'VyAHAZqRwlSowcyU',
          name: 'Mobile 27',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'Oxq5VG4AzCQ',
          name: 'Mobile 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HrjNyDCNZjIOms',
          name: 'Mobile 99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'HIb8a8FYtv6JuyGu',
          name: 'Mobile 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'kfJKY1DwSpg3zBUM8Lg',
          name: 'Mobile 51',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'WNfTtYid9YEomGuK5N',
          name: 'Mobile 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'p4iRJhSEp1EX6xYPEY',
          name: 'Mobile 50',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'DzniM',
          name: 'Mobile 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'wWeUOJrPN9sFv',
          name: 'Mobile 32',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
        {
          id: 'LDyrz30aiK0cy',
          name: 'Mobile 36',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://via.placeholder.com/300x150',
        },
      ]
    },
  ]


console.log(topMobile.map(item => item.mobiles.map(subItem => subItem.id)));

const additionalBanners = [
  {
    id: 1,
    name: 'Banner 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    name: 'Banner 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    name: 'Banner 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    name: 'Banner 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/300x150',
  },
  // Add more additional banners as needed
];


const mobileCartSliderSettings = {
  dots: true,
  slidesToShow: 4, // Display 5 items in one row
  slidesToScroll: 1,
  gap: 10,
  responsive: [
    {
      breakpoint: 640, // Adjust breakpoint as needed
      settings: {
        slidesToShow: 2, // Display 1 item in one row for smaller screens
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

return (
  <div className="min-h-screen flex flex-col font-sans bg-background">
    {/* Header */}
    <header className=" text-black p-4 text-2xl text-left">
      <h1 className=" font-bold">Trending Offers</h1>
    </header>

    {/* Trending Offers Section */}
    <section className="flex-1 p-4">
      <div className="container mx-auto grid grid-cols-1 gap-5  ">
        {trendingOffers.map((offer) => (
          <Link key={offer.id} to={`/offer/${offer.id}`} className="">
            <div key={offer.id} className="bg-white p-6 rounded-md shadow-md">
              <img className="w-full object-cover h-64 mb-4" src={offer.imageUrl} alt={offer.name} />
              <p className="text-primary text-xl font-bold mb-2">{offer.name}</p>
              <p className="text-secondary">{offer.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Mobile Carts Section */}
    {topMobile?.map((cart) => (
      <section key={cart.id} className="flex-1 p-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold capitalize mb-4 text-accent">{cart.mobileBrandName}</h2>
          <Slider {...mobileCartSliderSettings}>
            {cart.mobiles?.map((cart) => (
              <div key={cart.id} className="bg-white p-6 gap-80 grid grid-cols-4 rounded-md shadow-md " style={{ marginLeft: '20px' }}>
                <Link to={`/product/${cart.id}`}>
                  <img className="w-full object-cover h-40 mb-4" src={cart.imageUrl} alt={cart.name} />
                  <p className="text-primary text-xl font-bold mb-2">{cart.name}</p>
                  <p className="text-secondary">{cart.description}</p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    ))}


    {/* Trending Offers Section */}
    <section className="flex-1 p-4">
      <div className="container mx-auto grid grid-cols-1 gap-5  ">
        <div className="bg-white p-6 rounded-md shadow-md">
          <img className="w-full object-cover h-80 mb-4" src='https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
          <p className="text-primary text-xl font-bold mb-2">Trending Offers</p>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a maiores corporis. Saepe earum, ducimus tempora officiis tenetur odio est!</p>
        </div>

      </div>
    </section>


    {/* Additional Banners Section */}
    <section className="flex-1 p-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {additionalBanners.map((banner) => (
          <div key={banner.id} className="bg-white p-6 rounded-md shadow-md">
            <img className="w-full object-cover h-40 mb-4" src={banner.imageUrl} alt={banner.name} />
            <p className="text-primary text-xl font-bold mb-2">{banner.name}</p>
            <p className="text-secondary">{banner.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
};

export default Mobile_tablet;
