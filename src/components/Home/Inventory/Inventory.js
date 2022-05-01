import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

    const handleDelivered = () => {
        const productQuantity = product.quantity;
        const newQuantity=(productQuantity-1);

        console.log(newQuantity);
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
            alert('successfully delivered!!!');
        })
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
                </div>
            </div>
        </div>
    );
};

export default Inventory;