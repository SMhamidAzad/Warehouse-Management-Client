import React from 'react';

const ManageSingleIn = ({product}) => {
    const {img, name, price, quantity}=product;
    return (
        <div className='col'>
            <img className='w-25' src={img} alt="" />
            <p>{name}</p>
            <button>Delete</button>
        </div>
    );
};

export default ManageSingleIn;