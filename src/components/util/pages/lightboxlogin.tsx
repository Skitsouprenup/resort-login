import React, { RefObject, useRef, useState, useLayoutEffect } from 'react';

import lb from '../../../css/lightbox/lightbox.scss';

import LoginForm from '../../forms/loginform';
import { deviceAndComp, DEVICE_TYPE } from '../typealiases/devicetype';
import LightBoxResp from './lightboxresp';

const LightBoxLogin = ({toggleLightBox} : {toggleLightBox: Function}) => {
    
    const BaseComp = ({classname} : {classname: string}) => {
        const[divHeight, setDivHeight] = useState('auto');
        const divref = useRef<HTMLDivElement>(null);

        /*
            This function is similar to applyHeightUpdate function in 
            maincentercomp.tsx
            
            Although, this function doesn't need to check for loaded
            images because the div doesn't have any images

            Also, this function updates the height of fixed div whereas
            applyHeightUpdate updates the height of relative div
        */
        const changeDivHeight = () => {
            const vpHeight = document.documentElement.clientHeight;

            if(divref.current !== null) {
                //console.log(vpHeight + ' | ' + divref.current.scrollHeight)
                if(vpHeight >= divref.current.scrollHeight){
                    if(divref.current.style.height !== 'auto')
                        setDivHeight('auto');
                }
                else {
                    if(divref.current.style.height === 'auto')
                        setDivHeight('100vh');
                }
                          
            }
        };

        useLayoutEffect(() => {
            if(divref.current !== null)
                divref.current.style.height = divHeight;
                
        }, [divHeight]);

        return(
        <div className={classname} ref={divref}>
            <LoginForm changeDivHeight={changeDivHeight}/>
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
