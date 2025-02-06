import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://api.restful-api.dev/objects/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <p className="text-center text-gray-500">No Product Available</p>;
  }

  return (
    <div className="p-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 mb-4">
          Price: <span className="font-semibold">{product.data?.price ? `$${product.data.price}` : 'N/A'}</span>
        </p>
        <div className="border-t pt-4">
          <h3 className="font-bold mb-2">Product Details:</h3>
          {product.data ? (
            <ul className="list-disc pl-6">
              {Object.entries(product.data).map(([key, value], index) => (
                <li key={index}>
                  <span className="font-semibold">{key}:</span> {value}
                </li>
              ))}
            </ul>
          ) : (<p>No details available.</p>)
          }
        </div>
        <button onClick={() => navigate(-1)} className="btn mt-3  btn-primary">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
