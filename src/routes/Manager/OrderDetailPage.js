import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailPage = () => {
  const { orderId } = useParams();  // Nhận tham số từ URL
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const response = await fetch(`http://localhost:3000/orders/${orderId}/items`);
        const data = await response.json();
        setOrderItems(data.items);
      } catch (error) {
        console.error('Lỗi lấy order items:', error);
      }
    };

    fetchOrderItems();
  }, [orderId]);

  return (
    <div>
      <h2>Chi tiết đơn hàng: {orderId}</h2>
      <table>
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map(item => (
            <tr key={item.ITEM_ID}>
              <td>{item.PRODUCT_ID}</td>
              <td>{item.AMOUNT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailPage;
