import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
    }

    const tax = total/10;

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }
    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <h5>Product Price: $ {formatNumber(total)}</h5>
            <p>Shipping Cost: $ {shipping} </p>
            <p><small>Tax + VAT: $ { formatNumber(tax)}</small></p>
            <hr/>
            <b>Total Price: $ { formatNumber(total + tax + shipping)}</b>
            <br/>
            <br/>
            <Link to="/review"><button className="review-button">
                Review Order</button></Link>
        </div>
    );
};

export default Cart;