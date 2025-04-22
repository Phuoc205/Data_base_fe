import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className = "footer">
                        <div className="subscribe-section">
                        <img src="/img/logo_shop.png" alt="Logo" className="logo" />
                <div className="subscribe-form">
                    <input type="email" placeholder="Nhập email nhận tin khuyến mãi" className="email-input"/>
                    <button className="subscribe-btn">Đăng ký</button>
                </div>
            </div>
            <div className = "footer-main">
                <div className ="footer-column">
                    <h3>Thông tin công ty</h3>
                    <p><i className="fa-solid fa-location-dot"></i> Đông Hòa, Dĩ An, Bình Dương</p>
                    <p><i className="fa-solid fa-envelope"></i>email@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> 1900 0000</p>
                </div>
                <div className="footer-column">
                    <h3>Về chúng tôi</h3>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Giới thiệu</li>
                        <li>Sản phẩm</li>
                        <li>Cẩm nang</li>
                        <li>Liên hệ</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Chính sách</h3>
                    <ul>
                        <li>Chính sách đổi trả</li>
                        <li>Chính sách mua hàng</li>
                        <li>Chính sách bán hàng</li>
                        <li>Chính sách giao hàng</li>
                        <li>Hướng dẫn mua hàng</li>
                        <li>Bảo mật thông tin cá nhân</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Hình thức thanh toán</h3>
                    <div className="payment-methods">
                        <img src="https://cdn3.iconfinder.com/data/icons/glypho-money-and-finance/64/money-dollar-circle-512.png" alt="Tiền mặt"/>
                        <img src="https://developers.momo.vn/v3/vi/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png" alt="Momo"/>
                        <img src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Visa-1024.png" alt="Visa"/>
                        <img src="https://cdn3.iconfinder.com/data/icons/business-icons-bw/100/business-3-19-1024.png" alt="Chuyển khoản"/>
                    </div>
                    <h3>Liên kết mạng xã hội</h3>
                    <div className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                © Bản quyền thuộc về <strong>Team</strong> | Cung cấp bởi <strong>Company</strong>
            </div>
        </div>
    );
}
export default Footer