import React from 'react';
// import '../Button/button'
import './css/login.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [customerId, setCustomerId] = useState(null);
    const [isAdmin, setIsAdmin] = useState(true);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const customerId = localStorage.getItem('customer_id');
        const customerName = localStorage.getItem('name');
        const isAdmin = localStorage.getItem('isAdmin');
        if (customerId) {
            setCustomerId(customerId);
            setName(customerName);
            setIsAdmin(isAdmin === 'true');
        }
    }, []);

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('customer_id', data.customer_id);
                localStorage.setItem('name', data.name)
                if (data.admin) {
                    localStorage.setItem('isAdmin', true);
                    setIsAdmin(true);
                }
                else {
                    localStorage.setItem('isAdmin', false);
                    setIsAdmin(false);
                }

                setCustomerId(data.customer_id);
                setName(data.name);
            } else {
                alert('Đăng nhập thất bại');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Lỗi khi đăng nhập. Vui lòng thử lại.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('customer_id');
        localStorage.removeItem('name');
        localStorage.removeItem('isAdmin');
        window.location.href = '/login';
    };

    const backHome = () => {
        navigate('/');
    }

    const management = () => {
        navigate('management')
    }


    if(!customerId) {

        // Sửa cho giao diện đẹp
        if(isAdmin) { // Giao diện cho admin
            return (
                <div className="main_screen">
                    <div className="login_toast log-out-toast">
                        <div className='say_hello'>
                            Hello, {name}
                        </div>

                        <div className='log_out' onClick={handleLogout}>
                            Log out
                        </div>

                        <div className='login-back-home' onClick={management}>
                            Đến quản lý
                            </div>
                    </div>
                </div>
            )
        } else return (  // Giao diện cho user
            <div className="main_screen">
                <div className="login_toast logged_in_screen">
                    <div className="logged_in_hello">
                        Xin chào, {name}
                    </div>

                    {isAdmin ? (
                        <>
                            <button className="logged_in_button" onClick={management}>
                                Đến quản lý
                            </button>
                            <button className="logged_in_button" onClick={handleLogout}>
                                Đăng xuất
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="logged_in_button" onClick={backHome}>
                                Trở về trang chủ
                            </button>
                            <button className="logged_in_button" onClick={handleLogout}>
                                Đăng xuất
                            </button>
                        </>
                    )}
                </div>
            </div>

        );
        // Sửa giao diện đẹp
    } else return (
        <div className="main_screen">
            <div className="login_toast">
                <div className="login_header">
                    <h1>Log in</h1>
                </div>
                <div className='login_content'>
                    <div className='login_content_item'>
                        <div className='login_content_item_name'>Tên đăng nhập:</div>
                        <div className='login_content_item_input'>
                            <input
                                type='text'
                                className='login_content_item_input_input'
                                placeholder='Nhập email hoặc số điện thoại'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <i className="fa-solid fa-envelope login_content_item_input_icon"></i>
                        </div>
                    </div>
                    <div className='login_content_item'>
                        <div className='login_content_item_name'>Mật khẩu:</div>
                        <div className='login_content_item_input'>
                            <input
                                type='text'
                                className='login_content_item_input_input' id='login_password'
                                placeholder='Nhập mật khẩu'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="fa-solid fa-key login_content_item_input_icon"></i></div>
                    </div>
                </div>

                <div className='login_forgot_password'>
                    <div className='remember-feature'>
                        <div className="remember_passwword_check"><input
                            type="checkbox"
                        /></div>
                        Ghi nhớ đăng nhập
                    </div>
                    <div>Quên mật khẩu</div>
                </div>

                <div className='login_Submit' onClick={handleLogin}>
                    Đăng nhập
                </div>

                <div>Bạn chưa có tài khoản ? <a href='/signup'> Đăng kí ngay</a> </div>
            </div>
        </div>
    );
}

export default Login