import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const products = useLoaderData();
  const navigate=useNavigate()
  return (
    <div className="p-12 overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product.id}>
              <th>{i + 1}</th>
              <td>{product.name}</td>
              <td>  <button  onClick={() => navigate(`/product/${product.id}`)} className="btn btn-primary">Details</button> </td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;