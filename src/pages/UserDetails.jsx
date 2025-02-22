import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
    const { id } = useParams();
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
        <div className="p-2 lg:p-12 max-w-3xl mx-auto">
            <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold p-3 text-center">User Details: {user.id}</h2>
            <div className="bg-white  text-[10px] lg:text-sm shadow-md border border-gray-200 rounded-lg p-6">
                <p className="mb-4"><span className="font-semibold">Name:</span> {user.name}</p>
                <p className="mb-4"><span className="font-semibold">Username:</span> {user.username}</p>
                <p className="mb-4"><span className="font-semibold">Email:</span> {user.email}</p>
                <p className="mb-4"><span className="font-semibold">Phone:</span> {user.phone}</p>
                <p className="mb-4"><span className="font-semibold">Website:</span> {user.website}</p>
                <p className="mb-4"><span className="font-semibold">Address:</span> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                </p>
                <p className="mb-4"><span className="font-semibold">Company:</span> {user.company.name}</p>
            </div>
            <button onClick={() => navigate(-1)}className="btn mt-3  btn-primary">
                Go Back
            </button>
        </div>
    );
};

export default UserDetails;
