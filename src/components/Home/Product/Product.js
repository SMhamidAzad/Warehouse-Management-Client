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
        <div className="col">
            <div
             data-aos="zoom-in-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
             className="card h-100 text-center text-white product-card pt-2">
                <img src={img} className="card-img-top product-pic w-50 mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p style={{ color: '#94A3B8' }} className="card-text pb-2">{description}</p>
                    <div className='d-flex justify-content-between'>
                        <p style={{ marginTop: '-15px' }}>Quantity: {quantity}</p>
                        <h2 style={{ marginTop: '-15px' }}>${price}</h2>
                    </div>

                    <button className='update-btn' onClick={() => navigateToInventory(_id)}>Update <BsArrowRight></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Product;