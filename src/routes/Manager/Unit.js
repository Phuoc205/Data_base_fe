import React, { useState } from 'react';
import Manager_Header from './Manager_Header.js';
import Manager_Sidebar from './Manager_Sidebar.js';
import empty from '../../../public/img/empty_state.png';

function Unit() {
  const [units, setUnits] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUnit, setNewUnit] = useState({ id: '', name: '' });

  const [editingUnit, setEditingUnit] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Thêm đơn vị
  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleSaveNewUnit = () => {
    if (newUnit.id.trim() !== '' && newUnit.name.trim() !== '') {
      setUnits([...units, newUnit]);
      setNewUnit({ id: '', name: '' });
      setShowAddForm(false);
      showToast('Thêm đơn vị thành công!');
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  };

  // Xóa đơn vị
  const handleDeleteUnit = (id) => {
    const updatedUnits = units.filter((unit) => unit.id !== id);
    setUnits(updatedUnits);
    showToast('Xóa đơn vị thành công!');
  };

  // Sửa đơn vị
  const handleEditUnit = (unit) => {
    setEditingUnit(unit);
    setEditedName(unit.name);
  };

  const handleSaveEditedUnit = () => {
    if (editedName.trim() !== '') {
      const updatedUnits = units.map((unit) =>
        unit.id === editingUnit.id ? { ...unit, name: editedName } : unit
      );
      setUnits(updatedUnits);
      setEditingUnit(null);
      setEditedName('');
      showToast('Cập nhật đơn vị thành công!');
    } else {
      alert('Tên đơn vị không được để trống!');
    }
  };

  // Hủy sửa
  const handleCancelEdit = () => {
    setEditingUnit(null);
    setEditedName('');
  };

  // Tìm kiếm đơn vị
  const filteredUnits = units.filter((unit) =>
    unit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toast message
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000); // 3 giây tự tắt
  };

  return (
    <div>
      <Manager_Header />
      <Manager_Sidebar />
      <div className="management-main-content">
        <h2>Đơn vị tính</h2>

        {/* Thông báo Toast */}
        {toastMessage && (
          <div className="toast-message">
            {toastMessage}
          </div>
        )}

        {/* Thanh tìm kiếm và filter */}
        <div className="management-filter-section">
          <input
            type="text"
            placeholder="Tìm kiếm đơn vị tính..."
            className="management-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="management-filter-btn">Lọc theo điều kiện</button>
        </div>

        {/* Nút thêm mới và xuất Excel */}
        <div className="management-action-buttons">
          <button className="management-add-btn" onClick={handleAddNewClick}>+ Thêm mới đơn vị</button>
          <button className="management-export-btn">Xuất Excel</button>
        </div>

        {/* Form thêm đơn vị */}
        {showAddForm && (
          <div className="management-add-form">
            <input
              type="text"
              placeholder="Nhập ID đơn vị"
              value={newUnit.id}
              onChange={(e) => setNewUnit({ ...newUnit, id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nhập tên đơn vị"
              value={newUnit.name}
              onChange={(e) => setNewUnit({ ...newUnit, name: e.target.value })}
            />
            <button onClick={handleSaveNewUnit}>Lưu</button>
          </div>
        )}

        {/* Bảng đơn vị */}
        {filteredUnits.length > 0 ? (
          <table className="management-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên đơn vị</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredUnits.map((unit) => (
                <tr key={unit.id}>
                  <td>{unit.id}</td>
                  <td>
                    {editingUnit && editingUnit.id === unit.id ? (
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    ) : (
                      unit.name
                    )}
                  </td>
                  <td>
                    {editingUnit && editingUnit.id === unit.id ? (
                      <>
                        <button className="management-action-btn" onClick={handleSaveEditedUnit}>Lưu</button>
                        <button className="management-action-btn" onClick={handleCancelEdit}>Hủy</button>
                      </>
                    ) : (
                      <>
                        <button className="management-action-btn" onClick={() => handleEditUnit(unit)}>Sửa</button>
                        <button className="management-action-btn" onClick={() => handleDeleteUnit(unit.id)}>Xóa</button>
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
              src={empty}
              alt="Empty State"
              className="management-empty-image"
            />
            <p>
              Hiện tại hệ thống chưa có đơn vị tính nào. Bạn cần thêm đơn vị tính mới để quản lý một cách hiệu quả!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Unit;