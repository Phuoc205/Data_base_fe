import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.js';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/sidebar/sidebar';
import '../css/productitem.css'

function Table(props) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/table');
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
      <Header/>
      <div>
        <div className='sidebar-and-main-product'>
          <div className='sidebar'>
            <Sidebar/>
          </div>
            
          <div className="main-product">
            {selectedProduct ? (
              <div className="product-detail">
                <h2>{selectedProduct.PRODUCT_NAME}</h2>
                <img src={selectedProduct.IMAGE_LINK} alt={selectedProduct.PRODUCT_NAME} />
                <p>Price: {selectedProduct.PRICE}</p>
                <p>{selectedProduct.description}</p>
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
      <Footer/>
    </div>
  );
}

export default Table;
