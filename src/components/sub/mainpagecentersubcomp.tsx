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
    <div className={centerpagestyle.background}
         style={{overflow: 'scroll'}}>
        {!hideLightBox && (
        <div>
            <LightBoxLogin toggleLightBox={toggleLightBox}/>
        </div>)}
        <MainCenter toggleLightBox={toggleLightBox}/>
    </div>);
}

export default CenterSubComponent;