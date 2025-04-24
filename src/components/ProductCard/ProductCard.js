import React from "react";
import './ProductCard.css'

function ProductCard(props) {

    const handleBuy = async () => {
        const customer_id = localStorage.getItem('customer_id');
        const product_id = props.id; // truyền id từ props
        const amount = 1;

        if (!customer_id) {
            alert('Bạn cần đăng nhập để mua sản phẩm');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/add-to-cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ customer_id, product_id, amount })
            });

            const data = await response.json();
            
            if (data.success) {
                alert('Đã thêm vào giỏ hàng!');
            } else {
                alert('Thêm thất bại!');
            }
        } catch (err) {
            console.error('Lỗi thêm vào giỏ:', err);
            alert('Có lỗi xảy ra, thử lại sau!');
        }
    }

    return (
        <div className="product-item">
            <img src={props.img_link} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{props.name}</h3>
                <p className="product-price">{props.price}</p>
                <div className="product-button" onClick={handleBuy}>
                    Mua ngay
                </div>
                {/* <a href="product" className="product-button">Mua ngay</a> */}
            </div>
        </div>
    )
}

export default ProductCard