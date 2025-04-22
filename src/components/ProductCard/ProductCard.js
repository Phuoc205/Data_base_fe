import React from "react";
import './ProductCard.css'

function ProductCard(props) {
    return (
        <div className="product-item">
            <img src={props.img_link} className="product-image" />
            <div className="product-info">
                <h3 class="product-name">{props.name}</h3>
                <p class="product-price">{props.price}</p>
                <a href="product" class="product-button">Mua ngay</a>
            </div>
        </div>
    )
}

export default ProductCard