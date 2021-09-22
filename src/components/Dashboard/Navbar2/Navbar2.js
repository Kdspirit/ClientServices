import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import './Navbar2.css'
const Navbar2 = () => {
    return (
        <section className="navbar2-container">
            <p className="navbar2-address"><RoomIcon/>&nbsp; Marathahalli, Bangalore, 560037</p>
            <p className="navbar2-mail"><MailIcon/>&nbsp; Ask@infoidol.com</p>
            <p className="navbar2-timings"><WatchLaterIcon/>&nbsp; Office Hour: 10:00am - 7:30pm </p>
        </section>
    )
}

export default Navbar2
