import {React,useEffect} from 'react'
import { connect } from 'react-redux'
import { hitprojectIndustriesDetailsApi } from '../../Redux/IndustryDetail/IndustryDetailAction'
import NavBar from '../Dashboard/Navbar/NavBar'
import IndusServices from '../IndusServices/IndusServices'
import IndusBanner from './IndusBanner/IndusBanner'
import IndusOverview from './IndusOverview/IndusOverview'
import Services from '../Dashboard/Services/Services'
import Footer from '../Dashboard/Footer/Footer'

const IndustriesDetail = (props) => {
    console.log('Industries Detail props',props)
    useEffect(() => {
        props.hitprojectIndustriesDetailsApi(sessionStorage.getItem('industry_id'));
    }, [])
    return (
        <div>
            <NavBar/>
            <IndusBanner {...props}/>
            <IndusOverview {...props}/>
            <IndusServices {...props}/>
            <Services/>
            <Footer/>

</div>
    )
}
const mapStateToProps = (state) => {
    return{
        IndustryDetail:state
    }
    }
    const mapDispatchToProps = dispatch => {
    return {
        hitprojectIndustriesDetailsApi : (industry_id) => dispatch(hitprojectIndustriesDetailsApi(industry_id))
    }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(IndustriesDetail)

// export default IndustriesDetail
