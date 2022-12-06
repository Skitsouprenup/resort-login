import React, { useContext } from 'react';

import loginbutton from '../../images/login.png';
import registerbutton from '../../images/register.png';

import globalstyles from '../../css/globalstyles.scss';

import { Link } from 'react-router-dom';
import { ToggleLightBoxContext } from '../util/globalcontext';
import { deviceAndComp, DEVICE_TYPE } from '../util/typealiases/devicetype';
import GetComponent from '../mediaqueries/respcompfunc';

const MainPageLinks = () => {
    const dtcontextref = useContext(ToggleLightBoxContext);

    const BaseComp = () => {

        return(
            <div style={{textAlign: "center",
                         padding: "10px", 
                         display: 'flex',
                         justifyContent: 'space-around',
                         flexWrap: 'wrap',
                         alignContent: 'center',
                         marginTop: '5px',
                         width: '100%'}}>
                <Link to="/">
                    <img src={registerbutton} 
                         className={globalstyles.responsiveinlblockimg}
                         style={{maxWidth: '230px', maxHeight: '80px', width: '100%'}} />
                </Link>
                <a href="http://" 
                   onClick={() => {
                        if(dtcontextref.toggleLightBox !== null)
                            dtcontextref.toggleLightBox()
                    }}>
                    <img src={loginbutton}  
                         className={globalstyles.responsiveinlblockimg}
                         style={{maxWidth: '230px', maxHeight: '80px', width: '100%'}} />
                </a>
            </div>
        );
    };

    const ComponentForDesktop = () => {
        return <BaseComp />;
    };
    
    const ComponentForSmallDevice = () => {
        return <BaseComp />;
    };

    const components: deviceAndComp = [
        {type: DEVICE_TYPE.small, component: <ComponentForSmallDevice />},
        {type: DEVICE_TYPE.desktop, component: <ComponentForDesktop />}
    ];

    return <GetComponent components={components} devicetype={dtcontextref.devicetype}/>;
};

export default MainPageLinks;
