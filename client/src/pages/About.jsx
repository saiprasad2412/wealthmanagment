import React from 'react';
import { FaUsers, FaFlagCheckered, FaEnvelope } from 'react-icons/fa'; // Optional: Icons for sections
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout>
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-800">About Us</h1>
        <p className="text-xl text-gray-600 mt-4">We are dedicated to delivering the best services and products to our customers.</p>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          Our mission is to provide exceptional services that help people achieve their goals. We strive for excellence and aim to make a positive impact in our community.
        </p>
      </section>

      {/* Team Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/path-to-image" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="text-gray-500 mt-2">John is the visionary behind the company, dedicated to leading us toward success and innovation.</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/path-to-image" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-600">Marketing Head</p>
            <p className="text-gray-500 mt-2">Jane leads our marketing efforts, ensuring our products reach the right audience with engaging strategies.</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/path-to-image" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Emily Johnson</h3>
            <p className="text-gray-600">Chief Product Officer</p>
            <p className="text-gray-500 mt-2">Emily is responsible for overseeing product development and ensuring our offerings meet customer needs.</p>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
        <p className="text-lg text-gray-600 mt-4">
          Founded in 2015, our company has grown from a small startup to an industry leader in providing quality services. We began with a simple idea to make people’s lives better, and today we are proud to serve thousands of customers across the globe.
        </p>
      </section>

     
    </div>

    </Layout>
  );
};

export default About;
