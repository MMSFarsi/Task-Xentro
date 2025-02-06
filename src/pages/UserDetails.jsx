import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
    }
    , [id]);

    if (!user) {
        return <p>No User Found</p>;
    }

    return (
        <div className="p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-black p-3 text-center">User Details: {user.id}</h2>
            <div className="bg-white shadow-md border-2 rounded-lg p-6">
                <p className="mb-4"><span className="font-semibold">Name:</span> {user.name}</p>
                <p className="mb-4"><span className="font-semibold">Username:</span> {user.username}</p>
                <p className="mb-4"><span className="font-semibold">Email:</span> {user.email}</p>
                <p className="mb-4"><span className="font-semibold">Phone:</span> {user.phone}</p>
                <p className="mb-4"><span className="font-semibold">Website:</span> {user.website}</p>
                <p className="mb-4"><span className="font-semibold">Address:</span> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                </p>
                <p className="mb-4"><span className="font-semibold">Company:</span> {user.company.name}</p>
            </div>
            <button onClick={() => navigate(-1)}
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Go Back
            </button>
        </div>
    );
};

export default UserDetails;
