import React from 'react'

function Product() {
     // Placeholder product data for demonstration
     const product = {
          name: 'Demo Product',
          price: 49.99,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          images: ['https://via.placeholder.com/400x400', 'https://via.placeholder.com/400x400', 'https://via.placeholder.com/400x400'],
     };

     return (
          <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-md">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product Images */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                         <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-auto rounded-lg"
                         />
                         {/* Additional images (if any) */}
                         {product.images.slice(1).map((image, index) => (
                              <img
                                   key={index}
                                   src={image}
                                   alt={product.name}
                                   className="w-full h-auto rounded-lg mt-4"
                              />
                         ))}
                    </div>

                    {/* Product Details */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                         <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                         <p className="text-lg mb-4">${product.price.toFixed(2)}</p>
                         <p className="text-gray-600 mb-4">{product.description}</p>

                         {/* Add to Cart Button (replace with actual functionality) */}
                         <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                              Add to Cart
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default Product