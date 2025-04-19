import React from 'react';
import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="header_top">
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                    Đông Hòa, Dĩ An, Bình Dương
                </div>
                <div>
                    <div>Fanpage</div>
                    <div>Yêu thích</div>
                </div>
            </div>

            <div className="header_middle">
                <div className="header_middle_logo">
                    <img src="./img/logo_shop.png" alt="" className="logo_shop" />
                </div>
                <div className="header_middle_right_side">
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
                                <div className="header_middle_other_right_side_item"><span className="hightlight_word"><i className="fa-solid fa-meteor"></i> Giao hàng trong 2h</span></div>
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
                    <div className="header_bottom_button_item">Trang chủ</div>
                    <div className="header_bottom_button_item">Sản phẩm</div>
                    <div className="header_bottom_button_item">Giới thiệu</div>
                    <div className="header_bottom_button_item">Liên hệ</div>
                </div>

                <div className="header_bottom_side">
                    <div className="header_bottom_button_item hotline"><i className="fa-solid fa-phone"></i>19001665</div>
                    <div className="header_bottom_button_item cart"><i className="fa-solid fa-cart-shopping"></i>Giỏ hàng</div>
                    <a href="login.html" className="header_bottom_button_item account"><i className="fa-solid fa-user"></i> Tài khoản</a>
                </div>
            </div>
        </div>
    );
}

export default Header