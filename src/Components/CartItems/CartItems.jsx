import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'
import {loadStripe} from '@stripe/stripe-js';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    let carts =[];
    for(let i = 0; i<all_product.length;i++){
        if(cartItems[all_product[i].id]>0){
            carts.push({
                name:all_product[i].name,
                qty:cartItems[all_product[i].id],
                price:all_product[i].new_price
            })
        }
    } 

    const CheckOut = async ()=>{

        const stripe = await loadStripe('pk_test_51OZdLxSDBAKiS622gcNsJ3ZBVBDeZcLt4hChXr7DY3XVOk9lQF7N5ory61o8WBv1nFeE3eUf43nuV4006kQ9DR86004X2k1NCn');

        const body = {
            products:carts
        }
        const headers = {
            'Content-Type':'application/json'
        }

        let response = await fetch('http://localhost:4000/create-checkout-session',{
            method:'POST',
            headers:headers,
            body:JSON.stringify(body)
        })

        let session = await response.json();

        const result = await stripe.redirectToCheckout(
            {sessionId:session.id}
        )

        if(result.error) console.log(result.error);

    }
    // console.log(cartItems);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e,i) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={i}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} className="carticon-product-icon" alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    )

                }
                return null;

            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" name="" id="promo code" />
                        <button> Submit</button>
                    </div>
                </div>
                    <button onClick={CheckOut}>PROCEED TO CHECKOUT</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartItems;