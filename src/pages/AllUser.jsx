import { useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ALlUser = () => {
  const allUser = useLoaderData();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const filteredUsers = allUser.filter((user) => {
    const searchKeyword = search.toLowerCase();
    return user.name.toLowerCase().includes(searchKeyword);
  });
  return (
    <div className="p-2 lg:p-8">
      <h2 className="text-3xl font-semibold text-blue-600 p-3 m-2 text-center">All Users</h2>

      <div className="mb-6 w-[200px] lg:w-[300px] mx-auto">
        <input type="text" placeholder="Search User by name" className="w-full text-sm px-2 py-2 bg-white text-black border border-gray-300 rounded-lg"
          value={search} onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="card w-58 lg:w-64 bg-base-100 card-lg shadow-sm">
              <div className="card-body text-[12px]">
                <h2>
                  <span className="font-semibold">Name: </span> {user.name}
                </h2>
                <p>
                  <span className="font-semibold">Email: </span> {user.email}
                </p>
                <p>
                  <span className="font-semibold">Address: </span> {user.address.city}
                </p>
                <div className="justify-center mt-5 card-actions">
                  <button onClick={() => navigate(`/users/${user.id}`)} className="btn btn-sm btn-primary">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default ALlUser;
