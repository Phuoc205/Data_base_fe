import React, { useState } from 'react';
import Manager_Header from './Manager_Header.js';
import Manager_Sidebar from './Manager_Sidebar.js';
import empty from '../../../public/img/empty_state.png';

function ProductCategories() {
  const [categories, setCategories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCategory, setNewCategory] = useState({ id: '', name: '' });

  const [editingCategory, setEditingCategory] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Thêm danh mục mới
  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleSaveNewCategory = () => {
    if (newCategory.id.trim() !== '' && newCategory.name.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory({ id: '', name: '' });
      setShowAddForm(false);
      showToast('Thêm danh mục thành công!');
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  };

  // Xóa danh mục
  const handleDeleteCategory = (id) => {
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories(updatedCategories);
    showToast('Xóa danh mục thành công!');
  };

  // Sửa danh mục
  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setEditedName(category.name);
  };

  const handleSaveEditedCategory = () => {
    if (editedName.trim() !== '') {
      const updatedCategories = categories.map((category) =>
        category.id === editingCategory.id ? { ...category, name: editedName } : category
      );
      setCategories(updatedCategories);
      setEditingCategory(null);
      setEditedName('');
      showToast('Cập nhật danh mục thành công!');
    } else {
      alert('Tên danh mục không được để trống!');
    }
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setEditedName('');
  };

  // Lọc tìm kiếm
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <div>
      <Manager_Header />
      <Manager_Sidebar />
      <div className="management-main-content">
        <h2>Danh mục sản phẩm</h2>

        {/* Toast Message */}
        {toastMessage && (
          <div className="toast-message">
            {toastMessage}
          </div>
        )}

        {/* Bộ lọc tìm kiếm */}
        <div className="management-filter-section">
          <input
            type="text"
            placeholder="Tìm kiếm danh mục..."
            className="management-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="management-filter-btn">Lọc theo điều kiện</button>
        </div>

        {/* Các nút hành động */}
        <div className="management-action-buttons">
          <button className="management-add-btn" onClick={handleAddNewClick}>+ Thêm mới danh mục</button>
          <button className="management-export-btn">Thoát excel</button>
        </div>

        {/* Form thêm danh mục */}
        {showAddForm && (
          <div className="management-add-form">
            <input
              type="text"
              placeholder="Nhập ID danh mục"
              value={newCategory.id}
              onChange={(e) => setNewCategory({ ...newCategory, id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nhập tên danh mục"
              value={newCategory.name}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            />
            <button onClick={handleSaveNewCategory}>Lưu</button>
          </div>
        )}

        {/* Bảng danh mục */}
        {filteredCategories.length > 0 ? (
          <table className="management-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên danh mục</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>
                    {editingCategory && editingCategory.id === category.id ? (
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    ) : (
                      category.name
                    )}
                  </td>
                  <td>
                    {editingCategory && editingCategory.id === category.id ? (
                      <>
                        <button className="management-action-btn" onClick={handleSaveEditedCategory}>Lưu</button>
                        <button className="management-action-btn" onClick={handleCancelEdit}>Hủy</button>
                      </>
                    ) : (
                      <>
                        <button className="management-action-btn" onClick={() => handleEditCategory(category)}>Sửa</button>
                        <button className="management-action-btn" onClick={() => handleDeleteCategory(category.id)}>Xóa</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="management-empty-state">
              <img
                src="/img/empty_state.png"
                alt="Empty State"
                 className="management-empty-image"
              />
            <p>Hiện tại hệ thống chưa có danh mục nào. Bạn cần thêm danh mục mới để quản lý một cách hiệu quả!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCategories;