import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   { 
    //     path: "/", 
    //     element: <PostCard /> 
    //   },
    //   { 
    //     path: "/posts/:id", 
    //     element: <EditPost /> 
    //   },
    //   { 
    //     path: "/posts/new", 
    //     element: <CreatePost /> 
    //   },
    // ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
