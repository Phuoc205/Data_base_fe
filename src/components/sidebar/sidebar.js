import React from "react";
import './sidebar.css'

function Sidebar(props) {
    return (
        <section className="product-item">
            <h2>Danh Mục Sản Phẩm</h2>
            <div className="category-list">
                <a href="#" class="category-item">Laptop</a>
                <a href="#" class="category-item">Case PC</a>
                <a href="#" class="category-item">Màn hình</a>
                <a href="#" class="category-item">Tai nghe</a>
                <a href="#" class="category-item">Tản nhiệt</a>
                <a href="#" class="category-item">Chuột</a>
                <a href="#" class="category-item">Bàn phím</a>
                <a href="#" class="category-item">Bàn ghế</a>
                <a href="#" class="category-item">Console</a>
            </div>
        </section>
    )
}

export default Sidebar