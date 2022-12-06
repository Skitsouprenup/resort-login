import React, { useEffect, useRef, useState } from 'react';

import { DeviceTypeContext } from '../globalcontext';
import queryDeviceType from '../../mediaqueries/queries';
import { deviceAndComp, typedevice } from '../typealiases/devicetype';
import GetComponent from '../../mediaqueries/respcompfunc';

type comppropstype = { components: deviceAndComp };

const LightBoxResp = ({ components } : comppropstype) : JSX.Element | null => {
    const [devicetype, setDeviceType] = useState(queryDeviceType());
    const stateRef = useRef<typedevice | null>(devicetype);

    const updateState = () => {
        const query = queryDeviceType()

        if(stateRef.current !== query) {
            setDeviceType(query)
        }
     };

    useEffect(() => {
        window.addEventListener('resize', updateState);
        return () => window.removeEventListener('resize', updateState);
    },[]);
    useEffect(() => {
        stateRef.current = devicetype;
    },[devicetype]);
    
    return (<DeviceTypeContext.Provider 
             value={{devicetype}}>
                <GetComponent components={components} devicetype={devicetype}/>
            </DeviceTypeContext.Provider>);
};

export default LightBoxResp;