import React from "react";
import './ProductCard.css'

function ProductCard(props) {
    return (
        <div className="product-item">
            <img src={props.img_link} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{props.name}</h3>
                <p className="product-price">{props.price}</p>
                <a href="product" className="product-button">Mua ngay</a>
            </div>
        </div>
    )
}

export default ProductCard