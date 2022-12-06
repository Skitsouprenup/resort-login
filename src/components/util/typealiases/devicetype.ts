
const DEVICE_TYPE = {small: 'SMALL', 
                     desktop: 'DESKTOP'} as const;
type devicetype = typeof DEVICE_TYPE[keyof typeof DEVICE_TYPE];

type deviceAndComp = {type: devicetype, component: JSX.Element}[];

export {devicetype as typedevice, DEVICE_TYPE, deviceAndComp};