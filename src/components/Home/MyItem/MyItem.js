import React, { useEffect, useState } from 'react';
import './MyItem.css'

const MyItem = ({ myitem }) => {
    const { _id, name, img, price, quantity, supplierName } = myitem;
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://blooming-hollows-74511.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://blooming-hollows-74511.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div className='row my-item p-2'>
            <div className="col-md-4">
                <img className='w-25 rounded-circle' src={img} alt="" />
            </div>
            <div className="col-md-6">
                <h4><u>Product Name</u>:   {name}</h4>
                <p><u>Suppier Name</u>:   {supplierName}</p>
                <button className='bg-danger text-white border-0 rounded' onClick={() => handleDeleteBtn(_id)}>Delete</button>
            </div>
            <div className="col-md-2">
                <p >Quantity: {quantity}</p>
                <h2>${price}</h2>
            </div>

        </div>
    );
};

export default MyItem;