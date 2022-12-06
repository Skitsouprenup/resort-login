import React, { useEffect, useRef, useState } from 'react';
import queryDeviceType from '../mediaqueries/queries';

import CenterCompFixed from './maincentercompfixed';
import MainCenterComp from './maincentercomp';
import { ToggleLightBoxContext } from '../util/globalcontext';
import { typedevice } from '../util/typealiases/devicetype';

const MainCenter = ({toggleLightBox} : {toggleLightBox: Function}) => {
    const [devicetype, setDeviceType] = useState(queryDeviceType());
    const stateRef = useRef<typedevice | null>(devicetype);

    const updateState = () => {
        const query = queryDeviceType();

        if(stateRef.current !== query) {
            setDeviceType(query);
        }
     };

    {/*Monitors browser size in order to switch device type */}
    useEffect(() => {
        const updateStateOnResize = () => {
            updateState();
        };

        window.addEventListener('resize', updateStateOnResize);
        return () => window.removeEventListener('resize', updateStateOnResize);
    },[]);
    useEffect(() => {
        stateRef.current = devicetype;
    },[devicetype]);

    return(
        <ToggleLightBoxContext.Provider 
        value={{devicetype, toggleLightBox}}>
            <CenterCompFixed />
            <MainCenterComp />
        </ToggleLightBoxContext.Provider>
    );
};

export default MainCenter;