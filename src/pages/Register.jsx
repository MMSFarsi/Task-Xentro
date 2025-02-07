import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { registerUser, updateUserProfile, setUser, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (password.length < 6) {
      Swal.fire("Error", "Password must be at least 6 characters long.", "error");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!passwordRegex.test(password)) {
      Swal.fire(
        "Error",
        "Password must include at least one uppercase letter, one lowercase letter, one special character, and one digit.",
        "error"
      );
      return;
    }

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(user);
            Swal.fire("Success", "Registration successful!", "success");
            navigate("/");
          })
          .catch(() => {
            Swal.fire("Error", "Failed to update user profile.", "error");
          });
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  const handleGoogle = () => {
    signWithGoogle()
      .then((result) => {
        setUser(result.user);
        Swal.fire("Success", "Logged in with Google successfully!", "success");
        navigate("/");
      })
      .catch(() => {
        Swal.fire("Error", "Failed to log in with Google. Please try again.", "error");
      });
  };

  return (
    <div className="py-10 p-3 min-h-screen flex items-center justify-center">
      <div className="card w-[300px] lg:w-[400px] p-6 border-[#676767] border bg-white dark:bg-gray-100 shadow-xl rounded-lg">
        <h2 className="text-sm lg:text-2xl font-bold text-center text-indigo-500 mb-6">Create an Account</h2>
        <form onSubmit={handleCreateUser} className="space-y-2 lg:space-y-4">
          <div>
            <label className="block text-xs lg:text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-2 lg:px-4 py-1 lg:py-2 mt-2 border text-xs lg:text-base border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-xs lg:text-sm  font-medium text-gray-600">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-2 lg:px-4 py-1 lg:py-2 mt-2 border text-xs lg:text-base border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-xs lg:text-sm  font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-2 lg:px-4 py-1 lg:py-2 mt-2 border text-xs lg:text-base border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-xs lg:text-sm  font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-2 text-xs lg:text-base lg:px-4 py-1 lg:py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <button className="w-full cursor-pointer text-sm py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg transition">
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-[10px] lg:text-xs text-[#000000]">
            Already have an account? <Link to="/login" className="underline">Login</Link>
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={handleGoogle}
            className="flex cursor-pointer items-center justify-center w-full py-1 lg:py-2 px-2 lg:px-4 bg-white border rounded-lg shadow hover:shadow-lg transition gap-2"
          >
            <span>   <img
              width="25"
              height="25"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            </span>
            <span className="text-xs font-medium text-gray-800">Register with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
