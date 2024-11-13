import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate, useLocation } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userToken = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50">
      <nav className="flex items-center justify-between px-8 py-4 h-16">
        <div className="text-xl font-bold flex items-center space-x-2">
          <div className="w-4 h-4 bg-lime-500"></div>
          <span>BE STRONG</span>
        </div>

        {/* Conditionally Render Navigation Links */}
        {isHomePage ? (
          <ul className="hidden md:flex space-x-8">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-lime-500 cursor-pointer text-lg"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                offset={-60}
                duration={500}
                className="hover:text-lime-500 cursor-pointer text-lg"
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="plans"
                smooth={true}
                offset={-60}
                duration={500}
                className="hover:text-lime-500 cursor-pointer text-lg"
              >
                Plans
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contactus"
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-lime-500 cursor-pointer text-lg"
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex">
            <li>
              <Link
                to="/"
                className="hover:text-lime-500 cursor-pointer text-lg"
              >
                Home
              </Link>
            </li>
          </ul>
        )}

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          {userToken ? (
            <>
              <Link
                to="/dashboard"
                className="bg-lime-500 text-black px-4 py-2 rounded hover:bg-lime-400"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
