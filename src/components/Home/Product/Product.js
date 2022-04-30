import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name,img,description,price,quantity,supplierName
    }=product;
    return (
        <div className='card col-md-4 text-center'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{description}</p>
            <h4>price: ${price}</h4>
            <h4>quantity: {quantity}</h4>
            <h6>Supplier Name: {supplierName}</h6>
            <Link to='/inventory'>Update</Link>
        </div>
    );
};

export default Product;