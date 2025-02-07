import { Link } from "react-router-dom";
import { FaRegFrownOpen } from "react-icons/fa"; 

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <FaRegFrownOpen className="text-6xl text-gray-600 mb-4" />
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-400 transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
