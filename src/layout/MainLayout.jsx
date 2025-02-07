import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  const linkClass = "block py-2 px-4 w-full   transition";

  return (
    <div className="grid grid-cols-12">
      <div className='  col-span-4 lg:col-span-2 border-r-2 border-gray-200 bg-white text-black'>
        <h2 className="text-[13px] lg:text-lg text-center font-bold mb-4 mt-4 p-1 lg:p-6">Admin Dashboard</h2>
        <nav>
          <NavLink to="/alluser"  className={({ isActive }) => `${linkClass} ${isActive ? 'text-[#1C9FFF] bg-[#F3FAFF]  '  : 'hover:text-[#97c5e5]'}`}>  All Users </NavLink>
          <NavLink to="/products"className={({ isActive }) => `${linkClass} ${isActive ? 'text-[#1C9FFF] bg-[#F3FAFF] ' : 'hover:text-[#97c5e5]'}` } > Products </NavLink>
        </nav>
      </div>
      <div className='min-h-screen col-span-8 lg:col-span-10 bg-[#F4F4F4]'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
