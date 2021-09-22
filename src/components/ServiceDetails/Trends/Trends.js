import React, { useEffect, useState} from 'react'
import './Trends.css'

const Trends = (props) => {
    console.log('Service trend',props)
    const [trend, setTrends] = useState()
    const [serviceName, SetServiceName] = useState()
    useEffect (() =>{
        if(props.SubService.SubService.subServiceApi.subServiceSuccess &&
            props.SubService.SubService.subServiceApi.subService.data){
                // SetServiceName(props.SubService.SubService.subServiceApi.subService.data.title)
                setTrends(props.SubService.SubService.subServiceApi.subService.data.trends)
            }
    },[props.SubService.SubService.subServiceApi.subServiceSuccess])

    useEffect (() => {
        if(props.SubService.SubService.subServiceApi.subServiceSuccess &&
            props.SubService.SubService.subServiceApi.subService.data.title){
                SetServiceName(props.SubService.SubService.subServiceApi.subService.data.title)
            }
    },[props.SubService.SubService.subServiceApi.subServiceSuccess])
    return (
        <div className="trend-wrap">
            <p className="latest-trend">--LATEST TRENDS--</p>
            <p className="service-name"><b>{serviceName}</b> latest trends</p>
            <div className="trend-element">
            {
                trend && trend.map((trendelem, trendindex) => {
                    return(
                            <section className="trend-names"> 
                                <p>{trendelem}</p>
                            </section>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Trends
