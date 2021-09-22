import React, { useEffect, useState } from 'react'
import './GetInTouch.css'
import { connect } from 'react-redux'
import { hitgetInTouchApi } from '../../../Redux/GetInTouch'
// import BgIamge from '../../../Assets/bg_Image.jpg'

const GetInTouch = (props) => {
    console.log('git',props)
    const [formDetails, setFormDetails] = useState({
        name: '',
        email: '', 
        mobile: '',
        overview: '',
})
const handleFormSubmit = (e) => {
    e.preventDefault()
    props.hitgetInTouchApi(formDetails)

}

const handleInputChange = (e) => {
    console.log(e.target.value)
    setFormDetails({...formDetails, 
    [e.target.name]: e.target.value });

}
    
    return (
        <div className="form-wrap" id="contactUs">
                <p className="form-contact-us">Contact Us</p>
            <div className="git-flex" style={{display:'flex'}}>
            <form onSubmit={handleFormSubmit} className="form-container">
                    <div className="app-form">
                        <div className="app-form-group1">
                            <input onChange={(e) => {handleInputChange(e)}} className="app-form-control1" placeholder="Full Name *" name="name" required />
                        </div>

                        <div className="app-form-group2">
                            <input type="email" onChange={(e) => {handleInputChange(e)}} className="app-form-control2" placeholder="Email *" name="email" required />
                        </div>

                        <div className="app-form-group3">
                            <input type="number" onChange={(e) => {handleInputChange(e)}} className="app-form-control3" type="tel" placeholder="Contact NO. *" maxLength="10" name="mobile" required />
                        </div>

                        <div className="app-form-group4">
                            {/* <input onChange={(e) => {handleInputChange(e)}} className="app-form-control4" placeholder="Message *" name="overview" required /> */}
                            <textarea id="w3review" onChange={(e) => {handleInputChange(e)}} className="app-form-control4" placeholder="Message *" name="overview" rows="1" cols="50" required/>

                        </div> 
                        <div className="app-form-group buttons">
                            <button className="app-form-button">Submit Details</button>
                        </div>
                    </div>
                    </form>
                    <div style={{marginRight:'2vw'}}>
                        <p className="git-para1">Let's Work Together</p>
                        <p className="git-para2">Contact us with the details of your project along with some information about your bussiness and let's get the discussing going</p>
                    </div>
                    </div>
        </div>
    )
}

// export default GetInTouch
const mapStateToProps = (state) => {
    // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
    return{
    getInTouch:state
    }
    }
    const mapDispatchToProps = dispatch => {
    return {
        hitgetInTouchApi : (data) => dispatch(hitgetInTouchApi(data))
    }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(GetInTouch)
