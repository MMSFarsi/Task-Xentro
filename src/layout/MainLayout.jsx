import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainLayout = () => {
  const linkClass = "block py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition";
  return (
    <div className="grid grid-cols-12">
      <div className='w-fit h-screen col-span-2 bg-gray-800 text-white p-6'>
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <nav>
          <NavLink to="/alluser" className={linkClass} activeClassName="bg-blue-700">
            All Users
          </NavLink>
          <NavLink to="/products" className={linkClass} activeClassName="bg-blue-700">
            Products
          </NavLink>
    
        </nav>
      </div>
      <div className='col-span-10'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default MainLayout
