import {React,useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { hitprojectIndustriesApi } from '../../../Redux/ProjectIndustries/ProjectIndustriesAction'
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import './ProjectIndustries.css'

const ProjectIndustries = (props) => {
    console.log('props indus',props)
    const [industries,setInddustries] = useState();
    const handleIndustryClick = (id) => {
        sessionStorage.setItem('industry_id',id)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        arrows: false,
    };
    useEffect(() => {
        props.hitprojectIndustriesApi()
        // setInddustries(props.ProjectIndustries.Industries.rojectsIndustriesGetApi.projectsIndustries.data)
        console.log('set Industries',props.ProjectIndustries.Industries.projectsIndustriesGetApi.projectsIndustries.data)
    }, [])

    useEffect(() => {
        if(props.ProjectIndustries.Industries.projectsIndustriesGetApi.projectsIndustriesSuccess &&
            props.ProjectIndustries.Industries.projectsIndustriesGetApi.projectsIndustries.data){
                setInddustries(props.ProjectIndustries.Industries.projectsIndustriesGetApi.projectsIndustries.data)
            }
    }, [props.ProjectIndustries.Industries.projectsIndustriesGetApi.projectsIndustriesSuccess])
    return (
        <div className="project-industries">
            <p className="product-categories">
            Product Categories
            </p>
        <Slider {...settings}>
            {
                industries && industries.map((industriesElem,industriesIndex) => {
                    return(
                        <section className="industries-slider" onClick={() => handleIndustryClick(industriesElem.id)}>
                        <Link to='/industry-detail' style={{textDecoration:'none'}}>
                            <img className="industriesElem-img" src={industriesElem.image} alt="indus-img-broken" />
                            <div className="industriesElem-name">{industriesElem.industries}</div>
                        </Link>
                        </section>
                    )
                })
            }
        </Slider>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        ProjectIndustries : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hitprojectIndustriesApi: () => dispatch(hitprojectIndustriesApi()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndustries)
// export default ProjectIndustries
