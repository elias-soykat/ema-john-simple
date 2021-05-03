import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';


const Product = (props) => {
const {name, img, seller, stock, price, key} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
                <br/>
                <p><small>A Product of : {seller}</small></p>
                <p>{stock} pcs are available</p>
                <p> ${price}</p>
              {props.productShowButton &&  <button className="main-button"
                onClick={()=> props.handleAddProduct(props.product)}
                > 
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;