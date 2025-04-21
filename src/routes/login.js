import React from 'react';
// import '../Button/button'
import './css/login.css'

function Login() {
    return (
        <div className="main_screen">
            <div className="login_toast">
                <div className="login_header">
                    <h1>Log in</h1>
                </div>
                <div className='login_content'>
                    <div className='login_content_item'>
                        <div className='login_content_item_name'>Email:</div>
                        <div className='login_content_item_input'><input type='text' className='login_content_item_input_input' placeholder='Nhập email hoặc số điện thoại'></input><i class="fa-solid fa-envelope login_content_item_input_icon"></i></div>
                    </div>
                    <div className='login_content_item'>
                        <div className='login_content_item_name'>Password:</div>
                        <div className='login_content_item_input'><input type='text' className='login_content_item_input_input' placeholder='Nhập mật khẩu'></input><i class="fa-solid fa-key login_content_item_input_icon"></i></div>
                    </div>
                </div>

                <div className='login_forgot_password'>
                    <div>Remember</div>
                    <div>Forgot password</div>
                </div>

                <div className='login_Submit'>
                    Log in
                </div>

                <div>Don't have an account ? <a> Register here</a> </div>
            </div>
        </div>
    );
}

export default Login