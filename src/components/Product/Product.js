import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
const {name, img, seller, stock, price} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>{stock} pcs are available</p>
                <p> ${price}</p>
                <button className="main-button"
                onClick={()=> props.handleAddProduct(props.product)}
                > 
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;