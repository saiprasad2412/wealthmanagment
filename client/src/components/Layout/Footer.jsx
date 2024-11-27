import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-4 px-2 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Logo or Text */}
          <div className="text-center md:text-left mb-2 md:mb-0">
            <span className="text-lg font-semibold">Wealth Managment</span>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} saiprasad Mane. All rights reserved.</p>
          </div>
  
          {/* Center Section - Navigation Links */}
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-gray-400 text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-400 text-sm">
              Terms of Service
            </a>
            <Link to="/contact-us" className="hover:text-gray-400 text-sm">
              Contact Us
            </Link>
          </div>
  
          {/* Right Section - Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.576 0 0 .576 0 1.285v21.43C0 23.425.576 24 1.285 24h11.494v-9.294H9.847v-3.625h2.932V8.309c0-2.9 1.775-4.484 4.373-4.484 1.243 0 2.312.092 2.623.134v3.04l-1.802.001c-1.414 0-1.69.671-1.69 1.657v2.176h3.38l-.44 3.625h-2.94V24h5.764c.709 0 1.285-.576 1.285-1.285V1.285C24 .576 23.425 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.99 9.99 0 01-2.828.775 4.93 4.93 0 002.165-2.723c-.944.555-1.99.959-3.105 1.184a4.918 4.918 0 00-8.384 4.482C7.69 7.843 4.066 5.88 1.64 2.924a4.918 4.918 0 001.523 6.573A4.902 4.902 0 01.96 8.623v.063a4.913 4.913 0 003.95 4.816 4.936 4.936 0 01-2.21.084 4.924 4.924 0 004.6 3.419 9.867 9.867 0 01-6.102 2.102c-.395 0-.786-.023-1.17-.067a13.946 13.946 0 007.548 2.213c9.056 0 14.007-7.496 14.007-13.986 0-.213-.005-.425-.015-.637A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/saiprasad-mane-24122001/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0H1.771C.791 0 0 .77 0 1.721v20.557C0 23.23.792 24 1.771 24h20.451C23.209 24 24 23.23 24 22.279V1.721C24 .77 23.209 0 22.225 0zM7.06 20.452H3.577V9.092h3.483v11.36zM5.319 7.667c-1.119 0-2.027-.92-2.027-2.055a2.034 2.034 0 114.06 0c0 1.135-.91 2.055-2.033 2.055zM20.452 20.452h-3.483v-5.965c0-1.422-.027-3.252-1.98-3.252-1.98 0-2.282 1.545-2.282 3.144v6.073H9.223V9.092h3.346v1.546h.048c.465-.88 1.598-1.806 3.288-1.806 3.512 0 4.158 2.312 4.158 5.312v6.308z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  