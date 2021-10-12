import React from 'react';
import "./Inventory.css";

const Inventory = (props) => {
    // console.log(props.product);
   
    const {name, price,image} = props.product;
    return (
        <div className="inventory-container">
            <img className="inv-img" src={image} alt="" />
            <div className="inventory-details">
            <h3>Product Name: {name}</h3>
                <h3>Product Price: ${price}</h3>
                <button className="loginRegisterButton" onClick={()=>props.handleDelete(name)}>Delete</button>
            </div>
            
           
        </div>
    );
};

export default Inventory;