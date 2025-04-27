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
    <div className="management-header">
      <div className="management-head-top">
        <div className="management-header-middle-left">
          <a href="/" className="management-button_item img">
            <img src="/img/logo_shop.png" alt="Shop Logo" />
          </a>
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
          <Button className="management-sidebar-item-choosing" link="/login/management/product_categories">
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

      <div className="management-main-content">
        <h2>Danh mục sản phẩm</h2>
        <div className="management-filter-section">
          <input type="text" placeholder="Tìm kiếm danh mục..." className="search-input" />
          <button className="management-filter-btn">Lọc theo điều kiện</button>
        </div>
        <div className="management-action-buttons">
          <button className="management-add-btn">+ Thêm mới danh mục</button>
          <button className="management-export-btn">Thoát excel</button>
        </div>
        <div className="management-empty-state">
          <img src="/img/empty-state.png" alt="Empty State" className="empty-image" />
          <p>Hiện tại hệ thống chưa có danh mục nào. Bạn cần thêm danh mục mới để quản lý một cách hiệu quả!</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;