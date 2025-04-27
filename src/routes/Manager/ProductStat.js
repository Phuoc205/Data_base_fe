import React, { useState, useEffect } from 'react';
import Manager_Header from './Manager_Header.js';
import Manager_Sidebar from './Manager_Sidebar.js';
import empty from '../../../public/img/empty_state.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function ProductStat() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    topCategories: [],
    totalRevenue: 0,
    bestSellingProduct: null,
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchStats(filter);
  }, [filter]);

  const fetchStats = (timeRange) => {
    let mockData;
    switch (timeRange) {
      case 'month':
        mockData = {
          totalProducts: 120,
          lowStock: 5,
          topCategories: [
            { name: 'Lenovo', count: 4 },
            { name: 'ThinkPad', count: 3 },
          ],
          totalRevenue: 50000000,
          bestSellingProduct: { name: 'Mouse Logitech', quantity: 15 },
        };
        break;
      case 'quarter':
        mockData = {
          totalProducts: 350,
          lowStock: 12,
          topCategories: [
            { name: 'Monitor 2468', count: 12 },
            { name: 'Controler Nintendo Switch', count: 9 },
          ],
          totalRevenue: 150000000,
          bestSellingProduct: { name: 'Lót chuột Gaming', quantity: 40 },
        };
        break;
      case 'year':
        mockData = {
          totalProducts: 1200,
          lowStock: 50,
          topCategories: [
            { name: 'Tai nghe Rapoo', count: 40 },
            { name: 'Bàn phím cơ', count: 30 },
          ],
          totalRevenue: 600000000,
          bestSellingProduct: { name: 'Bàn phím cơ', quantity: 90 },
        };
        break;
      default:
        mockData = {
          totalProducts: 0,
          lowStock: 0,
          topCategories: [],
          totalRevenue: 0,
          bestSellingProduct: null,
        };
    }
    setStats(mockData);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value === 'Chọn khoảng thời gian') return;
    const map = {
      'Tháng này': 'month',
      'Quý này': 'quarter',
      'Năm nay': 'year',
    };
    setFilter(map[value]);
  };

  return (
    <div>
      <Manager_Header />
      <Manager_Sidebar />

      <div className="management-main-content">
        <h2>Thống kê sản phẩm</h2>
        <div className="management-filter-section">
          <select className="management-search-input" onChange={handleFilterChange}>
            <option>Chọn khoảng thời gian</option>
            <option>Tháng này</option>
            <option>Quý này</option>
            <option>Năm nay</option>
          </select>
          <button className="management-filter-btn" onClick={() => fetchStats(filter)}>Lọc theo điều kiện</button>
        </div>

        {stats.totalProducts > 0 ? (
          <div className="management-stats">
            <div className="management-stat-card">
              <h3>Tổng số sản phẩm</h3>
              <p>{stats.totalProducts}</p>
            </div>
            <div className="management-stat-card">
              <h3>Sản phẩm tồn kho thấp</h3>
              <p>{stats.lowStock}</p>
            </div>
            <div className="management-stat-card">
              <h3>Danh mục hàng đầu</h3>
              <ul>
                {stats.topCategories.map((category, index) => (
                  <li key={index}>
                    {category.name}: {category.count} sản phẩm
                  </li>
                ))}
              </ul>
            </div>
            <div className="management-stat-card">
              <h3>Tổng doanh thu</h3>
              <p>{stats.totalRevenue.toLocaleString()} VNĐ</p>
            </div>
            {stats.bestSellingProduct && (
              <div className="management-stat-card">
                <h3>Sản phẩm bán chạy nhất</h3>
                <p>{stats.bestSellingProduct.name} ({stats.bestSellingProduct.quantity} sản phẩm)</p>
              </div>
            )}

            {/* BIỂU ĐỒ BAR */}
            <div className="management-stat-card" style={{ height: 300 }}>
                <h3>Biểu đồ danh mục sản phẩm</h3>
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stats.topCategories.slice(0, 10)}> {/* GIỚI HẠN 10 SẢN PHẨM */}
                        <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer>
            </div>

          </div>
        ) : (
          <div className="management-empty-state">
            <img
              src={empty}
              alt="Empty State"
              className="management-empty-image"
            />
            <p>
              Hiện tại hệ thống chưa có dữ liệu thống kê. Vui lòng thêm sản phẩm để xem thống kê!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductStat;