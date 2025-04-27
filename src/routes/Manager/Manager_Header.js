import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './management.css'
import logo from '../../../public/img/logo_shop.png'

const Button = ({ className, imgSrc, alt, link, children }) => (
  <Link to={link} className={className} style={{ textDecoration: 'none' }}>
    {imgSrc && <img src={imgSrc} alt={alt} />}
    {children}
  </Link>
);

function Manager_Header() {
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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  const handleUsernameChange = () => {
    if (newUsername.trim()) {
      setUsername(newUsername);
      setShowSettingsModal(false);
    }
  };

  const addNotification = () => {
    if (newNotification.trim()) {
      setNotifications([...notifications, newNotification]);
      setNewNotification('');
      setShowNotificationsModal(false);
    }
  };

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
          <button
            className="management-icon-btn"
            onClick={() => setShowSettingsModal(true)}
            title="Cài đặt"
          >
            ⚙️
          </button>

          <button
            className={`management-icon-btn ${notifications.length > 0 ? 'has-notifications' : ''}`}
            onClick={() => setShowNotificationsModal(true)}
            title="Thông báo"
          >
            🔔 {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}
          </button>

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
      </div>
  )
}
export default Manager_Header