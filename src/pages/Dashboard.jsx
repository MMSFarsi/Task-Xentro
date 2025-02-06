import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const linkClass =
    "block py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition";

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6">
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
  );
};

export default Dashboard;
