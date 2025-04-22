import React from 'react';
// import '../Button/button'
import './css/login.css'
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Login error:', error);
            alert('Lỗi khi đăng nhập. Vui lòng thử lại.');
        }
    };

    const handleSignup = async () => {

    }

    return (
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
                    <div>Remember</div>
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