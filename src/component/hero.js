import react from "react";
import './style.css'
// 
// import  photo from './images/hero'
import logo from "../images/hero.svg"


function Hero(){
    return (
        <section>
            <img src={logo} className="hero--photo" />
            <h1 className="hero-header"> Online Experiences </h1>
            <p className="hero-text"> Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home</p>

        </section>       
    )
}


export default Hero