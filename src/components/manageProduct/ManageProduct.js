import React, { useState } from 'react';
import useManageProd from '../../hooks/useManageProd';
import Inventory from '../Inventory/Inventory';
import { addDbProd, getDbProd, removeFromDb } from './manageprodDB';
import "./ManageProduct.css";
import ProdCart from './ProdCart';

const ManageProduct = () => {

    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState("");
    const [prodLink, setProdPiclink] = useState("");

    const [prod, setProd] = useManageProd();
    const [prodCart, setProdCart] = useState([]);

    let newProd = [];
    // console.log(prod);

    const handleManageProd = (prodName, prodPrice,prodLink) => {
        const prodObj = {
            name: prodName,
            price:prodPrice,
            image:prodLink
        }
        if (prod.length > 0) {
            let newProdArray = [];
            for (const exists of prod) {      
                if (exists) {
                newProdArray = [exists];  
                    
                }
                newProd = [...newProdArray,prodObj];   
          
            }
        }
        else {
            newProd = [prodObj]; 
        }
        
        setProd(newProd);
        addDbProd(newProd);
    }

    const handleDelete = (name) => {
        removeFromDb(name);
        const exists = getDbProd();
        const product = JSON.parse(exists);
        console.log(product);
        setProd(product);
    }
    const handleAddCart = (product) => {
        // console.log(product);
        setProdCart(product);
    }

    return (
        <div>
            <h1>Manage Product</h1>
            <div className="form">
            
            <label>Product Name</label>
            <input onChange={event => setProdName(event.target.value)} type="text"/><br/>
            <label>Price</label>
            <input onChange={event => setProdPrice(event.target.value)} type="number" /><br />
            <label>Images</label>
            <input onChange={event => setProdPiclink(event.target.value)} type="text" /><br />

            <button className="loginRegisterButton" onClick={() => handleManageProd(prodName, prodPrice,prodLink)}>Submit</button>
            </div>
            
            <>
            <h1>Welcome to Inventory</h1>
            <div className="product-container2">
                {prod.length>0?
                    prod.map(product => <Inventory
                        product={product}
                        handleDelete={handleDelete}
                        handleAddCart={handleAddCart}
                    ></Inventory>) :
                       <></>
                }
                </div>
                <div>
                    {
                        <ProdCart
                        prodCart={prodCart}
                        ></ProdCart>
                    }
                </div>
                </>
        </div>
    );
};

export default ManageProduct;