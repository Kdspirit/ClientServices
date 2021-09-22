import React from 'react'
import service from '../../../Assets/chooseService.jpg'
import reqMeeting from '../../../Assets/reqMeeting.jpg'
import planning from '../../../Assets/planning.jpg'
import Hurray from '../../../Assets/Hurray.jpg'
import './WorkProcess.css'

const WorkProcess = () => {
    return (
        <div className="work-process-container">
            <p className="how-title">How it Works</p>
            <p className="how-title-process">Check Out Our Work <span className="xyzabc"><em>Process</em></span></p>
            <div className="work-process">
                <div className="choose-service wp-wrapper">
                    <img src={service} alt="" className="choose-service-img workprocess-img" />
                    <p className="choose-service-desc wp-desc">
                    Choose a Service
                    </p>
                </div>

                <div className="request-meeting wp-wrapper">
                    <img src={reqMeeting} alt="" className="request-meeting-img workprocess-img" />
                    <p className="choose-service-desc wp-desc">
                    Request a Meeting
                    </p>
                </div>

                <div className="receive-plan wp-wrapper">
                    <img src={planning} alt="" className="receive-plan-img workprocess-img" />
                    <p className="choose-service-desc wp-desc">
                    Receive Custom Plan
                    </p>
                </div>

                <div className="do-it wp-wrapper">
                    <img src={Hurray} alt="" className="do-it-img workprocess-img" />
                    <p className="choose-service-desc wp-desc">
                    Let’s Make it Happen
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess
