import React from 'react';
// import '../Button/button'
import Header from '../components/Header/header.js';
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
                        <div className='login_content_item_name'><h3>Email:</h3></div>
                        <div><input className='login_content_item_input'></input></div>
                    </div>
                    <div className='login_content_item'>
                        <div className='login_content_item_name'><h3>Password:</h3></div>
                        <div><input  className='login_content_item_input'></input></div>
                    </div>
                </div>
                <div className='login_Submit'>
                    Submit
                </div>
                    OR
                <div className='Icon'>icon</div>

                <div>Not account yet?<a> Sign up</a> </div>
                <div><a>Forgot the password</a></div>
            </div>
        </div>
    );
}

export default Login