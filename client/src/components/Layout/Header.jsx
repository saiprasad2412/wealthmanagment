import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Reference to the dropdown and profile icon to handle clicks outside
  const dropdownRef = useRef(null);
  const profileIconRef = useRef(null);

  useEffect(() => {
    const loc = localStorage.getItem('user');
    setUser(JSON.parse(loc));
  }, []);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        profileIconRef.current && !profileIconRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
      
        <div className="flex items-center">
          <span className="text-2xl font-bold">Wealth Management</span>
        </div>

       
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact-us" className="hover:text-gray-400">
            Contact Us
          </Link>
        </nav>

        
        <div className="flex items-center space-x-4">
          
          {user ? (
            <div className="relative flex items-center space-x-2">
              
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                ref={profileIconRef}
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
              >
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
              
              <span>{user.name}</span>

              
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg"
                >
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            
            <button
              onClick={() => {
                navigate('/login');
              }} 
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
            >
              Login
            </button>
          )}
        </div>

        
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
