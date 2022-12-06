import React, { useRef } from 'react';

import lb from '../../../css/lightbox/lightbox.scss';

import LoginForm from '../../forms/loginform';
import { deviceAndComp, DEVICE_TYPE } from '../typealiases/devicetype';
import LightBoxResp from './lightboxresp';

const LightBoxLogin = ({toggleLightBox} : {toggleLightBox: Function}) => {

    const BaseComp = ({classname} : {classname: string}) => {
        const divref = useRef<HTMLDivElement>(null);

        return(
        <div className={classname} ref={divref}>
            <LoginForm upperDivRef={divref}/>
        </div>);
    };

    const ComponentForDesktop = () => {
        return <BaseComp classname={lb.loginformdiv}/>;
    };

    const ComponentForSmallDevice = () => {
        return <BaseComp classname={lb.loginformdivSm}/>;
    };

    const components: deviceAndComp = [
        {type: DEVICE_TYPE.small, component: <ComponentForSmallDevice />},
        {type: DEVICE_TYPE.desktop, component: <ComponentForDesktop />}
    ];

    return(
        <>
            <LightBoxResp components={components}/>
            <div className={lb.black_overlay} onClick={() => {toggleLightBox();}}></div>
        </>
    );
};

export default LightBoxLogin;
