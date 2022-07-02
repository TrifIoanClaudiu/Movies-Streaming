import React, {useState } from 'react';
import "./RegisterPage.scss"
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { stopScrolling } from '../../utils/localStorageUtils';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config';


function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleFinish = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post("/api/auth/register", { email, password })
            navigate('/login');
        }
        catch (err) {
            setError(true);
        }
    }
    stopScrolling(true);
    return (
        <div className="registerImage">
            <div className="login">
                <h1>Register</h1>
                {error && <span>Sorry, the username is already taken!</span>}
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