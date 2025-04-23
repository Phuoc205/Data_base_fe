import React, { useState , useEffect} from "react";
import './CartItem.css';

/*  Các tham số truyền vào
    provider: nhà cung cấp
    img_link: link ảnh
    info: thông tin
    price: giá
    amount: số lượng
*/


function CartItem(props) {

    const [amount, setAmount] = useState(props.amount)
    const [inputAmount, setInputAmount] = useState(props.amount)

    useEffect(() => {
        setAmount(props.amount);
        setInputAmount(props.amount);
    }, [props.amount]);

    const handleAmountChange = (newAmount) => {
        const finalAmount = Math.max(newAmount, 1);
        setAmount(finalAmount);
        setInputAmount(finalAmount);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if(!isNaN(value)) {
            setInputAmount(value);
            setAmount(value)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const finalAmount = parseInt(inputAmount, 10);
            if (!isNaN(finalAmount)) {
                setAmount(finalAmount);
                props.onAmountChange && props.onAmountChange(finalAmount);
            }
        }
    }

    return (
        <div className="cart-item">
            <div className="cart-item-header">
                <div className="tick-check"><input type="checkbox"/></div>
                <i className="fa-solid fa-store store-icon"></i>
                {props.provider}
            </div>
            <div className="cart-item-body">
                <div className="tick-check"><input type="checkbox" className="buy_check"/></div>
                <img src={props.img_link} className="cart-item-img"></img>

                <div className="cart-info-container">
                    <p className="cart-item-info">{props.info}</p>
                    {props.provider}
                </div>

                <div className="cart-price-container">
                    {(amount*props.price).toLocaleString()}
                    <div className="cart-price-icon-group">
                        <i className="fa-solid fa-heart cart-price-icon"></i>
                        <i className="fa-solid fa-trash cart-price-icon"></i>
                    </div>
                </div>
                
                <div className="cart-amount-container">
                    <div className="amount-icon" onClick={() => handleAmountChange(amount-1)}>
                        <i className="fa-solid fa-minus"></i>
                    </div>
                    <div className="amount-number">
                        <input 
                            className="input-amount"
                            value={inputAmount}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder={amount}
                        />
                    </div>
                    <div className="amount-icon" onClick={() => handleAmountChange(amount+1)}>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem