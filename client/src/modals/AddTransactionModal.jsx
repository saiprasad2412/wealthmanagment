import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTransactionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const validationSchema = Yup.object({
    amount: Yup.number()
      .positive("Amount must be a positive number")
      .required("Amount is required"),
    category: Yup.string().required("Category is required"),
    type: Yup.string().oneOf(["income", "expense"], "Invalid transaction type").required("Type is required"),
    date: Yup.date().required("Date is required"),
  });

  const handleAddTransaction = async (values, { resetForm }) => {
    try {
      console.log("Transaction Details:", values);
      toast.success("Transaction added successfully!");
      resetForm(); 
      onClose();
    } catch (error) {
      console.error("Error adding transaction:", error);
      toast.error("Failed to add transaction. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
        <Formik
          initialValues={{
            amount: "",
            category: "",
            type: "",
            date: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleAddTransaction}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-gray-600">
                  Amount
                </label>
                <Field
                  type="number"
                  id="amount"
                  name="amount"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
                <ErrorMessage name="amount" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <Field
                  type="text"
                  id="category"
                  name="category"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter category"
                />
                <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="type" className="block text-gray-600">
                  Type
                </label>
                <Field
                  as="select"
                  id="type"
                  name="type"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" label="Select type" />
                  <option value="income" label="Income" />
                  <option value="expense" label="Expense" />
                </Field>
                <ErrorMessage name="type" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-gray-600">
                  Date
                </label>
                <Field
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer position="bottom-center" />
      </div>
    </div>
  );
};

export default AddTransactionModal;
