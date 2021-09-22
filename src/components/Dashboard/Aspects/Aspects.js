import React from 'react'
import uidesign from '../../../Assets/ui-design.png'
import sharedfolder from '../../../Assets/shared-folder.png'
import database from '../../../Assets/database.png'
import meeting from '../../../Assets/meeting.jpg'
import './Aspects.css'

const Aspects = () => {
    return (
        <section className="aspects-container">
            <div className="aspects-img">
                <img src={meeting} alt="" className="meeting-in" />
            </div>
            <div className="why-infoidol">
                <p className="why-container">Why Infoidol </p>
                <p className="aspects-services">
                    We deal with the aspects of <br /> professional <em>IT Services</em>
                </p>
                <p className="aspects-brief">
                    Our IT services converge business and technology experts to help to manage business processes of all categories.
                </p>

                <div className="product-designs">
                    <p className="product-designs-img">
                        <img src={uidesign} alt="" className="designs-img" />
                    </p>
                    <div className="product-designs-container">
                        <p className="product-designs-title">Product Designs</p>
                        <p className="product-designs-desc">Our firm is expert to create an efficient user interface that makes user interaction is lively.</p>
                    </div>
                </div>

                <div className="product-designs">
                    <p className="product-designs-img">
                        <img src={sharedfolder} alt="" className="designs-img" />
                    </p>
                    <div className="product-designs-container">
                        <p className="product-designs-title">Maintain App Data</p>
                        <p className="product-designs-desc">We Create the optimal platform to develop and run digital applications for our clients app.</p>
                    </div>
                </div>

                <div className="product-designs">
                    <p className="product-designs-img">
                        <img src={database} alt="" className="designs-img" />
                    </p>
                    <div className="product-designs-container">
                        <p className="product-designs-title">DB & Analysis</p>
                        <p className="product-designs-desc">Statistical analysis to help an organization to gain insights from large information web sets.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aspects
