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
    <div className="header">
      <div className="head-top">
        <div className="header-middle-left">
          <Button
            className="button_item img"
            imgSrc={logo}
            alt="Shop Logo"
            link="/"
          />
        </div>

        <div className="nav-buttons">
          <button className="nav-btn">
            <span className="icon">🛒</span> Bán hàng
          </button>
          <button className="nav-btn">Giao dịch</button>
          <button className="nav-btn">Sản phẩm</button>
          <button className="nav-btn">Kho hàng</button>
          <button className="nav-btn">Báo cáo</button>
        </div>

        <div className="right-section">
          <button className="icon-btn">⚙️</button>
          <button className="icon-btn">🔔</button>
          <div className="user-info">
            <span className="username">Quản trị viên</span>
            <div className="avatar">QT</div>
          </div>
        </div>
      </div>

      <div className="mangement-sidebar">
        <div className="mangement-sidebar-section">
          <h3>Sản phẩm</h3>
          <Button className="mangement-sidebar-item" link="/login/management/product_categories">
            <span className="icon">🏠︎</span> Danh sách sản phẩm
          </Button>
          <Button className="mangement-sidebar-item" link="/login/management/product_categories">
            <span className="icon">☰ </span> Danh mục sản phẩm
          </Button>
          <Button className="mangement-sidebar-item" link="/units">
            <span className="icon">⌨</span> Đơn vị tính
          </Button>
          <Button className="mangement-sidebar-item" link="/product-stats">
            <span className="icon">🗿</span> Thống kê sản phẩm
          </Button>
        </div>

        <div className="report-section">
          <h3>Báo cáo</h3>
          <div className="mangement-sidebar-section">
          <Button className="mangement-sidebar-item" link="/login/management/product_categories">
            <span className="icon"></span> Quý I 2025
          </Button>
          <Button className="mangement-sidebar-item" link="/login/management/product_categories">
            <span className="icon"></span> Quý II 2025
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;