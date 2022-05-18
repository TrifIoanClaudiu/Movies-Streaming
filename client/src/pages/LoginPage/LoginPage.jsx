import React from 'react';
import "./LoginPage.scss"
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import {stopScrolling} from '../../utils/localStorageUtils';


function LoginPage() {
    stopScrolling();
    return (
        <div className="loginImage">
            <div className="login">
                <h1>Login</h1>
                <div className="form">
                    <EmailIcon className='icon' />
                    <input type="text" placeholder="Email"></input>
                    <KeyIcon className='icon' />
                    <input type="password" placeholder='Password'></input>
                </div>
                <div className="buttons">
                    <button id='login'>Login</button>
                    <Link to="/register">
                        <button id='register'>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};


export default LoginPage;