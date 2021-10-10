import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [displayProducts, setDisplayProducts] = useState([]);


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    const [dstocks, setStocks] = useState([]);

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        let newStocks = [];

        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);            
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
            newStocks = [exists.quantity];  
            // console.log(newStocks);
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
            newStocks = [product.quantity]; 
          
        }
        setCart(newCart);
        setStocks(newStocks);
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        
        if (!isNaN(searchText)) {
            const matchedProducts2 = products.filter(product => product.price.toString().includes(searchText));
            setDisplayProducts(matchedProducts2);
        }
        else {
            const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        }
        
        
    }

    return (
        <>
            <div className="search-container">
                <input className="input"
                    type="search"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            dstocks={dstocks}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-regular">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;