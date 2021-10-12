import React, { useState } from 'react';
import useManageProd from '../../hooks/useManageProd';
import { addDbProd } from './manageprodDB';

const ManageProduct = () => {

    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState("");
    const [prod, setProd] = useManageProd();
    let newProd = [];
    // console.log(prod);

    const handleManageProd = (prodName, prodPrice) => {
        const prodObj = {
            name: prodName,
            price:prodPrice
        }
        if (prod.length > 0) {
            let newProdArray = [];
            for (const exists of prod) {      
                if (exists) {
                newProdArray = [exists];  
                    
                }
                newProd = [prodObj,...newProdArray];   
          
            }
        }
        else {
            newProd = [prodObj]; 
        }
        
        setProd(newProd);
        addDbProd(newProd);
    }

    return (
        <div>
            <h1>Manage Product</h1>
            <label>Product Name</label>
            <input onChange={event => setProdName(event.target.value)} type="text"/><br/>
            <label>Price</label>
            <input onChange={event => setProdPrice(event.target.value)} type="text" /><br />
            <button className="loginRegisterButton" onClick={()=>handleManageProd(prodName,prodPrice)}>Submit</button>
        </div>
    );
};

export default ManageProduct;