import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
import { BsArrowRight } from 'react-icons/bs';

const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity, supplierName
    } = product;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        // <div className='card col-md-4 text-center'>
        //     <img className='product-pic' src={img} alt="" />
        //     <h5>{name}</h5>
        //     <p>{description}</p>
        //     <h4>price: ${price}</h4>
        //     <h4>quantity: {quantity}</h4>
        //     <h6>Supplier Name: {supplierName}</h6>
        //     <button onClick={()=>navigateToInventory(_id)}>Update</button>
        // </div>
        <div className="col">
            <div className="card h-100 text-center text-white product-card pt-2">
                <img src={img} className="card-img-top product-pic w-50 mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p style={{ color: '#94A3B8' }} className="card-text">{description}</p>
                    <p style={{ marginTop: '-15px' }}>Quantity: {quantity}</p>
                    <h2 style={{ marginTop: '-15px' }}>${price}</h2>

                    <button className='update-btn' onClick={() => navigateToInventory(_id)}>Update <BsArrowRight></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Product;