// Content.jsx
import React, { useEffect } from 'react';
import './content.css';
import Sidebar from '../sidebar/sidebar';
import ProductCard from '../ProductCard/ProductCard';
function Content() {
    return (
        <main className='main'>
            <div className="main_header_container">
                <div className="main_header_items">
                    <Sidebar/>
                </div>
                <div className="main_header_items banner_main">
                    <img src="/img/banner/banner_back_to_school.jpg" alt="" className="banner_main_img" />
                </div>
            </div>

            <section>
                <div className="banner">
                    <img src="/img/banner/banner-ss1.jpg" alt="Banner linh kiện điện tử" className="banner-image" />
                </div>
            </section>

            <section>
                <h2>Đang Bán Chạy</h2>
                <div className="product-list">
                    <div className="product-item">
                        <img src="/img/products/view_vx2757a-hd-pro_gearvn_bfba98a54c7b4319af2eb23cf4fbf7d4_grande.webp" alt="Màn hình ViewSonic" className="product-image" />
                        <div className="product-info">
                            <h3 className="product-name">Màn hình ViewSonic VX2757A-HD-PRO 27" IPS 180Hz</h3>
                            <p className="product-price">4.990.000 VNĐ</p>
                            <a href="#" className="product-button">Mua ngay</a>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/img/products/ban_phim.webp" alt="Bàn phím ROG" className="product-image" />
                        <div className="product-info">
                            <h3 className="product-name">Bàn phím ROG Strix Scope RX TKL Wireless Deluxe</h3>
                            <p className="product-price">3.790.000 VNĐ</p>
                            <a href="#" className="product-button">Mua ngay</a>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/img/products/tai_nghe_rapoo.webp" alt="Tai nghe Rapoo" className="product-image" />
                        <div className="product-info">
                            <h3 className="product-name">Tai nghe gaming Rapoo VH520C</h3>
                            <p className="product-price">690.000 VNĐ</p>
                            <a href="#" className="product-button">Mua ngay</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <h2>Danh Mục Sản Phẩm</h2>
                <div className="category-list">
                    <a href="/laptop" className="category-item">Laptop</a>
                    <a href="/casepc" className="category-item">Case PC</a>
                    <a href="#" className="category-item">Màn hình</a>
                    <a href="#" className="category-item">Tai nghe</a>
                    <a href="#" className="category-item">Tản nhiệt</a>
                    <a href="#" className="category-item">Chuột</a>
                    <a href="#" className="category-item">Bàn phím</a>
                    <a href="#" className="category-item">Bàn ghế</a>
                    <a href="#" className="category-item">Console</a>
                </div>
            </section>

            <section>
                <h2>Sản Phẩm Nổi Bật</h2>
                <div className="featured-products_container">
                    <ProductCard
                        img_link="/public/products/laptop/laptop.webp"
                        name="Laptop"
                        price="17,000,000 VND"
                    />
                </div>
            </section>
        </main>
    );
};

export default Content;
