import React, { useState, useEffect } from "react";
import Manager_Header from "./Manager_Header";
import Manager_Sidebar from "./Manager_Sidebar";
import empty from '../../../public/img/empty_state.png';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [importQuantity, setImportQuantity] = useState(1);
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState(0);
  const [editedStock, setEditedStock] = useState(0);

  const categoryMap = {
    0: 'Laptop', 1: 'Chuột', 2: 'Bàn phím', 3: 'Màn hình',
    4: 'Tai nghe', 5: 'Case', 6: 'Quạt laptop', 7: 'Tay cầm', 8: 'Bàn ghế'
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products-list');
      const data = await response.json();
      if (data.success) {
        setProducts(normalizeProducts(data.products));
      } else {
        alert('Không lấy được danh sách sản phẩm!');
      }
    } catch (error) {
      console.error('Lỗi fetch sản phẩm:', error);
      alert('Có lỗi khi tải danh sách sản phẩm!');
    }
  };

  const normalizeProducts = (items) =>
    items.map(item => ({
      id: item.PRODUCT_ID || item.product_id || '',
      name: item.PRODUCT_NAME || item.info || '',
      price: Number(item.PRICE || item.price || 0),
      stock: Number(item.IN_STOCK || item.instock || 0),
      category: categoryMap[item.CATEGORY_ID ?? item.category] || 'Khác',
    }));

  const handleOpenAdjust = (product) => {
    setSelectedProduct(product);
    setImportQuantity(1);
    setEditedName(product.name);
    setEditedPrice(product.price);
    setEditedStock(product.stock);
  };

  const handleConfirmImport = async () => {
    try {
      const response = await fetch('http://localhost:3000/import-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: selectedProduct.id, quantity: importQuantity }),
      });
      const data = await response.json();
      if (data.success) {
        setProducts(prev => prev.map(p =>
          p.id === selectedProduct.id ? { ...p, stock: p.stock + importQuantity } : p
        ));
        setSelectedProduct(null);
      } else {
        alert('Nhập hàng thất bại!');
      }
    } catch (error) {
      console.error('Lỗi nhập hàng:', error);
      alert('Có lỗi khi gửi yêu cầu nhập hàng!');
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
          price: editedPrice,
          stock: editedStock,
        }),
      });
      console.log(response);
      const data = await response.json();
      if (data.success) {
        setProducts(prev => prev.map(p =>
          p.id === selectedProduct.id
            ? { ...p, name: editedName, price: editedPrice, stock: editedStock }
            : p
        ));
        setSelectedProduct(null);
      } else {
        alert('Cập nhật thất bại!');
      }
    } catch (error) {
      console.error('Lỗi cập nhật:', error);
      alert('Có lỗi khi cập nhật sản phẩm!');
    }
  };

  const handleDeleteProduct = async () => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) return;
    try {
      const response = await fetch(`http://localhost:3000/delete-product/${selectedProduct.id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
        setSelectedProduct(null);
      } else {
        alert('Xóa sản phẩm thất bại!');
      }
    } catch (error) {
      console.error('Lỗi xóa sản phẩm:', error);
      alert('Có lỗi khi gửi yêu cầu xóa sản phẩm!');
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
          <div className="stat-card">
            <div className="stat-number">{products.length}</div>
            <div className="stat-label">Tổng sản phẩm</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{products.reduce((sum, p) => sum + p.stock, 0)}</div>
            <div className="stat-label">Tồn kho tổng cộng</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{products.filter(p => p.stock === 0).length}</div>
            <div className="stat-label">Sản phẩm hết hàng</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {products.reduce((sum, p) => sum + p.stock * p.price, 0).toLocaleString()} VNĐ
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
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price.toLocaleString()} VNĐ</td>
                    <td>{product.stock}</td>
                    <td>
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
            <p>Chưa có sản phẩm nào. Thêm sản phẩm mới để bắt đầu quản lý!</p>
          </div>
        )}
      </div>

      {/* Modal điều chỉnh */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Điều chỉnh sản phẩm</h3>

            <label>
              Tên sản phẩm:
              <input type="text" value={editedName} onChange={e => setEditedName(e.target.value)} />
            </label>

            <label>
              Giá sản phẩm:
              <input type="number" min="0" value={editedPrice} onChange={e => setEditedPrice(Number(e.target.value))} />
            </label>

            <label>
              Tồn kho:
              <input type="number" min="0" value={editedStock} onChange={e => setEditedStock(Number(e.target.value))} />
            </label>

            <label>
              Nhập thêm số lượng:
              <input type="number" min="1" value={importQuantity} onChange={e => setImportQuantity(Number(e.target.value))} />
            </label>

            <div className="modal-buttons">
              <button className="modal-confirm-btn" onClick={handleConfirmImport}>Nhập thêm sản phẩm</button>
              <button className="modal-confirm-btn" onClick={handleUpdateInfo}>Lưu chỉnh sửa</button>
              <button className="modal-delete-btn" onClick={handleDeleteProduct}>Xóa sản phẩm</button>
              <button className="modal-cancel-btn" onClick={() => setSelectedProduct(null)}>Huỷ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
