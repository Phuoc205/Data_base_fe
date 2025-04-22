import React from 'react'
import Header from '../components/Header/header.js'
import CartItem from '../components/CartItem/CartItem.js'

function Cart () {
    return (
        <div className='Cart'>
            <Header />
            <CartItem
                provider= "GearVN"
                img_link= "/public/img/products/laptop/laptop.webp"
                info= "thuc an cho laptop"
                price= "150.000"
                amount= "150"
            />
        </div>
    )
}

export default Cart