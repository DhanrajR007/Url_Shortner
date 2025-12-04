import { Link } from "@tanstack/react-router";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Logo</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
          {!isAuthenticated && (
            <Link to="/auth" className="hover:text-gray-300">
              sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
