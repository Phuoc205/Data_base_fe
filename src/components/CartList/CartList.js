import CartItem from '/src/components/CartItem/CartItem.js';
import React, { useEffect, useState } from 'react';

function CartList({ items, onCheck }) {
    return (
        <div>
            {items.map((item, index) => (
                <CartItem
                    key={index}
                    {...item}
                    onCheck={() => onCheck(index)}
                />
            ))}
        </div>
    );
}

export default CartList;