import React, { useState, useEffect } from 'react';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:3000/orders');
            const data = await response.json();
            setOrders(data.orders);
        } catch (error) {
            console.error('Lỗi lấy orders:', error);
        }
        };

        fetchOrders();
    }, []);

    return (
        <div>
        <h2>Danh sách đơn hàng</h2>
        <table>
            <thead>
            <tr>
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>Ngày đặt</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
            </tr>
            </thead>
            <tbody>
            {orders.map(order => (
                <tr key={order.ORDER_ID}>
                <td>{order.ORDER_ID}</td>
                <td>{order.CUSTOMER_ID}</td>
                <td>{new Date(order.ORDER_DATE).toLocaleDateString()}</td>
                <td>{order.TOTAL}</td>
                <td>{order.ORDER_STATUS}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default OrdersPage;
