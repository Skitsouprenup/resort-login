import React, { useEffect, useRef, useContext, useState, useLayoutEffect }  from 'react';

import centerpagestyle from '../../css/sub/mainpagecentersubcomp.scss';
import globalstyles from '../../css/globalstyles.scss';

import mainlogo from '../../images/beach-resort-logo.png';

import MainPageLinks from './mainpagelinks';
import { ToggleLightBoxContext } from '../util/globalcontext';
import { DEVICE_TYPE, deviceAndComp} from '../util/typealiases/devicetype';
import GetComponent from '../mediaqueries/respcompfunc';

const MainCenterComp = () => {
    /*We should re-render everytime we change element's attribute
      like height. Otherwise, we may experience unexpected output
      like jerky images.*/
    const[divHeight, setDivHeight] = useState('auto');

    const mccontextref = useContext(ToggleLightBoxContext);
    const divref = useRef<HTMLDivElement>(null);
    let imgCount : number | undefined = undefined ;

    //This function updates the height a div where the images
    //of logo and two buttons are located. This function prevents
    //the div from overlapping at the top of the document when the
    //viewport is getting smaller
    //
    //To accurately get the div height with images, we need to
    //make sure that all images inside the div are loaded before
    //getting the height of the div
    //
    //I only tested this on firefox(v106) and chrome(v107). If this
    //ruins user experience more than it fixes, it's better not to
    //use this and stick with the default height(100vh)
    const applyHeightUpdate = () => {
        if(imgCount === 0 && imgCount !== undefined) {
            if(divref.current !== null) {
                const vpHeight = document.documentElement.clientHeight;
                //console.log(divref.current.style.height)
                //console.log(vpHeight + ' | ' + divref.current.scrollHeight)
                //alert(vpHeight + ' | ' + divref.current.scrollHeight)
                if(vpHeight >= divref.current.scrollHeight){
                    if(divref.current.style.height === 'auto')
                        setDivHeight('100vh');
                }
                
                        
                else {
                    if(divref.current.style.height !== 'auto')
                        setDivHeight('auto');
                }       
                
            }
        }
    };

    const BaseComp = ({classname} : {classname: string}) => {

        const imgLoad = () => {
            const imgNodes = document.querySelectorAll('.'+classname+' img');
            imgCount =imgNodes.length;

            const onImgLoad = () => {
                if(imgCount !== undefined) imgCount--;
                applyHeightUpdate();
            };
    
            if(imgNodes) {
                for(let x in imgNodes) {
                    //console.log("type: "+ imgNodes[x].nodeType)
                    if(imgNodes[x].nodeType === 1) {
                        let node = imgNodes[x] as HTMLImageElement;
                        node.onload = onImgLoad;
                    }
                }
            }
        };

        useEffect(() => { 
            const updateHeightOnResize = () => {
                applyHeightUpdate();
            };

            imgLoad();
            window.addEventListener('resize', updateHeightOnResize);
            return () => window.removeEventListener('resize', updateHeightOnResize);
        },[]);

        useLayoutEffect(() => {
            if(divref.current !== null)
                divref.current.style.height = divHeight;
        }, [divHeight]);

        return(
        <div className={classname} ref={divref} style={{border: '1px border black'}}>
                <div style={{margin: '5px'}}>
                    <img src={mainlogo} className={globalstyles.responsiveblockimg}
                         style={{maxWidth: '600px', maxHeight: '500px', width: '100%'}}
                         alt="fancy logo" />
                    <MainPageLinks />
                    <div style={{margin: '10px 0'}}>
                        <div style={{textAlign: 'center'}}><a href="https://www.freepik.com/free-vector/abstract-waves-logo-concept-set-nine_8865999.htm">Image by starline</a> on Freepik</div>
                        <div style={{textAlign: 'center'}}><a href="https://www.freepik.com/free-vector/logo-icon-sunset_30500162.htm?query=beach%20resort%20logo#from_view=detail_alsolike">Image by nuart_design</a> on Freepik</div>
                        <div style={{textAlign: 'center'}}><a href="https://www.pexels.com/photo/cottages-in-the-middle-of-beach-753626/">Photo by Julius Silver</a> from Pexels</div>
                   </div>
                </div>
        </div>);
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

    return <GetComponent components={components} devicetype={mccontextref.devicetype}/>;
}

export default MainCenterComp;