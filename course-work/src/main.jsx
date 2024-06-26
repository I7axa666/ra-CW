import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Page404 from './components/Page404.jsx'
import Bestsellers from './components/Bestsellers.jsx'
import Catalog from './components/Catalog.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import ProductInfo from './components/ProductInfo.jsx'
import OrderSuccess from './components/OrderSuccess.jsx'
import Cart from './components/Cart.jsx'
import { Provider } from 'react-redux';
import store from './store/store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      { 
        path: "/", 
        element: <>
                  <Bestsellers />
                  <Catalog />
                </>
      },  
      {
        path: "*",
        element: <Page404 />,
      },
      {
        path: "/about.html",
        element: <About />,
      },
      {
        path: "/contacts.html",
        element: <Contacts />,
      },
      {
        path: "/catalog.html",
        element: <Catalog />,
      },
      {
        path: "/catalog/:id.html",
        element: <ProductInfo />,
      },
      {
        path: "/cart.html",
        element: <Cart />,
      },
      {
        path: "/success.html",
        element: <OrderSuccess />,
      }   
    ],
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>  
  </React.StrictMode>,
)
