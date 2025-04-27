import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../routes/Manager/management.css';
import logo from '../../public/img/logo_shop.png';

const Button = ({ className, imgSrc, alt, link, children }) => (
  <Link to={link} className={className} style={{ textDecoration: 'none' }}>
    {imgSrc && <img src={imgSrc} alt={alt} />}
    {children}
  </Link>
);

function Manage() {
  // State for theme, username, notifications, avatar, and modals
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState('Quản trị viên');
  const [notifications, setNotifications] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [newNotification, setNewNotification] = useState('');
  const [newUsername, setNewUsername] = useState(username);
  const [newAvatarUrl, setNewAvatarUrl] = useState('');

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Apply theme to body
  };

  // Handle username change
  const handleUsernameChange = () => {
    if (newUsername.trim()) {
      setUsername(newUsername);
      setShowSettingsModal(false);
    }
  };

  // Add new notification
  const addNotification = () => {
    if (newNotification.trim()) {
      setNotifications([...notifications, newNotification]);
      setNewNotification('');
      setShowNotificationsModal(false);
    }
  };

  // Change avatar
  const handleAvatarChange = () => {
    if (newAvatarUrl.trim()) {
      setAvatarUrl(newAvatarUrl);
      setShowAvatarModal(false);
    }
  };

  return (
    <div className={`management-header ${theme}`}>
      <div className="management-head-top">
        <div className="management-header-middle-left">
          <Button
            className="management-button_item img"
            imgSrc={logo}
            alt="Shop Logo"
            link="/"
          />
        </div>

        <div className="management-nav-buttons">
          <button className="management-nav-btn">
            <span className="management-icon">🛒</span> Bán hàng
          </button>
          <button className="management-nav-btn">Giao dịch</button>
          <button className="management-nav-btn">Sản phẩm</button>
          <button className="management-nav-btn">Kho hàng</button>
          <button className="management-nav-btn">Báo cáo</button>
        </div>

        <div className="management-right-section">
          {/* Settings Button */}
          <button
            className="management-icon-btn"
            onClick={() => setShowSettingsModal(true)}
            title="Cài đặt"
          >
            ⚙️
          </button>

          {/* Notifications Button */}
          <button
            className="management-icon-btn"
            onClick={() => setShowNotificationsModal(true)}
            title="Thông báo"
          >
            🔔 {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}
          </button>

          {/* User Info */}
          <div className="management-user-info">
            <span className="management-username">{username}</span>
            <div
              className="management-avatar"
              onClick={() => setShowAvatarModal(true)}
              style={{ cursor: 'pointer' }}
            >
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="avatar-img" />
              ) : (
                'QT'
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Cài đặt</h3>
            <div className="modal-section">
              <label>Chủ đề:</label>
              <button onClick={toggleTheme} className="theme-toggle-btn">
                Chuyển sang {theme === 'light' ? 'Tối' : 'Sáng'}
              </button>
            </div>
            <div className="modal-section">
              <label>Đổi tên:</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Nhập tên mới"
              />
              <button onClick={handleUsernameChange} className="modal-btn">
                Lưu
              </button>
            </div>
            <button onClick={() => setShowSettingsModal(false)} className="modal-close-btn">
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Notifications Modal */}
      {showNotificationsModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Thông báo</h3>
            <div className="modal-section">
              <input
                type="text"
                value={newNotification}
                onChange={(e) => setNewNotification(e.target.value)}
                placeholder="Nhập thông báo mới"
              />
              <button onClick={addNotification} className="modal-btn">
                Thêm
              </button>
            </div>
            <div className="notification-list">
              {notifications.length > 0 ? (
                notifications.map((notif, index) => (
                  <div key={index} className="notification-item">
                    {notif}
                  </div>
                ))
              ) : (
                <p>Không có thông báo</p>
              )}
            </div>
            <button onClick={() => setShowNotificationsModal(false)} className="modal-close-btn">
              Đóng
            </button>
          </div>
        </div>
      )}

{/* Avatar Modal */}
{showAvatarModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Đổi Avatar</h3>
            <div className="modal-section">
              <input
                type="text"
                value={newAvatarUrl}
                onChange={(e) => setNewAvatarUrl(e.target.value)}
                placeholder="Nhập URL hình ảnh"
              />
              <button onClick={handleAvatarChange} className="modal-btn">
                Lưu
              </button>
            </div>
            <button onClick={() => setShowAvatarModal(false)} className="modal-close-btn">
              Đóng
            </button>
          </div>
        </div>
      )}

      <div className="management-sidebar">
        <div className="management-sidebar-section">
          <h3>Sản phẩm</h3>
          <Button className="management-sidebar-item" link="/login/management/product_categories">
            <span className="management-icon">🏠︎</span> Danh sách sản phẩm
          </Button>
          <Button className="management-sidebar-item" link="/login/management/product_categories">
            <span className="management-icon">☰ </span> Danh mục sản phẩm
          </Button>
          <Button className="management-sidebar-item" link="/units">
            <span className="management-icon">⌨</span> Đơn vị tính
          </Button>
          <Button className="management-sidebar-item" link="/product-stats">
            <span className="management-icon">🗿</span> Thống kê sản phẩm
          </Button>
        </div>

        <div className="management-report-section">
          <h3>Báo cáo</h3>
          <div className="management-sidebar-section">
            <Button className="management-sidebar-item" link="https://vneconomy.vn/cap-nhat-loi-nhuan-quy-1-2025-161-doanh-nghiep-cong-bo-tang-21-6-ngan-hang-va-chung-khoan-dan-dau.htm">
              <span className="management-icon"></span> Quý I 2025
            </Button>
            <Button className="management-sidebar-item" link="https://finance.vietstock.vn/ket-qua-kinh-doanh">
              <span className="management-icon"></span> Quý II 2025
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;