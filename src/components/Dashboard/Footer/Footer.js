import React from 'react'
import logo from '../../../Assets/complogo.png'
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';

import './Footer.css'
import { Email } from '@material-ui/icons';

const Footer = () => {
    return (
        <div>
            <div className="footer-container" id="footer-container">
                <div className="AboutUs">
                    <p className="aboutus-para">About us</p>
                    <p>Infoidol is and internet, edtech Information Technologies and Services Company based out of Bangalore and Jamshedpur</p>
                </div>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="contact-us">
                    <p className="mail"><MailIcon/>&nbsp; Ask@infoidol.com</p>
                    <p className="call"><CallIcon/>&nbsp;&nbsp;9380727561 </p>
                    <p className="navbar2-address"><RoomIcon/>&nbsp; Marathahalli, Bangalore, 560037</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

