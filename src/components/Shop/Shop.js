import React, { useState } from 'react';
import fakeData from '../../fakeData';
import "./Shop.css"
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length
        addToDatabaseCart(product.key, count)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pro => <Product
                            key={pro.key}
                            productShowButton={true}
                            handleAddProduct={handleAddProduct}
                            product={pro}></Product>)
                    }
                </div>
                
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <div>
                <h4 className="header-text">All Right Reserved @ema-john by <a className="name" target="blank" href="https://github.com/elias-soykat">Elias Soykat</a></h4>
            </div>
        </div>

    );
};

export default Shop;