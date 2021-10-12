import React from 'react';
import "./ManageProduct.css"
const ProdCart = (props) => {
    const { prodCart } = props;
    // console.log(prodCart);
    const { price,name } = prodCart;
    return (
        <div>
            <h2>Add to Cart</h2>
            <div className="cart-container3">
                <h3>Name: {name}</h3>
                <h3>Price: ${price}</h3>
            </div>
        </div>
    );
};

export default ProdCart;