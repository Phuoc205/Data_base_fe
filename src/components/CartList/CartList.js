import CartItem from '/src/components/CartItem/CartItem.js';
import React, { useEffect, useState } from 'react';

// function CartList({ apiUrl }) {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => setProducts(data))
//             .catch(error => console.error('Lỗi khi lấy sản phẩm:', error));
//     }, [apiUrl]);

//     console.log("product: ",products);

//     return (
//         <div className="cart-list">
//             {products.map((product, index) => (
//                 <CartItem key={index} {...product} />
//             ))}
//         </div>
//     );
// }
function CartList({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <CartItem key={index} {...item} />
            ))}
        </>
    );
}
export default CartList;