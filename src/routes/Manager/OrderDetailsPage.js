import React, { useState, useEffect } from 'react';
import '../css/order.css';

const OrderDetailsPopup = ({ order, onClose }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const response = await fetch(`http://localhost:3000/orders/${order.ORDER_ID}/items`);
        const data = await response.json();
        setOrderItems(data.items);
        setIsLoading(false);
      } catch (error) {
        console.error('Lỗi lấy order items:', error);
        setIsLoading(false);
      }
    };

    fetchOrderItems();
  }, [order.ORDER_ID]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Chi tiết đơn hàng</h3>
        <p><strong>Mã đơn:</strong> {order.ORDER_ID}</p>
        <p><strong>Khách hàng:</strong> {order.CUSTOMER_ID}</p>
        <p><strong>Ngày đặt:</strong> {new Date(order.ORDER_DATE).toLocaleDateString()}</p>
        <p><strong>Tổng tiền:</strong> {order.TOTAL}</p>
        <p><strong>Trạng thái:</strong> {order.ORDER_STATUS}</p>

        <h4>Danh sách sản phẩm</h4>
        {isLoading ? (
          <p>Đang tải...</p>
        ) : orderItems.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map(item => (
                <tr key={item.ITEM_ID}>
                  <td>{item.PRODUCT_ID}</td>
                  <td>{item.AMOUNT}</td>
                  <td>{item.PRICE}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Không có sản phẩm cho đơn hàng này.</p>
        )}

        <button onClick={onClose} className="popup-close-btn">Đóng</button>
      </div>
    </div>
  );
};

export default OrderDetailsPopup;
