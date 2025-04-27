import React, { useState, useEffect } from 'react';
import Manager_Header from './Manager_Header.js';
import Manager_Sidebar from './Manager_Sidebar.js';

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProductList = async () => {
    try {
      const response = await fetch('http://localhost:3000/products-list');
      const data = await response.json();

      if (data.success) {
        const normalizedProducts = normalizeProductsManagement(data.products);
        setProducts(normalizedProducts); // dùng dữ liệu đã chuẩn hóa
      } else {
        alert('Không lấy được danh sách sản phẩm!');
      }
    } catch (err) {
      console.error('Lỗi lấy sản phẩm:', err);
      alert('Có lỗi xảy ra khi tải sản phẩm!');
    }
  };

  const categoryMap = {
    0: 'Laptop',
    1: 'Chuột',
    2: 'Bàn phím',
    3: 'Màn hình',
    4: 'Tai nghe',
    5: 'Case',
    6: 'Quạt laptop',
    7: 'Tay cầm',
    8: 'Bàn ghế'
  };

  function normalizeProductsManagement(items) {
    return items.map(item => ({
      id: item.PRODUCT_ID || item.product_id || '',
      name: item.PRODUCT_NAME || item.info || '',
      price: Number(item.PRICE || item.price || 0),
      category: categoryMap[item.CATEGORY_ID ?? item.category] || 'Khác',
      stock: item.IN_STOCK || item.instock || 0,
    }));
  }

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + Number(product.stock), 0);
  const outOfStockProducts = products.filter((product) => Number(product.stock) === 0).length;
  const totalInventoryValue = products.reduce(
    (sum, product) => sum + Number(product.price) * Number(product.stock),
    0
  );

  useEffect(() => {
    fetchProductList();
  }, []);

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