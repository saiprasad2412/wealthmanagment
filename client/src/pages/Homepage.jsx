import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import AddTransactionModal from "../modals/AddTransactionModal";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [transactionmodalToggle, setTransactionModalToggle] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) 
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user.name}!</h1>
        <p className="text-lg mb-6">
          Your personalized Wealth Management Dashboard is here.
        </p>
      </div>

      {/* Financial Overview Section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Financial Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Savings */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-500">Total Income</h3>
            <p className="text-green-600 text-lg">$15,000</p>
          </div>

          {/* Monthly Budget */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Total Expense</h3>
            <p className="text-red-600 text-lg">$2,500</p>
          </div>

          {/* Investments */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Savings</h3>
            <p className="text-gray-600 text-lg">$8,000</p>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <button className="bg-blue-600 text-white py-4 rounded-lg shadow-lg hover:bg-blue-700" onClick={() => setTransactionModalToggle(true)}>
            Add Transaction
          </button>
          <button className="bg-green-600 text-white py-4 rounded-lg shadow-lg hover:bg-green-700" onClick={()=>{
            navigate('/view-reports')
          }}>
            View Reports
          </button>
          <button className="bg-indigo-600 text-white py-4 rounded-lg shadow-lg hover:bg-indigo-700">
            Manage Investments
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="text-center py-6">
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className="bg-red-600 text-white py-2 px-6 rounded-lg shadow hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      {transactionmodalToggle && <AddTransactionModal isOpen={transactionmodalToggle} onClose={() => setTransactionModalToggle(false)}/>}
    </Layout>
  );
};

export default Homepage;
