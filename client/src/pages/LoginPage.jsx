import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginFn } from "../services/userServices"; // Assuming loginFn is a function to call your API
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState("");
  const navigate=useNavigate();

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values) => {
    console.log('Values:', values);

    try {
      const res = await loginFn(values);

      console.log('Response:', res);

      if (res.success) {
        console.log('user',res.user);
        
        localStorage.setItem('user',JSON.stringify(res.user))
        toast.success("Login successful!")
        navigate('/')

      } else {
        setError(res.message || "Something went wrong");
        toast.error(res.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred while logging in");
      toast.error("An error occurred while logging in");
    }
  };
   //check if user already present in localstorage 
   useEffect(()=>{
    if(localStorage.getItem('user')){navigate('/')};
  },[navigate])

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login to Wealth Management</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Formik Form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex items-center justify-between">
              <Link  to="/register" className="text-sm text-blue-600 hover:text-blue-800 text-wrap mr-2">
                  Don't have account ? 
                </Link>
                <Link  to="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default LoginPage;
