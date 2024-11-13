// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <header className="bg-black text-white fixed top-0 w-full z-50">
      {" "}
      {/* Added shadow for better visibility */}
      <nav className="flex items-center justify-between px-8 py-4 h-16">
        {" "}
        {/* Set a fixed height for the navbar */}
        {/* Logo */}
        <div className="text-xl font-bold flex items-center space-x-2">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="w-4 h-4 bg-lime-500"></div>
          <span>BE STRONG</span>
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-lime-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/package" className="hover:text-lime-500 cursor-pointer">
              Package
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-lime-500 cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-lime-500 cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/signup"
            className="bg-lime-500 text-black px-4 py-2 rounded hover:bg-lime-400"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black"
          >
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
