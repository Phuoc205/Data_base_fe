import React, { useState, useEffect } from 'react';
import Manager_Header from './Manager_Header.js';
import Manager_Sidebar from './Manager_Sidebar.js';
import empty from '../../../public/img/empty_state.png';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [importQuantity, setImportQuantity] = useState(1);
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState('');

  const categoryMap = {
    0: 'Laptop', 1: 'Chuột', 2: 'Bàn phím', 3: 'Màn hình',
    4: 'Tai nghe', 5: 'Case', 6: 'Quạt laptop', 7: 'Tay cầm', 8: 'Bàn ghế'
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const response = await fetch('http://localhost:3000/products-list');
      const data = await response.json();
      if (data.success) {
        setProducts(normalizeProductsManagement(data.products));
      } else {
        alert('Không lấy được danh sách sản phẩm!');
      }
    } catch (err) {
      console.error('Lỗi lấy sản phẩm:', err);
      alert('Có lỗi xảy ra khi tải sản phẩm!');
    }
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

  const handleOpenAdjust = (product) => {
    setSelectedProduct(product);
    setImportQuantity(1);
    setEditedName(product.name);
    setEditedPrice(product.price);
  };

  const handleConfirmImport = async () => {
    try {
      const response = await fetch('http://localhost:3000/import-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: selectedProduct.id, quantity: importQuantity })
      });
      const data = await response.json();
      if (data.success) {
        setProducts(prev =>
          prev.map(product =>
            product.id === selectedProduct.id
              ? { ...product, stock: Number(product.stock) + importQuantity }
              : product
          )
        );
        setSelectedProduct(null);
      } else {
        alert('Cập nhật thất bại!');
      }
    } catch (err) {
      console.error('Lỗi khi nhập hàng:', err);
      alert('Đã có lỗi xảy ra khi gửi yêu cầu nhập hàng!');
    }
  };

  const handleUpdateInfo = async () => {
    try {
      const response = await fetch('http://localhost:3000/update-product', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: selectedProduct.id,
          name: editedName,
          price: editedPrice
        })
      });
      const data = await response.json();
      if (data.success) {
        setProducts(prev =>
          prev.map(product =>
            product.id === selectedProduct.id
              ? { ...product, name: editedName, price: editedPrice }
              : product
          )
        );
        setSelectedProduct(null);
      } else {
        alert('Cập nhật thông tin thất bại!');
      }
    } catch (err) {
      console.error('Lỗi khi cập nhật sản phẩm:', err);
      alert('Đã có lỗi xảy ra khi gửi yêu cầu cập nhật!');
    }
  };

  const handleDeleteProduct = async () => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) return;
    try {
      const response = await fetch(`http://localhost:3000/delete-product/${selectedProduct.id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (data.success) {
        setProducts(prev => prev.filter(product => product.id !== selectedProduct.id));
        setSelectedProduct(null);
      } else {
        alert('Xóa sản phẩm thất bại!');
      }
    } catch (err) {
      console.error('Lỗi khi xóa sản phẩm:', err);
      alert('Đã có lỗi xảy ra khi gửi yêu cầu xóa!');
    }
  };

  return (
    <div>
      <Manager_Header />
      <Manager_Sidebar />
      <div className="management-main-content">
        <h2>Danh sách sản phẩm</h2>

        {/* Thống kê */}
        <div className="statistics-container">
          {/* Thống kê chi tiết */}
          <div className="stat-card">
            <div className="stat-number">{products.length}</div>
            <div className="stat-label">Tổng sản phẩm</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{products.reduce((sum, p) => sum + Number(p.stock), 0)}</div>
            <div className="stat-label">Tồn kho tổng cộng</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{products.filter(p => Number(p.stock) === 0).length}</div>
            <div className="stat-label">Sản phẩm hết hàng</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {products.reduce((sum, p) => sum + Number(p.price) * Number(p.stock), 0).toLocaleString()} VNĐ
            </div>
            <div className="stat-label">Giá trị tồn kho</div>
          </div>
        </div>

        {/* Bảng sản phẩm */}
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
                  <th>Điều chỉnh</th>
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
                    <td style={{ textAlign: "left" }}>
                      <button className="management-action-btn" onClick={() => handleOpenAdjust(product)}>
                        Điều chỉnh
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="management-empty-state">
            <img src={empty} alt="Empty State" className="management-empty-image" />
            <p>Hiện tại hệ thống chưa có sản phẩm nào. Bạn cần thêm sản phẩm mới để quản lý một cách hiệu quả!</p>
          </div>
        )}
      </div>

      {/* Popup modal */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Điều chỉnh sản phẩm</h3>
            <label>
              Tên sản phẩm:
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </label>
            <label>
              Giá sản phẩm:
              <input
                type="number"
                min="0"
                value={editedPrice}
                onChange={(e) => setEditedPrice(Number(e.target.value))}
              />
            </label>
            <label>
              Thêm số lượng:
              <input
                type="number"
                min="1"
                value={importQuantity}
                onChange={(e) => setImportQuantity(Number(e.target.value))}
              />
            </label>

            <div className="modal-buttons">
              <button className="modal-confirm-btn" onClick={handleConfirmImport}>
                Thêm sản phẩm
              </button>
              <button className="modal-confirm-btn" onClick={handleUpdateInfo}>
                Thay đổi thông tin
              </button>
              <button className="modal-delete-btn" onClick={handleDeleteProduct}>
                Xóa sản phẩm
              </button>
              <button className="modal-cancel-btn" onClick={() => setSelectedProduct(null)}>
                Huỷ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;