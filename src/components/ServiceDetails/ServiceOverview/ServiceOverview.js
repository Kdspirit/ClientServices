import React,{useState,useEffect} from 'react'
import './ServiceOverview.css'

const ServiceOverView = (props) => {
    console.log('overview',props)
    const [desImage,setdesImage]= useState();
    const [descrip, setDescription] = useState();

    useEffect (() =>{
        if(props.SubService.SubService.subServiceApi.subServiceSuccess &&
            props.SubService.SubService.subServiceApi.subService.data){
                setdesImage(props.SubService.SubService.subServiceApi.subService.data.des_image)
                setDescription(props.SubService.SubService.subServiceApi.subService.data.description)
            }
    },[props.SubService.SubService.subServiceApi.subServiceSuccess])
    return (
        <div className="service-overview">
            <p className="overview-heading"> Spotlight</p>
            <div className="service-overview-flex">
                <p className="sub-service-descip">{descrip}</p>
                <img className="sub-service-desimage" src={desImage} alt="brokenImage"/>
            </div>
        </div>
    )
}

export default ServiceOverView
