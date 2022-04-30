import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,name,img,description,price,quantity,supplierName
    }=product;
    const navigate = useNavigate();
    const navigateToInventory = id=>{
         navigate(`/inventory/${id}`)
    }
    return (
        <div className='card col-md-4 text-center'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{description}</p>
            <h4>price: ${price}</h4>
            <h4>quantity: {quantity}</h4>
            <h6>Supplier Name: {supplierName}</h6>
            <button onClick={()=>navigateToInventory(_id)}>Update</button>
        </div>
    );
};

export default Product;