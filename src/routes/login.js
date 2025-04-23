import React from 'react';
// import '../Button/button'
import './css/login.css'
import { useState, useEffect } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [customerId, setCustomerId] = useState(null);
    const [isAdminChecked, setIsAdminChecked] = useState(false);

    useEffect(() => {
        const customerId = localStorage.getItem('customer_id');
        if (customerId) {
            setCustomerId(id);
        }
    }, []);

    const handleLogin = async () => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, isAdminChecked })
            });

            const data = await response.json();

            if(data.success) {
                localStorage.setItem('customer_id', data.customer_id);
                setCustomerId(data.customer_id);
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
        window.location.href = '/login';
    };

    if(customerId) {
        return (
            <div className="main_screen">
                <div className="login_toast">
                    Hello, 
                </div>
            </div>
        )
    } else return (
        <div className="main_screen">
            <div className="login_toast">
                <div className="login_header">
                    <h1>Log in</h1>
                </div>
                <div className='login_content'>
                    <div className='login_content_item'>
                        <div className='login_content_item_name'>Email:</div>
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
                        <div className='login_content_item_name'>Password:</div>
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
                            checked={isAdminChecked} 
                            onChange={(e) => setIsAdminChecked(e.target.checked)}
                        /></div>
                        Is admin
                    </div>
                    <div>Forgot password</div>
                </div>

                <div className='login_Submit' onClick={handleLogin}>
                    Log in
                </div>

                <div>Don't have an account ? <a href='/signup'> Register here</a> </div>
            </div>
        </div>
    );
}

export default Login