import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Button } from "react-bootstrap"; // Using Bootstrap for buttons
import Layout from "../components/Layout/Layout";
import moment from 'moment'
import { getAllTransactionFn } from "../services/transactionServices";


const ViewReport = () => {
  const [transactions, setTransactions] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [view, setView] = useState("table"); 



  useEffect(() => {
    const get=async()=>{
      const res=await getAllTransactionFn();
      setTransactions(res.data.data);
      
    }
    get();
  }, []);



  // Pie chart data
  const pieData = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense }
  ];

  return (
    <Layout>
      <div className="container mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Transaction Reports</h2>

        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <Button 
            variant="primary" 
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2" 
            onClick={() => setView(view === "table" ? "pie" : "table")}
          >
            {view === "table" ? "Switch to Pie Chart" : "Switch to Table"}
          </Button>
        </div>

        {/* Conditional Rendering: Pie Chart or Table */}
        {view === "pie" ? (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center mb-4">Income vs Expense</h3>
            <PieChart width={400} height={400}>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
                <Cell key="Income" fill="#82ca9d" />
                <Cell key="Expense" fill="#ff7300" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-md p-4">
            <h3 className="text-xl font-semibold text-center mb-4">Transaction Details</h3>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Date</th>
                  <th className="py-2 px-4 border-b text-left">Category</th>
                  <th className="py-2 px-4 border-b text-left">Type</th>
                  <th className="py-2 px-4 border-b text-left">Amount</th>
                  <th className="py-2 px-4 border-b text-left">Description</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(transactions) && transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{moment(transaction.date).format('DD MMM YYYY')}</td>

                <td>{transaction.category}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No transactions available</td>
            </tr>
          )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ViewReport;
