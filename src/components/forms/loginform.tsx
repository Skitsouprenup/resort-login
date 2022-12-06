import React, { RefObject, useEffect, useRef } from 'react';

import LoginLinks from './loginlinks';

import loginformstyle from '../../css/forms/loginform.scss';

const loginForm = 
({ upperDivRef } : {upperDivRef : RefObject<HTMLDivElement>}) => {
    const divref = useRef<HTMLDivElement>(null);

    /*
      This function is similar to applyHeightUpdate function in 
      maincentercomp.tsx
      
      Although, this function doesn't need to check for loaded
      images because the div doesn't have any images

      Also, this function updates the height of fixed div whereas
      applyHeightUpdate updates the height of relative div
    */
    const updateDivHeight = () => {
        const vpHeight = document.documentElement.clientHeight;

        if(divref.current !== null && upperDivRef.current !== null) {
            //console.log(vpHeight + ' | ' + divref.current.scrollHeight)
            if(vpHeight >= divref.current.scrollHeight)
                upperDivRef.current.style.height = 'auto';
            else upperDivRef.current.style.height = '100vh';
        }
    };

    useEffect(() => { 
        window.addEventListener('resize', updateDivHeight);
        return () => { window.removeEventListener('resize', updateDivHeight) };
    },[]);

    return(

        <div id={loginformstyle.cboxContent} ref={divref}>
            <label>Login to your account</label>
            <input type='text' id='username' placeholder='Username' />
            <input type='password' id='password' placeholder='Password' />
            <LoginLinks />
            <p id={loginformstyle.xpass}></p>
        </div>
        
    );
};

export default loginForm;