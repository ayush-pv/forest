import React from 'react';
import './Login.css'

function Login() {
  return (
    <div className='login_homepage'>
    <div className='login_main'>
        <div className='login'>
            <p className='login_name'><b>Login</b></p>
            <p>Don't have an account? <span className='login_signin'>Sign Up</span></p>
                <div>
                    <p><b>Email:</b></p>
                    <input  className='form_details' type='email' placeholder='xyz@gmail.com' required autoComplete></input>
                    <p><b>Password:</b></p>
                    <input  className='form_details' type='password' required></input>
                </div>
            <button  className='form_button' value='Login'>Login</button>
        </div>
    </div>
    </div>
    )
  }

export default Login;
