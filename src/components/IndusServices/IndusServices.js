import {React,useState,useEffect} from 'react'
import './IndusServices.css'

const IndusServices = (props) => {
    console.log('Indus Services props',props)
    const [IndusServices,setIndusServices] = useState()
    
    useEffect(() => {
        setIndusServices(props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetails.data)
        console.log('overview UseEffect',props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetails.data)
    }, [props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetailsSuccess])

    return (
        <div className="indus-services">
            <p className="digital-services">
                Digital Offerings
            </p>
            {
                IndusServices && IndusServices.map((IndusServicesElem,IndusServicesIndex)=> {
                    return(
                        <section className="Services-industry">
                            <p className="Services-elems-container">
                                {
                                IndusServicesElem.services.map((elem,index) => {
                                    return(
                                        <button className="Services-elem-list-">
                                            {elem}
                                        </button>

                                        // <section className="Services-elems">
                                        //     {/* <img src={overviewElem.image} alt="overview-broken-img" className="watermark-overview-img" /> */}
                                        //     <button className="Services-elem-list-">{elem}</button>
                                        // </section>
                                    )
                                })
                                }
                            </p>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default IndusServices
