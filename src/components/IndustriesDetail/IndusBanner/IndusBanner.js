import {React,useState,useEffect} from 'react'
import './IndusBanner.css'
const IndusBanner = (props) => {
    console.log('Industries Banner props',props)
    const [banner,setBanner] = useState()

    useEffect(() => {
        setBanner(props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetails.data)
        console.log('banner UseEffect',props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetails.data)
    }, [props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetailsSuccess])
    return (
        <div>
            {
                banner && banner.map((elem,index)=> {
                    return(
                        <section className="banner-industry">
                            <img src={elem.banner} alt="banner-broken-img" className="indus-banner-img" />
                        </section>
                    )
                })
            }
        </div>
    )
}

export default IndusBanner
