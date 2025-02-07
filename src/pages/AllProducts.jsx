import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const AllProducts = () => {
  const allProducts = useLoaderData();
  const [products, setProducts] = useState(allProducts);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts(products.filter(product => product.id !== id));
        axios.delete(`https://api.restful-api.dev/objects/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Product has been deleted.",
              icon: "success",
            });
          })
      }
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      data: {
        price: parseFloat(productPrice),
        details: productDetails || 'No details provided',
      },
    };

    axios.post('https://api.restful-api.dev/objects', newProduct)
      .then((res) => {
        setProducts([...products, res.data]);
        Swal.fire('Success', 'Product added successfully!', 'success');
        setProductName('');
        setProductPrice('');
        setProductDetails('');
        setModal(false);
      })
  };


  return (
    <div className="p-1 lg:p-10">
      <button onClick={() => setModal(true)} className="btn mb-4  btn-primary">
        Add New Product
      </button>
      {modal && (
        <div className="fixed inset-0 z-40 flex justify-center items-center  bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Add a New Product</h2>
            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Product Name</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Price</label>
                <input
                  type="number"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Product Details</label>
                <textarea
                  value={productDetails}
                  onChange={(e) => setProductDetails(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Add Product
              </button>
            </form>
            <button onClick={() => setModal(false)} className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto text-sm rounded-box border border-base-content/5 bg-base-100">
        <table className="table  w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product.id}>
                <th>{i + 1}</th>
                <td className='text-[10px] lg:text-sm'>{product.name}</td>
                <td>
                  <button onClick={() => navigate(`/product/${product.id}`)}
                    className="btn btn-xs text-white  bg-blue-600"
                  >
                    Details
                  </button>
                  <button onClick={() => handleDelete(product.id)}
                  className="btn btn-xs bg-red-500 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
