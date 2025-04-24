import React from "react";
import "./css/products.css"
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";

function Products({ children }) {
  return (
    <div className="products-layout">
      <Header />
      <div className="product-grid">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Products;
