import { FaUser, FaLock } from "react-icons/fa";
import HeaderSection from "./HeaderSection";

const Login = () => {
  return (
    <>
      <HeaderSection />
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center">Log In</h2>

          {/* Username Input */}
          <div className="relative">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="username"
            >
              Username
            </label>
            <div className="flex items-center bg-gray-900 rounded-lg">
              <FaUser className="text-lime-500 ml-3" />
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full p-3 bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center bg-gray-900 rounded-lg">
              <FaLock className="text-lime-500 ml-3" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Login Button with Explicit Type */}
          <button
            type="submit"
            className="w-full bg-lime-500 text-black py-3 rounded-lg font-semibold hover:bg-lime-400 transition-colors"
          >
            Log In
          </button>

          {/* Additional Options */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="text-lime-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
