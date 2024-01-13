import React from "react";
// import './Offers.css';
import '../Hero/Hero.css'
import exclusive_image from "../Assests/exclusive_image.png";


const Offers = () => { 
    return (<div>
        <div className="offers hero">
           <div className="offers-left hero-left">
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>Only on best sellers products</p>
            <button className="hero-latest-btn">Check Now</button>
           </div>
           <div className="offers-right hero-right">
            <img src={exclusive_image} alt="" />
           </div>
        </div>
        </div>
    );  
}

export default Offers;
