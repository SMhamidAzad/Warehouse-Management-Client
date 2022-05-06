import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useReload from '../../hooks/useReload';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isReload,setIsReload]=useReload()
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [id,isReload]);


    const UpdateQuantity=(newQuantity)=>{
        const url = `http://localhost:5000/product/${id}`;
       
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
             body: JSON.stringify({newQuantity})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setIsReload(!isReload)
            alert('successfully updated quantity!!!');
        })
    }
    const handleDelivered = () => {
        const productQuantity = product.quantity;
        const newQuantity=(productQuantity-1);

        console.log(newQuantity);
        UpdateQuantity(newQuantity);
    }
    const handleUpdateQuantity=e=>{
        e.preventDefault();
        const updateQuantity = parseInt(e.target.quantity.value);
        console.log(typeof updateQuantity);

        UpdateQuantity(updateQuantity)
    }
    return (
        <div className='container'>
            <h2 className="text-center my-5">Welcome to our inventory page</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src={product.img} alt="" />
                </div>
                <div className="col-md-8">
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                    <h4>Quantity: {product.quantity}</h4>
                    <h4>Price: {product.price}</h4>
                    <button onClick={() => handleDelivered()}>Delivered</button>
                    <form onSubmit={handleUpdateQuantity}>
                        <p>Do you want undate your product quantity?</p>
                        <input type="text" name="quantity" id="" />
                        <button>Update Quantity</button>
                    </form>
                </div>
            </div>
            <div>
                <Link className='manage-btn' to='/manage'>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Inventory;