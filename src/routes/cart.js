import React, { useEffect, useState } from 'react';
import Header from '../components/Header/header.js'
import './css/cart.css'
import CartList from '../components/CartList/CartList.js'

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [selectAll, setSelectAll] = useState(false);

    function normalizeCartItems(items) {
        return items.map(item => ({
            info: item.PRODUCT_NAME || item.info || '',
            img_link: item.IMAGE_LINK || item.img_link || '',
            price: Number(item.PRICE || item.price || 0),
            amount: item.AMOUNT || item.amount || 1,
            manufacture: item.MANUFACTURE || item.manufacture || '',
            checked: false,
        }));
    }

    useEffect(() => {
        const customerID = localStorage.getItem('customer_id');
        if (!customerID) return;

        fetch(`http://localhost:3000/cart?customer_id=${customerID}`)
            .then(res => res.json())
            .then(data => {
                const normalized = normalizeCartItems(data.items);
                setCartItems(normalized);
                setUserInfo(data.user);
                console.log("Thông tin người dùng:", data.items);
            })
            .catch(err => console.error('Lỗi khi fetch giỏ hàng:', err));
    }, []);

    const handleItemCheck = (index) => {
        const newItems = [...cartItems];
        newItems[index].checked = !newItems[index].checked;
        setCartItems(newItems);

        const allChecked = newItems.every(item => item.checked);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newChecked = !selectAll;
        const updatedItems = cartItems.map(item => ({
            ...item,
            checked: newChecked
        }));
        setCartItems(updatedItems);
        setSelectAll(newChecked);
    };

    const totalPrice = cartItems.reduce((total, item) => {
        return item.checked ? total + item.amount * item.price : total;
    }, 0);

    return (
        <div className='Cart'>
            <Header />
            <main className='main-Cart'>
                <div className='list-cart'>
                    <div className='select-all'>
                        <div className="tick-check">
                            <input
                                type="checkbox"
                                className="buy-check"
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                        </div>
                        <div>SELECT ALL</div>
                    </div>

                    <CartList items={cartItems} onCheck={handleItemCheck} />
                </div>

                <div className='total-price'>
                    <p><strong>Người nhận:</strong> {userInfo.NAME}</p>
                    <p><strong>Địa chỉ:</strong> {userInfo.ADDRESS}</p>
                    <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()} VNĐ</p>
                </div>
            </main>
        </div>
    );
}


export default Cart