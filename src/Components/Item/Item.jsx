import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div className="item"> 
           <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)} alt="" /></Link> 
            <p>{props.name}</p>
              <div className="item-prices">
                <p className="item-price-new">${props.new_price}</p>
                <p className="item-price-old">${props.old_price}</p>
            </div>
        </div>
    );
}

export default Item;