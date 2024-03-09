import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import { ItemsContextProvider } from './context/Items.jsx';
import Cart from './pages/Cart.jsx';
// import {} from './context/Items.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>Oops! There's nothing here.</div>,
		children: [
			{
				path: '/',
				element: <Home />,
			},

			{
				path: '/cart',
				element: <Cart />,
			},

			{
				path: '/category/:id',
				element: <Product />,
			},
			{
				path: '/product',
				element: <Product />,
			},
			{
				path: '/product/:id',
				element: <ProductDetails />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ItemsContextProvider>
			<RouterProvider router={router} />
			<Outlet />
		</ItemsContextProvider>
	</React.StrictMode>
);
