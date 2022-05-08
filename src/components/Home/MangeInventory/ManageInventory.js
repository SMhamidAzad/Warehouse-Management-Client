import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import useReload from '../../hooks/useReload';
import ManageSingleIn from '../ManageSingleIn/ManageSingleIn';

const ManageInventory = () => {
    const [products, setProducts] = useProduct()
    
    return (
        <div style={{ backgroundColor: '#021B29', height: '90vh' }} className='pb-5'>
            <h2 className='text-center py-5 text-white'>Manage inventory</h2>
            <Table style={{ backgroundColor: '#021B29', color: 'white' }} bordered  >
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <ManageSingleIn
                            key={product._id}
                            product={product}
                        >
                        </ManageSingleIn>)
                    }
                </tbody>
            </Table>
            <Link className='primary-btn' to='/addItem'>Add New Inventory</Link>
        </div>
    );
};

export default ManageInventory;