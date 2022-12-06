import { deviceAndComp, typedevice } from "../util/typealiases/devicetype";

const loopDeviceAndComp = 
    (comp: deviceAndComp, target: typedevice | null) : JSX.Element | null => {
        if(target === null) throw new Error('No target media query specified!');

        let component: JSX.Element | null = null;

        for(let x of comp) {
            if(x.type === target) {
                component = x.component
                break;
            }
        }

        return component;
    }

    type comppropstype = {components: deviceAndComp, devicetype: typedevice | null};
    const GetComponent = 
    ({components, devicetype} : comppropstype) :
     JSX.Element | null => {
        let component: JSX.Element | null = null

        try { component = loopDeviceAndComp(components, devicetype) } 
        catch(e) { console.log(e) }
        return component
    };

    export default GetComponent;