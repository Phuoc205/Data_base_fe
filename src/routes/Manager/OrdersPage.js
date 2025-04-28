import React, { useState, useEffect } from 'react';
import Manager_Header from './Manager_Header.js';
import Manager_Sidebar from './Manager_Sidebar.js';
import empty from '../../../public/img/empty_state.png';
import { useNavigate } from 'react-router-dom';
import OrderDetailsPopup from './OrderDetailsPage.js';

const OrdersPage = () => {
    const navigate = useNavigate();

    const handleOpenAdjust = (order) => {
        navigate(`/orders/${order.ORDER_ID}`); // Điều hướng tới trang chi tiết
    };
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);  // State to store the selected order
    const [isPopupVisible, setIsPopupVisible] = useState(false);  // State to show/hide the popup

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

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

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
                        <tr key={order.ORDER_ID} onClick={() => handleOrderClick(order)} style={{ cursor: 'pointer' }}>
                            <td>{order.ORDER_ID}</td>
                            <td>{order.CUSTOMER_ID}</td>
                            <td>{new Date(order.ORDER_DATE).toLocaleDateString()}</td>
                            <td>{order.TOTAL}</td>
                            <td>{order.ORDER_STATUS}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Show popup when isPopupVisible is true */}
            {isPopupVisible && selectedOrder && (
                <OrderDetailsPopup order={selectedOrder} onClose={closePopup} />
            )}
        </div>
    );
};

export default OrdersPage;