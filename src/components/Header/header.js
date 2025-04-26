import React from 'react';
import './header.css'
import '../Button/button.js'
import Button from '../Button/button.js';
import logo from '/public/img/logo_shop.png'

function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top-left-container">
                    <div className="header-top-left-item"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="header-top-left-item">Đông Hòa, Dĩ An, Bình Dương</div>
                </div>
                <div className="header-top-right-container">
                    <div className="header-top-right-item">Fanpage</div>
                    <div className="header-top-right-item">Yêu thích</div>
                </div>
            </div>

            <div className="header-middle">
                <div className="header-middle-left-side">
                    <img src={logo} alt="" className="logo-shop" />
                </div>
                <div className="header-middle-right-side">
                    <div className="header_middle_search">
                        <input type="text" className="header_middle_search_input" placeholder="Tìm sản phẩm" />
                        <div className="header_middle_search_button">
                            <div><i className="fa-solid fa-magnifying-glass header_middle_search_button_logo"></i></div>
                            <div className="header_middle_search_button_words">Tìm kiếm</div>
                        </div>
                    </div>
                    <div className="header_middle_other">
                        <div className="header_middle_other_items">
                            <div className="header_middle_other_left_side">
                                <i className="fa-solid fa-business-time"></i>
                            </div>
                            <div className="header_middle_other_right_side">
                                <div className="header_middle_other_right_side_item">Thời gian làm việc<br /></div>
                                <div className="header_middle_other_right_side_item"><span className="hightlight_word">8h - 21h</span> (từ thứ 2 - chủ nhật)</div>
                            </div>
                        </div>
                        <div className="header_middle_other_items">
                            <div className="header_middle_other_left_side">
                                <i className="fa-solid fa-truck-fast"></i>
                            </div>
                            <div className="header_middle_other_right_side">
                                <div className="header_middle_other_right_side_item">Tốc độ nhanh chóng<br /></div>
                                <div className="header_middle_other_right_side_item"><span className="hightlight_word"><i className="fa-solid fa-meteor"></i> Giao hàng 2h</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_bottom">
                <div className="header_bottom_side category">
                    <h1 className="category_word">
                        <i className="fa fa-list"></i> Danh mục sản phẩm
                    </h1>
                </div>

                <div className="header_bottom_side">
                    <Button
                        className="header_bottom_button_item"
                        content="Trang chủ"
                        link={'/'}
                    />
                    <div className="header_bottom_button_item">Tin tức</div>
                    <Button
                        className="header_bottom_button_item"
                        content="Giới thiệu"
                        link={'/introduction'}
                    />
                    <div className="header_bottom_button_item">Liên hệ</div>
                </div>

                <div className="header_bottom_side">
                    {/* <button className="header_bottom_button_item hotline"><i className="fa-solid fa-phone"></i>19001665</button>
                    <button className="header_bottom_button_item cart"><i className="fa-solid fa-cart-shopping"></i>Giỏ hàng</button>
                    <button className="header_bottom_button_item account"><i className="fa-solid fa-user"></i> Tài khoản</button> */}
                    <Button
                        className="header-bottom-button-right hotline" 
                        icon={<i className="fa-solid fa-phone"></i>}
                        content="19001665"
                        link={'/phone'}
                    />
                    <Button
                        className="header-bottom-button-right" 
                        icon={<i className="fa-solid fa-cart-shopping"></i>}
                        content="Giỏ hàng"
                        link={'/cart'}
                    />
                    <Button
                        className="header-bottom-button-right" 
                        icon={<i className="fa-solid fa-user"></i>}
                        content="Tài khoản"
                        link={'/login'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header