import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { getItemValue, setItemValue } from '../../utils/localStorageUtils';
import './WelcomePage.scss'

function WelcomePage(){
    if (!getItemValue('visited')) {
        return (
            <div className="BodyImage">
                <h1>Welcome to our fantasy land</h1>
                <div>
                    <Link to="/" type="button" className="continue-btn" onClick={() => { setItemValue('visited', true) }}>
                        Continue
                    </Link>
                </div>
            </div>
        )
    } else {
        return <Navigate to="/" />
    }
};

export default WelcomePage;
