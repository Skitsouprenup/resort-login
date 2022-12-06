import { createContext } from "react";
import { typedevice } from "./typealiases/devicetype";

type contextType = {
    devicetype: typedevice | null,
    toggleLightBox: Function | null,
};

const ToggleLightBoxContext =
createContext<contextType>({devicetype: null, toggleLightBox: null});

type deviceTypeContext = {devicetype: typedevice | null};
const DeviceTypeContext = createContext<deviceTypeContext>({devicetype: null});

export { ToggleLightBoxContext, DeviceTypeContext };