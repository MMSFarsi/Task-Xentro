import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ALlUser from './pages/ALlUser';
import UserDetails from './pages/UserDetails';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
    
      {
        path:"/alluser",
        element:<ALlUser></ALlUser>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"/users/:id" ,
        element:<UserDetails></UserDetails>
      },
      {
        path:"/products" ,
        element:<AllProducts></AllProducts>,
        loader:()=> fetch('https://api.restful-api.dev/objects')
      },
      {
        path:"/product/:id" ,
        element:<ProductDetails></ProductDetails>
      },
   
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
