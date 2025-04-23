import React, { useEffect, useState } from 'react';
import Header from '../components/Header/header.js'
import './css/cart.css'
import CartList from '../components/CartList/CartList.js'

// function Cart () {

//     return (
//         <div className='Cart'>
//             <Header />
//             <main className='main-Cart'>
//                 <div className='list-cart'>
//                     <div className='select-all'>
//                         <div className="tick-check"><input type="checkbox" className="buy-check"/></div>
//                         <div>SELECT ALL</div>
//                     </div>

//                     <CartList apiUrl="http://localhost:3000/cart" />
//                 </div>

//                 <div className='total-price'>

//                 </div>
//             </main>
//         </div>
//     )
// }

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const customerID = localStorage.getItem('customer_id');
        if (!customerID) return;
        
        fetch('http://localhost:3000/cart?customer_id=${customerID}')
            .then(res => res.json())
            .then(data => {
                setCartItems(data.items);     // giả sử API trả về { items: [...], user: {...} }
                setUserInfo(data.user);
            })
            .catch(err => console.error('Lỗi khi fetch giỏ hàng:', err));
    }, []);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.amount * item.price;
    }, 0);

    return (
        <div className='Cart'>
            <Header />
            <main className='main-Cart'>
                <div className='list-cart'>
                    <div className='select-all'>
                        <div className="tick-check"><input type="checkbox" className="buy-check" /></div>
                        <div>SELECT ALL</div>
                    </div>

                    <CartList items={cartItems} />
                </div>

                <div className='total-price'>
                    <p><strong>Người nhận:</strong> {userInfo.name}</p>
                    <p><strong>Địa chỉ:</strong> {userInfo.address}</p>
                    <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()} VNĐ</p>
                </div>
            </main>
        </div>
    );
}

export default Cart