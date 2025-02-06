import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ALlUser from './pages/ALlUser';
import UserDetails from './pages/UserDetails';


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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
