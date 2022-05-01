import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReload from '../../hooks/useReload';
import ManageSingleIn from '../ManageSingleIn/ManageSingleIn';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    const [isReload,setIsReload]=useReload();
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])
    return (
        <div className='row'>
            <h2>This is manage inventory page</h2>
            {
                products.map(product => <ManageSingleIn
                key={product._id}
                product={product}
                >

                </ManageSingleIn>)
            }
            <Link to='/addItem'>Add New Inventory</Link>
        </div>
    );
};

export default ManageInventory;