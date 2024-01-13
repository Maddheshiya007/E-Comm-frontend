import React from "react";
import "./NewsLetter.css";
import '../Hero/Hero.css'

const NewsLetter = () => {
    return (
        <div className="newsletter hero">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated.</p>
            <div className="newsletter-form">
                <input type="email" placeholder="Enter your email address" />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;