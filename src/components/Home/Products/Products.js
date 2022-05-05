import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReload from '../../hooks/useReload';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [isReload,setIsReload]=useReload();
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])
    return (
       <div className='products'>
            <div className='container'>
            <h2 className='py-5 text-white fw-bold'>Inventory Items</h2>
            <div className='row g-4'>
            {
                products.slice(0,6).map(product => <Product key={product._id}
                product={product}
                ></Product>)
            }
            </div>
            <Link to='/manage'>Manage Inventory</Link>
        </div>
       </div>
    );
};

export default Products;