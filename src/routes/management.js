import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../routes/Manager/management.css';
import logo from '../../public/img/logo_shop.png';

const Button = ({ className, imgSrc, alt, link, children }) => (
  <Link to={link} className={className} style={{ textDecoration: 'none' }}>
    {imgSrc && <img src={imgSrc} alt={alt} />}
    {children}
  </Link>
);

function Manage() {
  return (
    <div className="-management-header">
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
          <button className="management-icon-btn">⚙️</button>
          <button className="management-icon-btn">🔔</button>
          <div className="management-user-info">
            <span className="management-username">Quản trị viên</span>
            <div className="management-avatar">QT</div>
          </div>
        </div>
      </div>

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
          <Button className="management-sidebar-item" link="/login/management/product_categories">
            <span className="management-icon"></span> Quý I 2025
          </Button>
          <Button className="management-sidebar-item" link="/login/management/product_categories">
            <span className="management-icon"></span> Quý II 2025
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;