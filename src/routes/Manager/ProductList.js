import React, { useState } from 'react';
import Manager_Header from './Manager_Header.js';
import Manager_Sidebar from './Manager_Sidebar.js';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A', category: 'Danh mục 1', price: 50000, stock: 10 },
    { id: 2, name: 'Sản phẩm B', category: 'Danh mục 2', price: 75000, stock: 0 },
    { id: 3, name: 'Sản phẩm C', category: 'Danh mục 1', price: 120000, stock: 5 },
  ]);

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + Number(product.stock), 0);
  const outOfStockProducts = products.filter((product) => Number(product.stock) === 0).length;
  const totalInventoryValue = products.reduce(
    (sum, product) => sum + Number(product.price) * Number(product.stock),
    0
  );

  return (
    <div>
      <Manager_Header />
      <Manager_Sidebar />
      <div className="management-main-content">
        <h2>Danh sách sản phẩm</h2>

        {/* Thống kê */}
        <div className="statistics-container">
          <div className="stat-card">
            <div className="stat-number">{totalProducts}</div>
            <div className="stat-label">Tổng sản phẩm</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{totalStock}</div>
            <div className="stat-label">Tồn kho tổng cộng</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{outOfStockProducts}</div>
            <div className="stat-label">Sản phẩm hết hàng</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{totalInventoryValue.toLocaleString()} VNĐ</div>
            <div className="stat-label">Giá trị tồn kho</div>
          </div>
        </div>

        {/* Bảng danh sách sản phẩm */}
        {products.length > 0 ? (
          <div className="table-wrapper">
            <table className="product-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên sản phẩm</th>
                  <th>Danh mục</th>
                  <th>Giá</th>
                  <th>Tồn kho</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{Number(product.price).toLocaleString()} VNĐ</td>
                    <td>{product.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="management-empty-state">
            <img
              src="/img/empty-state.png"
              alt="Empty State"
              className="management-empty-image"
            />
            <p>
              Hiện tại hệ thống chưa có sản phẩm nào. Bạn cần thêm sản phẩm mới để quản lý một cách hiệu quả!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;