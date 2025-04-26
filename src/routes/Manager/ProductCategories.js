import React from 'react';
import './management.css';
import { Link } from 'react-router-dom';

const Button = ({ className, imgSrc, alt, link, children }) => (
    <Link to={link} className={className} style={{ textDecoration: 'none' }}>
      {imgSrc && <img src={imgSrc} alt={alt} />}
      {children}
    </Link>
  );

function ProductCategories() {
  return (
    <div className="header">
      <div className="head-top">
        <div className="header-middle-left">
          <a href="/" className="button_item img">
            <img src="/img/logo_shop.png" alt="Shop Logo" />
          </a>
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

      <div className="sidebar">
        <div className="sidebar-section">
          <h3>Sản phẩm</h3>
          <Button className="sidebar-item" link="/login/management/product_categories">
            <span className="icon">🏠︎</span> Danh sách sản phẩm
          </Button>
          <Button className="sidebar-item-choosing" link="/login/management/product_categories">
            <span className="icon">☰ </span> Danh mục sản phẩm
          </Button>
          <Button className="sidebar-item" link="/units">
            <span className="icon">⌨</span> Đơn vị tính
          </Button>
          <Button className="sidebar-item" link="/product-stats">
            <span className="icon">🗿</span> Thống kê sản phẩm
          </Button>
        </div>

        <div className="report-section">
          <h3>Báo cáo</h3>
        </div>
      </div>

      <div className="main-content">
        <h2>Danh mục sản phẩm</h2>
        <div className="filter-section">
          <input type="text" placeholder="Tìm kiếm danh mục..." className="search-input" />
          <button className="filter-btn">Lọc theo điều kiện</button>
        </div>
        <div className="action-buttons">
          <button className="add-btn">+ Thêm mới danh mục</button>
          <button className="export-btn">Thoát excel</button>
        </div>
        <div className="empty-state">
          <img src="/img/empty-state.png" alt="Empty State" className="empty-image" />
          <p>Hiện tại hệ thống chưa có danh mục nào. Bạn cần thêm danh mục mới để quản lý một cách hiệu quả!</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;