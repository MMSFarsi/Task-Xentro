import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const AllProducts = () => {
  const allProducts = useLoaderData();
  const [products, setProducts] = useState(allProducts);
  const navigate = useNavigate()
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts(products.filter(product => product.id !== id));
        axios.delete(`https://api.restful-api.dev/objects/${id}`)
        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success"
        });
      }
    });

  };
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
              <td>  <button onClick={() => navigate(`/product/${product.id}`)} className="btn mr-2 btn-primary">Details</button>
                <button onClick={() => handleDelete(product.id)} className='btn bg-red-500 text-white'>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;