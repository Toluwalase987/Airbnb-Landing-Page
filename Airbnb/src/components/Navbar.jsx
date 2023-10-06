import React from "react";
import logo from '../Images/Airbnblog.png'
import '../css/Navbar.css'




export default function Navbar() {
    return(
        <div className="navbar-container">
            <img className="logo" src={logo}/>
        </div>
    )
}