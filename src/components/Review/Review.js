import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts)
    }, [])
    return (
        <div className="total-review">
            <div className="review-cost">
                {
                    cart.map(rv => <ReviewItem review={rv}></ReviewItem>)
                }
            </div>
            <div className="review-summary">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;