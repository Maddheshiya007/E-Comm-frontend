import React from "react";
import './DiscriptionBox.css';

const DescriptionBox = ()=>{
    return (
        <div className="discriptionbox">
            <div className="discriptionbox-navigator">
                <div className="discriptionbox-nav-box">Description</div>
                <div className="discriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="discriptionbox-discription">
                <p>An e-commerce website is an online plateform that facilitates buying and selling of products or services over the internet serve as a virtual marketplace where businesses and individual showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce accessibility, and the global reach they offer.</p>
                <p>
                    E-commerce websites typically display products or services along with detailed descriptions, images, pricesand any availavel variations (e.g. sizes, colors) Each  prouduct usulally has its own dedicated page with relevant information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;