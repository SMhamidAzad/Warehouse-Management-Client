import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReload from '../../hooks/useReload';
import ManageSingleIn from '../ManageSingleIn/ManageSingleIn';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    const [isReload, setIsReload] = useReload();
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])
    return (
        <div style={{backgroundColor: '#021B29'}} className='pb-5'>
            <h2 className='text-center py-2 text-white'>Manage inventory</h2>
            <Table style={{backgroundColor: '#021B29', color: 'white'}}  bordered  >
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        {/* <th>Supplier</th> */}
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

            <Link to='/addItem'>Add New Inventory</Link>
        </div>
    );
};

export default ManageInventory;