import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    console.log(props.review);
    const {name, quantity, price, seller} = props.review
    return (
            <div className="review-info">
                <h4>{name}</h4>
                <div className="display">
                    <div className="remove-button">
                        <br/>
                        <br/>
                        <p>${price}</p>
                        <p>sold by: <b>{seller}</b></p>
                        <h3>Quantity: {quantity}</h3>
                        <button className="main-button">Remove</button>
                    </div>
                    <div className="shipping-rules">
                        <br/>
                        <h3>Shipping options</h3>
                        <br/>
                        <input type="radio" name="shipping" value="8-10" id="slowest"/>
                        <b><label htmlFor="slowest">8-10 Business Days</label></b><br/>
                            <p>$0-free shipping</p>

                        <input type="radio" name="shipping" value="5-7" id="slow"/>
                        <b><label htmlFor="slow">5-7 Business Days</label></b><br/>
                            <p>$0-free shipping</p>

                        <input type="radio" name="shipping" value="2-4" id="fast"/>
                        <b><label htmlFor="fast">2-4 Business Days</label></b><br/>
                            <p>$0-free shipping</p>
                    </div>
                </div>
            </div>
    );
};

export default ReviewItem;