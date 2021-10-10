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

    const shipping = totalQuantity => {
        if (totalQuantity) {
            if (totalQuantity <= 5) {
                return 15;
            }
            else {
                return 30;
            }
        }
        else {
            return 0;
        }
        
    }
    
    let taxCalculate = (total + shipping(totalQuantity));
    const tax = taxCalculate => {
        if (taxCalculate) {
            if (taxCalculate <= 500) {
                return taxCalculate * .10;
            }  
            else {
                return taxCalculate * .20;
            }
        }
        else {
            return 0;
        }
        
    } 
    const grandTotal = total + shipping(totalQuantity) + tax(taxCalculate);
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
                <p>${shipping(totalQuantity)}</p>
                <p>${tax(taxCalculate).toFixed(2)}</p>
                    <p>${grandTotal.toFixed(2)}</p>
                    {props.children}
                </div>
                
            </div>
            
            </div>
    );
};

export default Cart;