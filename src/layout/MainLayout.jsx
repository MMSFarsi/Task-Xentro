import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const MainLayout = () => {
  const { user, logOut } = useContext(AuthContext)
  const linkClass = "block py-2 mt-1 px-4 w-full   transition";
  const navigate = useNavigate()
  const handleLogout = () => {
    logOut()
    navigate("/")
  };

  return (
    <div className="grid grid-cols-12">
      <div className='  col-span-3 lg:col-span-2 border-r-2 border-gray-200 bg-white text-black'>
        <h2 className="text-[13px] lg:text-lg text-center font-bold mb-1 text-indigo-600 mt-4 p-1 lg:p-6">Admin Dashboard</h2>
      {user?.email &&   <h1 className="text-xs font-semibold text-center text-indigo-600">
          Welcome  <span className="text-blue-500">{user?.displayName}</span>!
        </h1>}
        <nav className='text-xs lg:text-sm'>
          <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? 'text-[#1C9FFF] bg-[#F3FAFF]  ' : 'hover:text-[#97c5e5]'}`}>  All Users </NavLink>
          <NavLink to="/products" className={({ isActive }) => `${linkClass} ${isActive ? 'text-[#1C9FFF] bg-[#F3FAFF] ' : 'hover:text-[#97c5e5]'}`} > Products </NavLink>
          {user?.email ? <button onClick={handleLogout} className='btn mt-2 btn-xs btn-primary ml-2'>Logout</button> : <NavLink to="/login" className={({ isActive }) => `${linkClass} ${isActive ? 'text-[#1C9FFF] bg-[#F3FAFF] ' : 'hover:text-[#97c5e5]'}`} > Login </NavLink>}

        </nav>
      </div>
      <div className='min-h-screen col-span-9 lg:col-span-10 bg-[#F4F4F4]'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
