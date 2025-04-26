import CartItem from '../CartItem/CartItem.js';
import React, { useEffect, useState } from 'react';

function CartList({ items, onCheck, onIncrease, onDecrease, onDelete }) {
    return (
        <div>
            {items.map((item, index) => (
                <CartItem
                    key={index}
                    {...item}
                    onCheck={() => onCheck(index)}
                    onIncrease={() => onIncrease(index)}
                    onDecrease={() => onDecrease(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    );
}

export default CartList;