import React, { useState } from "react";

import centerpagestyle from '../../css/sub/mainpagecentersubcomp.scss';

import LightBoxLogin from "../util/pages/lightboxlogin";
import MainCenter from "./maincenter";

const CenterSubComponent = () => {
    const[hideLightBox, setHideLightBox] = useState(true);

    const toggleLightBox: Function = () => {
        setHideLightBox(!hideLightBox);
    };

    return(
    <>
        {!hideLightBox && (
        <div>
            <LightBoxLogin toggleLightBox={toggleLightBox}/>
        </div>)}
        <div className={centerpagestyle.background}></div>
        <MainCenter toggleLightBox={toggleLightBox}/>
    </>);
}

export default CenterSubComponent;