import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Simulate user authentication status and data
  const [user, setUser] = useState(null); // Set to `{ name: "John Doe" }` for logged-in

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold">Wealth Managment</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/income" className="hover:text-gray-400">
            Incomes
          </Link>
          <Link to="/expense" className="hover:text-gray-400">
            Expenses
          </Link>
          {/* <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a> */}
        </nav>

        {/* Right Side (Profile/Actions) */}
        <div className="flex items-center space-x-4">
          {/* Conditionally render user name or login button */}
          {user ? (
            <div className="flex items-center space-x-2">
              {/* Profile Icon */}
              <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                <span className="sr-only">Open user menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 1.5c-2.7 0-8 1.4-8 4.2V19h16v-1.3c0-2.8-5.3-4.2-8-4.2z"
                  />
                </svg>
              </button>
              {/* User Name */}
              <span>{user.name}</span>
            </div>
          ) : (
            // Login Button
            <button
              onClick={() => setUser({ name: "John Doe" })} // Simulate login
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-400 focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
