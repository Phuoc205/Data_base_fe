import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './management.css'

const Button = ({ className, imgSrc, alt, link, children }) => (
  <Link to={link} className={className} style={{ textDecoration: 'none' }}>
    {imgSrc && <img src={imgSrc} alt={alt} />}
    {children}
  </Link>
);

function Manager_Sidebar () {
    return (
    <div className="management-sidebar">
        <div className="management-sidebar-section">
          <h3>Sản phẩm</h3>
          <Button className="management-sidebar-item" link="/login/management/product_list">
            <span className="management-icon">🏠︎</span> Danh sách sản phẩm
          </Button>
          <Button className="management-sidebar-item" link="/login/management/product_categories">
            <span className="management-icon">☰ </span> Danh mục sản phẩm
          </Button>
          <Button className="management-sidebar-item" link="/login/management/units">
            <span className="management-icon">⌨</span> Đơn vị tính
          </Button>
          <Button className="management-sidebar-item" link="/login/management/product_stat">
            <span className="management-icon">🗿</span> Thống kê
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
    )
}
export default Manager_Sidebar
