import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useReload from '../../hooks/useReload';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isReload, setIsReload] = useReload()
    useEffect(() => {
        const url = `https://blooming-hollows-74511.herokuapp.com/product/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [id, isReload]);


    const UpdateQuantity = (newQuantity) => {
        const url = `https://blooming-hollows-74511.herokuapp.com/product/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload)
                // alert('successfully updated quantity!!!');
            })
    }
    const handleDelivered = () => {
        const productQuantity = product.quantity;
        const newQuantity = (productQuantity - 1);

        console.log(newQuantity);
        UpdateQuantity(newQuantity);
    }
    const handleUpdateQuantity = e => {
        e.preventDefault();
        const prouductQuantity = product.quantity;
        const updateQuantity = parseInt(e.target.quantity.value) + parseInt(prouductQuantity);
        console.log(typeof updateQuantity);
        UpdateQuantity(updateQuantity)
    }
    return (

        <div className='inventory-container pt-5'>
            <div className="container">
                <div className="row pt-5 inventory pb-3">
                    <div className="col-md-4">
                        <img className='inventory-pic' src={product.img} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <div className='d-flex'>
                            <p className='fw-bold pe-3'>Quantity: {product.quantity}</p>
                            <p className='fw-bold pe-3'>Price: {product.price}</p>
                            <p>Id: {product._id}</p>
                        </div>
                        <button style={{ marginTop: '-10px' }} className='update-btn mb-3' onClick={() => handleDelivered()}>Delivered</button>
                        <form className='form-style' onSubmit={handleUpdateQuantity}>
                            <p >Do you want undate your product quantity?</p>
                            <input type="text" name="quantity" id="" placeholder='Enter your quantity' />
                            <button className='update-btn py-2 btn '>Update Quantity</button>
                        </form>
                    </div>
                </div>
                <div className='mt-4 manage-btn'>
                    <Link className='primary-btn' to='/manage'>Manage Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;