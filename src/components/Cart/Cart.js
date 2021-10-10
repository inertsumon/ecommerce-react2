import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
   
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Cart</h3>
        <div className="cart-container2">          
                <div className="cart-details">
                <h4>Items Ordered:</h4>
                <p>Total: </p>
                <p>Shipping:</p>
                <p>tax:</p>
                <p>Grand Total:</p>
            </div>
            <div><h5>{totalQuantity}</h5>
                <p>${total.toFixed(2)}</p>
                <p>${shipping}</p>
                <p>${tax.toFixed(2)}</p>
                    <p>${grandTotal.toFixed(2)}</p>
                    {props.children}
                </div>
                
            </div>
            
            </div>
    );
};

export default Cart;