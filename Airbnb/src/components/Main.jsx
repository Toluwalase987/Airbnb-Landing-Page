import React from "react";
import one from "../Images/airbnb2.jpeg"
import two from "../Images/airbnb1.jpg"
import three from "../Images/airbnb8.avif"
import four from "../Images/airbnb5.jpeg"
import five from "../Images/airbnb6.jpeg"
import six from "../Images/airbnb7.avif"
import seven from "../Images/airbnb4.jpeg"
import eight from "../Images/airbnb9.webp"
import nine from "../Images/airbnb3.jpeg"
import ten from "../Images/airbnb10.jpeg"
import eleven from "../Images/airbnb11.jpeg"
import twelve from "../Images/airbnb12.webp"
import '../css/Main.css'


export default function Main(){
    return(
        <div className="main-container">
            <div className="image-container">
            <img className="one"src={one}/>
            <img className="two" src={two}/>
            <img className="three" src={three}/>
            <img className="four" src={four}/>
            <img className="five" src={five}/>
            <img className="six" src={six}/>
            <img className="seven" src={seven}/>
            <img className="eight" src={eight}/>
            <img className="nine" src={nine}/>
            <img className="ten" src={ten}/>
            <img className="eleven" src={eleven}/>
            <img className="twelve" src={twelve}/>
            </div>
            <div className="body">
                <h1 className="header">Experience comfort wherever you are</h1>
                <p className="text">Have a peaceful and wonderful time with<br></br> family, friends and business associates<br></br> in whatever city you find yourself in.</p>
                <h2></h2>
            </div>
        </div>
        
    )
}