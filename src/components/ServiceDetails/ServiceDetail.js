import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { hitsubServiceAPI } from '../../Redux/SubService'
import Footer from '../Dashboard/Footer/Footer'
import NavBar from '../Dashboard/Navbar/NavBar'
import Banner from './Banner/Banner'
import Service from './Service/Service'
import ServiceOverView from './ServiceOverview/ServiceOverview'
import SubService from './SubService/SubService'
import Tools from './Tools/Tools'
import Trends from './Trends/Trends'


const ServiceDetail = (props) => {

    console.log('detailpage',props)

    useEffect (() => {
        props.hitsubServiceAPI(sessionStorage.getItem('service_id'))
    },[])

    return (
        <div>
            <NavBar/>
            <Banner {...props}/>
            <ServiceOverView {...props}/>
            <SubService {...props} />
            <Trends {...props}/>
            <Service {...props}/>
            <Tools {...props}/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
    return{
    SubService:state
    }
    }
    const mapDispatchToProps = dispatch => {
    return {
        hitsubServiceAPI : (service_id) => dispatch(hitsubServiceAPI(service_id))
    }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail)
