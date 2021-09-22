import React from 'react'
import office1 from '../../../Assets/officeEnv.png'
// import office2 from '../../Assets/office2.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className="about-us-container">
        <div className="about-us-wrapper">
            {/* <p className="about-us-title">About Us</p> */}
            <p className="about-us-brief">We are here to IT Solution with <br /> years of <span style={{color: '#2d4a8a'}}><em> experience</em></span></p>
            <p className="about-us-desc">
            Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors. And the smart design of any website is the starting point.
            <br /> We have a special team for website style who has been involved in designing professional websites of all categories.
            </p>

            <ul className="about-us-list">
                <li><span style={{fontSize: '1.5rem'}}>&#9996;</span> Web And Mobile Application</li>
                <li><span style={{fontSize: '1.5rem'}}>&#9996;</span> New Domain Registration</li>
                <li><span style={{fontSize: '1.5rem'}}>&#9996;</span> Improving Our Website Design</li>
                <li><span style={{fontSize: '1.5rem'}}>&#9996;</span> Web & Email Hosting Services</li>
                <li><span style={{fontSize: '1.5rem'}}>&#9996;</span> Digital Marketing</li>
            </ul>
            <p className="about-us-helpline">Call to ask any question:<strong> +91 93807 27561</strong></p>
        </div>

        <div className="about-us-imgs">
            <img src={office1} alt="" className="about-us-office1" />
            {/* <img src={office2} alt="" className="about-us-office2" /> */}
        </div>
        </section>
    )
}

export default AboutUs
