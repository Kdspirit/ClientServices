import React, {useEffect, useState} from 'react'
import './Banner.css'

const Banner = (props) => {
    console.log('Banner prop',props)
    const [banner, setBanner] = useState()
    useEffect(() => {
        if(props.SubService.SubService.subServiceApi.subServiceSuccess &&
            props.SubService.SubService.subServiceApi.subService.data.banner){
                setBanner(props.SubService.SubService.subServiceApi.subService.data.banner)
            }
    },[props.SubService.SubService.subServiceApi.subServiceSuccess])
    return (
        <div>
            <img className="sub-service-banner" src={banner} />
        </div>
    )
}

export default Banner
