import React, { useContext } from "react";

import { DEVICE_TYPE, deviceAndComp } from '../util/typealiases/devicetype';
import centerpagestyle from '../../css/sub/centersubcompfixed.scss';
import GetComponent from "../mediaqueries/respcompfunc";
import { ToggleLightBoxContext } from '../util/globalcontext';

const CenterCompFixed = () => {
    const dtcontextref = useContext(ToggleLightBoxContext);

    if(dtcontextref.devicetype === undefined) {
        console.error('devicetype in MainCenterCompFixed is undefined!');
        return null;
    }

    const BaseComp = ({classname} : {classname: string}) => {
        return(<div className={classname}></div>);
    };
    
    const ComponentForDesktop = () => {
        return <BaseComp classname={centerpagestyle.centersubcomp}/>;
    };
    
    const ComponentForSmallDevice = () => {
        return <BaseComp classname={centerpagestyle.centersubcompSm}/>;
    };
    
    const components: deviceAndComp = [
        {type: DEVICE_TYPE.small, component: <ComponentForSmallDevice />},
        {type: DEVICE_TYPE.desktop, component: <ComponentForDesktop />}
    ];

    return <GetComponent components={components} devicetype={dtcontextref.devicetype}/>;
}
export default CenterCompFixed;