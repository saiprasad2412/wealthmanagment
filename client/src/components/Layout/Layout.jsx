import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />
  
        {/* Main Content */}
        <main className="flex-1">{children}</main>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  

export default Layout;
