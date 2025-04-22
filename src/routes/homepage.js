import React from 'react'
import Header from '../components/Header/header.js'
import ProductCart from '../components/ProductCard/ProductCard.js'
import Sidebar from '../components/sidebar/sidebar.js'

// Tạo component App
function Homepage () {
    return (
        <div className='App'>
            <Header />
            <Sidebar/>
            <ProductCart
                img_link="/public/products/laptop/laptop.webp"
                name="Laptop"
                price="17,000,000 VND"
            />
        </div>
    )
}

export default Homepage