import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.js';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/sidebar/sidebar';
import '../css/productitem.css'

function Monitor(props) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/monitor');
        const data = await response.json();
        setProducts(data);
        console.log(data);
        if (data.length > 0) {
          setSelectedProduct(data[0]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <Header />
      <div className='product-container'>
        <div className="sidebar-and-main-product">
          <div className="sidebar">
            <Sidebar />
          </div>

          <div className="main-product">
            {selectedProduct ? (
              <div className="product-detail">
                <img src={selectedProduct.IMAGE_LINK} alt={selectedProduct.PRODUCT_NAME} />
                <div className="products-info">
                <div className="main-products-detail">
                    <h2>{selectedProduct.PRODUCT_NAME}</h2>
                    <h3>Price: {selectedProduct.PRICE}</h3>
                    <p>Made by: {selectedProduct.MANUFACTURE}</p>
                    <p>Dimension: {selectedProduct.DIMENSION}</p>
                    <p>Resolution: {selectedProduct.RESOLUTION}</p>
                    <p>Ratio: {selectedProduct.SCREEN_RATIO}</p>
                    <p>Brightness: {selectedProduct.BRIGHTNESS}</p>
                    <p>Screen type: {selectedProduct.TYPE_SCREEN}</p>
                    <p>Weight: {selectedProduct.WEIGHT}</p>
                  </div>
                  <p>{selectedProduct.description}</p>
                </div>
              </div>
            ) : (
              <p>Select a product to see details</p>
            )}
          </div>
        </div>

        <div className="list-product">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} onClick={() => handleProductClick(product)}>
                <ProductCard
                  img_link={product.IMAGE_LINK}
                  name={product.PRODUCT_NAME}
                  price={product.PRICE}
                  product_id={product.PRODUCT_ID}
                />
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Monitor;
