import React, {useState } from 'react';
import "./RegisterPage.scss"
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { stopScrolling } from '../../utils/localStorageUtils';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleFinish = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/auth/register", { email, password })
            navigate('/login');
        }
        catch (err) {
            console.log(err);
        }
    }
    stopScrolling(true);
    return (
        <div className="registerImage">
            <div className="login">
                <h1>Register</h1>
                <div className="form">
                    <EmailIcon className='icon' />
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <KeyIcon className='icon' />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleFinish} className='button'>Register</button>
            </div>
        </div>
    )
};


export default RegisterPage;