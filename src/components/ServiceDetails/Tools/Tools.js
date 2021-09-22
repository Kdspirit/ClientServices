import React, { useState, useEffect } from 'react'
import './Tools.css'

const Tools = (props) => {
    const [tools, setTools] = useState();
    useEffect (() => {
        if(props.SubService.SubService.subServiceApi.subServiceSuccess &&
            props.SubService.SubService.subServiceApi.subService.data.tools){
                setTools(props.SubService.SubService.subServiceApi.subService.data.tools)
            }
    },[props.SubService.SubService.subServiceApi.subServiceSuccess])
    return (
        <div className="tools-wrap">
            <p  className="Tech-heading">--TECHNOLOGIES--</p>
            <p className="tech-sub-heading">Technologies We Work With</p>
            <div className="tools-containerss">
            {
                tools && tools.map((toolselem,toolindex) =>{
                    return(
                        <div className="tools-container">
                            {/* <p>{sserviceName}</p> */}
                            <img className="tools-image" src={toolselem.image} alt=""/>
                            <p className="tools-name">{toolselem.name}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Tools
