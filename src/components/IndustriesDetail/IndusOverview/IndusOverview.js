import {React,useState,useEffect} from 'react'
import './IndusOverview.css'

const IndusOverview = (props) => {
    console.log('Industries overview props',props)
    const [overview,setOverview] = useState()
    
    useEffect(() => {
        setOverview(props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetails.data)
        console.log('overview UseEffect',props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetails.data)
    }, [props.IndustryDetail.IndustriesDetails.projectsIndustriesDetailsGetApi.projectsIndustriesDetailsSuccess])

    return (
        <section className="overview-container">
            {/* <p className="overview">OVERVIEW</p> */}
            <div>
            {
                overview && overview.map((overviewElem,overviewIndex)=> {
                    return(
                        <section className="overviewElem-industry">
                            <p className="indus-title">{overviewElem.industries}</p>
                            <img src={overviewElem.image} alt="overview-broken-img" className="indus-overview-img" />
                            <p className="overview-elem-wrapper">
                            {
                            overviewElem.overview.map((elem,index) => {
                                return(
                                    <section className="overview-elems">
                                        {/* <img src={overviewElem.image} alt="overview-broken-img" className="watermark-overview-img" /> */}
                                        <p className="overview-elem-list-"><span className="emji">&#9758;</span> {elem}</p>
                                    </section>
                                )
                            })
                            
                            } 
                            </p>
                        </section>
                    )
                })
            }
        </div>
        </section>
    )
}

export default IndusOverview
