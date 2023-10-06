import React from "react";
// import house1 from "/Images/house1.jpeg"
import star from "../Images/star1.png"
import '../css/Card.css'

export default function Card(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card-container">
            {badgeText &&  <div className="cardbadge">{badgeText}</div>}
            <div className="first-house">
                <img className="house1" src={`../src/Images/${props.item.coverImg}`}/>
                <div className="description">
                    <img className="star" src={star}/>
                    <p className="rating"><span className="number">{props.item.stats.rating}</span> ({props.item.stats.reviewCount}) {props.item.location}</p>
                </div>
                <div className="more-desc">
                    <p className="talk">{props.item.title}</p>
                    <h4>From ${props.item.price}<span className="person"> / person </span></h4>
                </div>
            </div>
        </div>
    )
}