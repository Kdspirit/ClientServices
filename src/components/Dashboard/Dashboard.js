import React from 'react'

import Dummycomp from '../Dashboard/Dummycomp/Dummycomp'
import NavBar from '../Dashboard/Navbar/NavBar'
import ProjectIndustries from '../Dashboard/ProjectIndustries/ProjectIndustries'
import WeEngineer from '../Dashboard/WeEnginer/WeEngineer'
import AboutUs from '../Dashboard/AboutUs/AboutUs'
import Services from '../Dashboard/Services/Services'
import WeEngineerBanner from '../Dashboard/WeEngineerBanner/WeEngineerBanner'
import WorkProcess from '../Dashboard/WorkProcess/WorkProcess'
import Aspects from '../Dashboard/Aspects/Aspects'
import TeamMember from '../Dashboard/TeamMember/TeamMember'
import Connect from '../Dashboard/Connect/Connect'
import Footer from '../Dashboard/Footer/Footer'
import GetInTouch from '../Dashboard/GetIntouch/GetInTouch'

const Dashboard = () => {
    return (
        <div id="dashboard">
            <NavBar/>
          {/* <Navbar2/> */}
          {/* <Banner/> */}
            <WeEngineerBanner/>
            <WeEngineer/>
            <AboutUs/>
            <Services/>
            <WorkProcess/>
            <ProjectIndustries/>
            <Dummycomp/>
            <Aspects/>
            <TeamMember/>
            <Connect/>
            <GetInTouch/>
            <Footer/>
        </div>
    )
}

export default Dashboard
