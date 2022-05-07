import React from 'react';
import './MyItem.css'

const MyItem = ({myitem}) => {
    console.log(myitem);
    const {name,img,price,quantity,supplierName}=myitem;
    return (
        <div className='row my-item p-2'>
            <div className="col-md-4">
                <img className='w-25 rounded-circle' src={img} alt="" />
            </div>
            <div className="col-md-6">
                <h4>Product Name: {name}</h4>
                <p>Suppier Name: {supplierName}</p>
            </div>
            <div className="col-md-2">
                <p >Quantity: {quantity}</p>
                <h2>${price}</h2>
            </div>

        </div>
    );
};

export default MyItem;