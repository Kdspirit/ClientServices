import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { hitprojectserviceAPI } from '../../../Redux/Service/ServicesActions'
import {Link} from 'react-router-dom'


import './Services.css'


const Services = (props) => {
    // console.log( 'NavBar Services props', props)

    const [service,setService] = useState();
    // console.log('service props',props)
    const handleServiceClick = (id) => {
        sessionStorage.setItem('service_id',id)
    }

    useEffect(() => {
        props.hitprojectserviceAPI()
    }, [])

    useEffect(() =>{
        if(props.Services.ServicesReducers.projectserviceApi.projectserviceSuccess && 
            props.Services.ServicesReducers.projectserviceApi.projectservice.data){
                setService( props.Services.ServicesReducers.projectserviceApi.projectservice.data)
            }
    },[props.Services.ServicesReducers.projectserviceApi.projectserviceSuccess])
    return (
        <div className="service-wrap">
            <p className="service-para">Our Services</p>
            <p className="service-para2">WE WILL SHOW YOU THE WAY TO SUCESS</p>
            {
                service && service.map((servicelem, serviceindex) => {
                    return(
                        <section className="" style={{cursor:'pointer',display:'inline-block',borderRadius:'10px', marginLeft: '3rem'}}>
                        <Link to='/service-detail' style={{textDecoration:'none'}}>
                        <div onClick={() => handleServiceClick(servicelem.id)}>
                            <div className="service-card" >
                                <img className="service-img" src={servicelem.image} alt="brokenimg"/>
                                <p className="service-title">{servicelem.title}</p>
                            </div>
                        </div>
                        </Link>
                        </section>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
    return{
    Services :state
    }
    }
    const mapDispatchToProps = dispatch => {
    return {
        hitprojectserviceAPI : () => dispatch(hitprojectserviceAPI())
    }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Services)
