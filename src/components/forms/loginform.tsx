import React, { useEffect } from 'react';

import LoginLinks from './loginlinks';

import loginformstyle from '../../css/forms/loginform.scss';

const loginForm = 
({ changeDivHeight } : {changeDivHeight : Function}) => {

    useEffect(() => { 
        const divHeightUpdate = () => {
            changeDivHeight();
        };

        window.addEventListener('resize', divHeightUpdate);
        return () => { window.removeEventListener('resize', divHeightUpdate) };
    },[]);

    return(

        <div id={loginformstyle.cboxContent}>
            <label>Login to your account</label>
            <input type='text' id='username' placeholder='Username' />
            <input type='password' id='password' placeholder='Password' />
            <LoginLinks />
            <p id={loginformstyle.xpass}></p>
        </div>
        
    );
};

export default loginForm;