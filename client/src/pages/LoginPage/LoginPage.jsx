import React, { useContext, useState } from 'react';
import "./LoginPage.scss"
import { Link, Navigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { getItemValue, stopScrolling } from '../../utils/localStorageUtils';
import { AuthContext } from '../../utils/authContext/AuthContext';
import { login } from '../../utils/apiCalls';


function LoginPage() {
    stopScrolling();
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch)

    }
    if (user === null) {
        return (
            <div div className="loginImage" >
                <div className="login">
                    <h1>Login</h1>
                    <div className="form">
                        <EmailIcon className='icon' />
                        <input type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <KeyIcon className='icon' />
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="buttons">
                        <button id='login'
                            onClick={handleLogin}
                            disabled={isFetching}>
                            Login</button>
                        <Link to="/register">
                            <button id='register'>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }else{
        return <Navigate to="/" />
    }
};


export default LoginPage;