import react from "react";
import './style.css'
import logo from "../images/logo.jpeg"


function Navbar(){
    return (
        <nav>
        <img className="nav--logo" src={logo} width="200px"/>
        </nav>
    )
}


export default Navbar