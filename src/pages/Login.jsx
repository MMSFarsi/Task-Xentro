import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signUser, setUser, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const [error, setError] = useState({});
  const handleGoogle = () => {
    signWithGoogle()
      .then((result) => {
        setUser(result.user);
        Swal.fire("Success!", "Logged in with Google successfully!", "success");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Error", "Failed to log in with Google. Please try again.", "error");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUser(email, password)
      .then((result) => {
        setUser(result.user);
        e.target.reset();
        Swal.fire("Success!", "Logged in successfully!", "success");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        setError((prev) => ({ ...prev, login: err.code }));
        Swal.fire("Login Failed", `Error: ${err.code}`, "error");
      });
  };

  return (
    <div className="min-h-screen p-3  flex justify-center items-center py-8">
      <div className="w-[300px] lg:w-full border-[#676767] border max-w-sm bg-white rounded-xl shadow-xl p-5 lg:p-8 lg:space-y-6 space-y-2 ">
        <h2 className="text-center text-xl lg:text-3xl font-semibold text-indigo-500">Login to Xentro</h2>
        <form onSubmit={handleSubmit} className="space-y-2 lg:space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs lg:text-sm">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="w-full px-2 text-xs lg:text-base lg:px-4 py-1 lg:py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs lg:text-sm">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-2 text-xs lg:text-base lg:px-4 py-1 lg:py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />

          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary btn-sm w-full py-2 text-sm lg:text-lg font-semibold rounded-lg">
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-[10px] lg:text-xs text-[#000000]">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
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
            <span className="text-xs font-medium text-gray-800">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
