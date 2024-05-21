import React, { useEffect } from 'react';
import './loginForm.css';

export default function LoginForm() {
    return (  
        <div className='wrapper'>
            <form action=''>
                <h1 id='welcome'>Welcome!</h1>

                <div className='fields'>
                    <div className='input-box1'>
                        <h5>Enter Your Email Address</h5>
                        <input type='text' required />
                    </div>
                    <div className='input-box2'>
                        <h5>Enter Your Password</h5>
                        <input type='password' required />
                    </div>
                </div>
                <button className='button'>Sign In</button>
            </form>
        </div>
    );
}


    
