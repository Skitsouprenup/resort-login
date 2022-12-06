import React, { useState, useEffect, useRef } from 'react';

import { deviceAndComp } from '../util/typealiases/devicetype';
import queryDeviceType from '../mediaqueries/queries';
import GetComponent from './respcompfunc';
import { typedevice } from '../util/typealiases/devicetype';

type comppropstype = { components: deviceAndComp };
const GetCompResponsive = ({ components } : comppropstype) : JSX.Element | null => {

    const [devicetype, setDeviceType] = useState(queryDeviceType());
    const stateRef = useRef<typedevice | null>(devicetype);

    const updateState = () => {
        const query = queryDeviceType();

        if(stateRef.current !== query) {
            setDeviceType(query);
        }
     };

    useEffect(() => {
        window.addEventListener('resize', updateState);
        return () => window.removeEventListener('resize', updateState);
    },[]);
    useEffect(() => {
        stateRef.current = devicetype;
    },[devicetype]);

    return <GetComponent components={components} devicetype={devicetype}/>;
}

export default GetCompResponsive;