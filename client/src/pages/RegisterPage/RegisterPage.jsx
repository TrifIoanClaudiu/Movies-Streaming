import React from 'react';
import "./RegisterPage.scss"
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import {stopScrolling} from '../../utils/localStorageUtils';


function RegisterPage() {
    stopScrolling();
    return (
        <div className="registerImage">
            <div className="login">
                <h1>Register</h1>
                <div className="form">
                    <EmailIcon className='icon' />
                    <input type="text" placeholder="Email"></input>
                    <KeyIcon className='icon' />
                    <input type="password" placeholder='Password'></input>
                    <input type="password" placeholder='Confirm Password'></input>
                </div>
                <button className='button'>Register</button>
            </div>
        </div>
    )
};


export default RegisterPage;