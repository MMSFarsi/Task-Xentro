import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AllUser from './pages/AllUser';
import UserDetails from './pages/UserDetails';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import AuthProvider from './provider/AuthProvider';
import Error from './pages/Error';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
    
      {
        path:"/",
        element:<AllUser></AllUser>,
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
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
      
   
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
