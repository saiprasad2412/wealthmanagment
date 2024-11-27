import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Layout from "../components/Layout/Layout"; // Assuming you're using a Layout component

const ContactUs = () => {
  return (
    <Layout>
      <div className="container mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

        {/* Contact Information */}
        <div className="text-center mb-6">
          <p className="text-lg mb-4">You can reach us through the following channels:</p>

          {/* Email */}
          <div className="mb-4">
            <p className="text-xl font-semibold">Email:</p>
            <p className="text-lg text-blue-500">contact@yourcompany.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-blue-400 hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900" />
            </a>
            <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
