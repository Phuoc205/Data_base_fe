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
            product_id: item.PRODUCT_ID || item.product_id || '',
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

    const handleIncreaseAmount = (index) => {
        const item = cartItems[index];
        const newAmount = item.amount + 1;
        updateAmountOnServer(item, newAmount, index);
    };
    
    const handleDecreaseAmount = (index) => {
        const item = cartItems[index];
        if (item.amount > 1) {
            const newAmount = item.amount - 1;
            updateAmountOnServer(item, newAmount, index);
        }
    };
    
    const updateAmountOnServer = (item, newAmount, index) => {
        fetch('http://localhost:3000/cart/update-amount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer_id: localStorage.getItem('customer_id'),
                product_id: item.product_id,
                amount: newAmount
            })
        })
        .then(res => {
            if (res.ok) {
                setCartItems(prevItems => {
                    const updatedItems = [...prevItems];
                    updatedItems[index].amount = newAmount;
                    return updatedItems;
                });
            } else {
                console.error('Không update được');
            }
        })
        .catch(err => console.error('Lỗi khi update amount:', err));
    };

    const handleDelete = async (product_id) => {
        const customer_id = localStorage.getItem('customer_id');
        if (!customer_id) {
            alert('Bạn cần đăng nhập');
            return;
        }
    
        if (!window.confirm('Bạn chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3000/cart/delete', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ customer_id, product_id })
            });
    
            const data = await response.json();
            if (data.success) {
                alert('Xóa thành công!');
                // Cập nhật lại danh sách cart (có thể gọi lại API lấy cart mới hoặc xóa trên state)
                fetchCart(); // hoặc filter lại products
            } else {
                alert('Xóa thất bại!');
            }
        } catch (err) {
            console.error('Lỗi xóa sản phẩm:', err);
            alert('Có lỗi xảy ra, thử lại sau!');
        }
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

                    <CartList items={cartItems} onCheck={handleItemCheck} onIncrease={handleIncreaseAmount} onDecrease={handleDecreaseAmount} onDelete={handleDelete}/>
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