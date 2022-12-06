import { DEVICE_TYPE, typedevice } from '../util/typealiases/devicetype';

const queryDeviceType = () : typedevice | null => {

    type querylisttype = { query: MediaQueryList, devicetype: typedevice }[];
    const querylist : querylisttype = [
        { query: window.matchMedia("(max-width: 600px)"), devicetype: DEVICE_TYPE.small },
        { query: window.matchMedia("(min-width: 600px)"), devicetype: DEVICE_TYPE.desktop }
    ];

    let querydevicetype : typedevice | null = null;
    for(let x of querylist) {
        if(x.query.matches) {
            querydevicetype = x.devicetype
            break
        }
    }

    return querydevicetype;
};

export default queryDeviceType;