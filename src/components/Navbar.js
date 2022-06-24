import React from "react"
import "../index.css"
import logo from "../Images/unilogo.png"


export default function Navbar(){
    return(
        <nav>
        <img src={logo} className="nav--logo" />
        <h3 className="nav--logoText">Join,Upskill and kickstart your career</h3>
        <h4 className="nav--text">React Projects - Project 1</h4>
        </nav>
    );
}