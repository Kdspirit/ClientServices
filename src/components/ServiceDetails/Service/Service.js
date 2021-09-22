import React,{useEffect, useState} from 'react'
import './Service.css'

const Service = (props) => {
    console.log('service',props)
    const [sservice,Setsservice] = useState()
    const [sserviceName, SetsserviceName] = useState()

    useEffect (() => {
        if(props.SubService.SubService.subServiceApi.subServiceSuccess &&
            props.SubService.SubService.subServiceApi.subService.data){
                // SetsserviceName(props.SubService.SubService.subServiceApi.subService.data.service_name)
                Setsservice(props.SubService.SubService.subServiceApi.subService.data.services)
            }
    },[props.SubService.SubService.subServiceApi.subServiceSuccess])
    return (
        <div className="sservice-wrap">
            <p className="sservice-heading">Everything the online side of your business needs</p>
            <div>
            {
                sservice && sservice.map((sservicelem,sserviceindex) =>{
                    return(
                        <div className="sservice-container">
                            {/* <p>{sserviceName}</p> */}
                            <img className="sservice-image" src={sservicelem.image} alt=""/>
                            <p className="sservice-name">{sservicelem.name}</p>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Service
