import React, { useState, useEffect } from 'react';
import Manager_Header from './Manager_Header.js';
import Manager_Sidebar from './Manager_Sidebar.js';
import empty from '../../../public/img/empty_state.png';
import { useNavigate } from 'react-router-dom';
import OrderDetailsPopup from './OrderDetailsPage.js';

const OrdersPage = () => {
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

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
            <Manager_Header />
            <Manager_Sidebar />
            <div className="management-main-content">
                <h2>Danh sách đơn hàng</h2>
                {orders.length > 0 ? (
                <div className="table-wrapper">
                    <table className="product-table">
                    <thead>
                        <tr>
<<<<<<< HEAD
                          <th>Mã đơn</th>
                          <th>Khách hàng</th>
                          <th>Ngày đặt</th>
                          <th>Tổng tiền</th>
                          <th>Trạng thái</th>
=======
                        <th>Mã đơn</th>
                        <th>Khách hàng</th>
                        <th>Ngày đặt</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
>>>>>>> ea522faa9fa01653ce881ccd29d1582b2df73403
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
<<<<<<< HEAD
                          <tr key={order.ORDER_ID}>
                          <td>{order.ORDER_ID}</td>
                          <td>{order.CUSTOMER_ID}</td>
                          <td>{new Date(order.ORDER_DATE).toLocaleDateString()}</td>
                          <td>{order.TOTAL}</td>
                          <td>Đã giao hàng</td> {/* Trạng thái hiển thị luôn "Đã giao hàng" */}

                          </tr>
=======
                            <tr key={order.ORDER_ID} onClick={() => handleOrderClick(order)} style={{ cursor: 'pointer' }}>
                                <td>{order.ORDER_ID}</td>
                                <td>{order.CUSTOMER_ID}</td>
                                <td>{new Date(order.ORDER_DATE).toLocaleDateString()}</td>
                                <td>{order.TOTAL}</td>
                                <td>{order.ORDER_STATUS}</td>
                            </tr>
>>>>>>> ea522faa9fa01653ce881ccd29d1582b2df73403
                        ))}
                    </tbody>
                    </table>

                    {isPopupVisible && selectedOrder && (
                        <OrderDetailsPopup order={selectedOrder} onClose={closePopup} />
                    )}
                </div>
                ) : (
                <div className="management-empty-state">
                    <img src={empty} alt="Empty State" className="management-empty-image" />
                    <p>Hiện tại hệ thống chưa có sản phẩm nào. Bạn cần thêm sản phẩm mới để quản lý một cách hiệu quả!</p>
                </div>
                )}
            </div>
        </div>
    );
};

export default OrdersPage;