import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Button } from "react-bootstrap"; // Using Bootstrap for buttons
import Layout from "../components/Layout/Layout";
import moment from "moment";
import { getAllTransactionFn } from "../services/transactionServices";

const ViewReport = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [view, setView] = useState("table");

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await getAllTransactionFn();
      const data = res.data.data || [];
      setTransactions(data);

      // Calculate total income and expense
      const income = data
        .filter((transaction) => transaction.type === "income")
        .reduce((sum, transaction) => sum + transaction.amount, 0);

      const expense = data
        .filter((transaction) => transaction.type === "expense")
        .reduce((sum, transaction) => sum + transaction.amount, 0);

      setTotalIncome(income);
      setTotalExpense(expense);
    };

    fetchTransactions();
  }, []);

  // Generate data for pie charts
  const overallPieData = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense },
  ];

  const incomeCategoryData = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((categories, transaction) => {
      const existingCategory = categories.find(
        (cat) => cat.name === transaction.category
      );
      if (existingCategory) {
        existingCategory.value += transaction.amount;
      } else {
        categories.push({ name: transaction.category, value: transaction.amount });
      }
      return categories;
    }, []);

  const expenseCategoryData = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((categories, transaction) => {
      const existingCategory = categories.find(
        (cat) => cat.name === transaction.category
      );
      if (existingCategory) {
        existingCategory.value += transaction.amount;
      } else {
        categories.push({ name: transaction.category, value: transaction.amount });
      }
      return categories;
    }, []);

  const COLORS = ["#82ca9d", "#ff7300", "#8884d8", "#d0ed57", "#a4de6c"];

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
            {view === "table" ? "Switch to Pie Charts" : "Switch to Table"}
          </Button>
        </div>

        {/* Conditional Rendering: Pie Charts or Table */}
        {view === "pie" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Overall Income vs Expense */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-center mb-4">Income vs Expense</h3>
              <PieChart width={300} height={300}>
                <Pie
                  data={overallPieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {overallPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            {/* Income Categories */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-center mb-4">Income Categories</h3>
              <PieChart width={300} height={300}>
                <Pie
                  data={incomeCategoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {incomeCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            {/* Expense Categories */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-center mb-4">Expense Categories</h3>
              <PieChart width={300} height={300}>
                <Pie
                  data={expenseCategoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {expenseCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-md p-4">
            <h3 className="text-xl font-semibold text-center mb-4">Transaction Details</h3>
            <table className="w-full border-collapse bg-white rounded-md shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-500 text-white uppercase text-sm font-semibold">
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                  <th className="py-3 px-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(transactions) && transactions.length > 0 ? (
                  transactions.map((transaction, index) => (
                    <tr
                      key={transaction._id}
                      className={`text-sm ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="py-2 px-4 border-b">
                        {moment(transaction.date).format("DD MMM YYYY")}
                      </td>
                      <td className="py-2 px-4 border-b">{transaction.category}</td>
                      <td
                        className={`py-2 px-4 border-b ${
                          transaction.type === "income"
                            ? "text-green-500 font-semibold"
                            : "text-red-500 font-semibold"
                        }`}
                      >
                        {transaction.type}
                      </td>
                      <td className="py-2 px-4 border-b">{transaction.amount}</td>
                      <td className="py-2 px-4 border-b">{transaction.description}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-4 text-center text-gray-500">
                      No transactions available
                    </td>
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
