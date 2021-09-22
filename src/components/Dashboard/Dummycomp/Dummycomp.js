import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import './Dummycomp.css'

const Dummycomp = () => {
    return (
        <div>
            <div className="Dummy-block">
                <p className="block-para">Let's talk with us about bussiness & IT Solution</p>
                <a href="#contactUs">
                    <button><MailOutlineIcon/>&nbsp;&nbsp;Get in Touch</button></a>
                <a href="#footer-container"><button><CallIcon/>&nbsp;&nbsp;Contact Us</button></a>
            </div>
        </div>
    )
}

export default Dummycomp
