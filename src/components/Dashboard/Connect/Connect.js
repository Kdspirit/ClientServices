import React from 'react'
import linkedIn from '../../../Assets/linkedIn.jpg'
import fb from '../../../Assets/fb.jpg'
import twitter from '../../../Assets/twitter.jpg'
import insta1 from '../../../Assets/insta1.jpg'
import './Connect.css'
import { Link } from 'react-router-dom'
const Connect = () => {
    return (
        <section className="connect-container">
            <p className="connect-title">
                Connect with us
            </p>
            <section className="connect-us-logos">
                <a href='https://www.facebook.com/Infoidol369/' rel="noreferrer" target="_blank">
                    <div className="social-media">
                        <img src={linkedIn} alt="" className="social-media-icons linkedin-logo" />
                    </div>
                </a>

                <a href='https://www.instagram.com/_infoidol_/?igshid=rfrcy8w2rw4s' rel="noreferrer" target="_blank">
                <div className="social-media">
                    <img src={insta1} alt="" className="social-media-icons insta-logo " />
                </div>
                </a>
                
                <a href='https://www.linkedin.com/company/infoidol/?viewAsMember=true' rel="noreferrer" target="_blank">
                <div className="social-media">
                    <img src={fb} alt="" className="social-media-icons fb-logo " />
                </div>
                </a>

                <a href='https://twitter.com/_infoidol_?s=08' rel="noreferrer" target="_blank">
                <div className="social-media">
                    <img src={twitter} alt="" className="social-media-icons twitter-logo " />
                </div>
                </a>
            </section>
        </section>
    )
}

export default Connect
