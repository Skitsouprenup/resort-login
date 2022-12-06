import React, { useContext } from 'react';

import loginformstyle from '../../css/forms/loginform.scss';

import { DEVICE_TYPE, deviceAndComp } from '../util/typealiases/devicetype';
import { DeviceTypeContext } from '../util/globalcontext';
import GetComponent from '../mediaqueries/respcompfunc';

const LoginLinks = () => {
    const dummyhref = 'http://';
    const dtcontextref = useContext(DeviceTypeContext);

    if(dtcontextref.devicetype === undefined) {
        console.error('devicetype in LoginLinks is undefined!');
        return null;
    }

    const ComponentForDesktop = () => {

        return(
            <div className={loginformstyle.linksdiv}>
                <a href={dummyhref}
                    onClick={() => {}} 
                    className={loginformstyle.forgotPass}>
                Forgot Password?
                </a>
                <a href={dummyhref} onClick={() => {}} 
                    className={loginformstyle.loginlink}>
                Login
                </a>
            </div>
        );
    };

    const ComponentForSmallDevice = () => {
        return(
            <>
                <div className={loginformstyle.linksdivSm}>
                    <a href={dummyhref} onClick={() => {}} 
                    className={loginformstyle.loginlink}>
                    Login
                    </a>
                </div>
                <div className={loginformstyle.linksdivSm}>
                    <a href={dummyhref} 
                    onClick={() => {}} 
                    className={loginformstyle.forgotPassSm}>
                    Forgot Password?
                    </a>
                </div>
            </>
        );
    };

    const components: deviceAndComp = [
        {type: DEVICE_TYPE.small, component: <ComponentForSmallDevice />},
        {type: DEVICE_TYPE.desktop, component: <ComponentForDesktop />}
    ];

    return <GetComponent components={components} devicetype={dtcontextref.devicetype}/>;
};

export default LoginLinks;