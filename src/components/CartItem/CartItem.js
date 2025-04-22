import React, { useState } from "react";
import './CartItem.css';

/*  Các tham số truyền vào
    provider: nhà cung cấp
    img_link: link ảnh
    info: thông tin
    price: giá
    amount: số lượng
*/


function CartItem(props) {

    const [amount, setAmount] = useState('')

    return (
        <div className="cart-item">
            <div className="cart-item-header">
                <div className="tick-check"><input type="checkbox"/></div>
                <i className="fa-solid fa-store store-icon"></i>
                {props.provider}
            </div>
            <div className="cart-item-body">
                <div className="tick-check"><input type="checkbox"/></div>
                <img src={props.img_link} className="cart-item-img"></img>

                <div className="cart-info-container">
                    <p className="cart-item-info">{props.info}</p>
                    {props.provider}
                </div>

                <div className="cart-price-container">
                    {props.price}
                    <div className="cart-price-icon-group">
                        <i className="fa-solid fa-heart cart-price-icon"></i>
                        <i className="fa-solid fa-trash cart-price-icon"></i>
                    </div>
                </div>
                
                <div className="cart-amount-container">
                    <div className="amount-icon">
                        <i className="fa-solid fa-minus"></i>
                    </div>
                    <div className="amount-number">
                        {props.amount}
                    </div>
                    <div className="amount-icon">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem