import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Router } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Mobile_tablet from './pages/Mobile_tablet.jsx';
import Product from './pages/Product.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops! There's nothing here.</div>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/category",
        element: <Category />,

      },

      {
        path: "/category/:id",
        element: <Product/>,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Outlet />
  </React.StrictMode>,
)
